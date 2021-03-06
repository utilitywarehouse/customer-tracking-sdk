package tracking

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

const (
	mixpanelEndpoint = "https://api-eu.mixpanel.com/track"
	mixpanelImportEndpoint = "https://api-eu.mixpanel.com/import"
)

func NewMixpanelBackend(token string, client *http.Client, secret string) *MixpanelBackend {
	return &MixpanelBackend{
		token:  token,
		client: client,
		secret: secret, // Required for import implementation
	}
}

type MixpanelBackend struct {
	token  string
	client *http.Client
	secret string
}

type mixpanelRequest struct {
	Event      string            `json:"event"`
	Properties map[string]string `json:"properties"`
}

type mixpanelResponse struct {
	Status int    `json:"status"`
	Error  string `json:"error"`
}

func (b *MixpanelBackend) track(ctx context.Context, eventName string, properties map[string]string) error {
	// Set token
	properties["token"] = b.token

	r := &mixpanelRequest{
		Event:      eventName,
		Properties: properties,
	}

	data, err := json.Marshal(r)
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	body := url.Values{}
	body.Set("data", string(data))
	body.Set("verbose", "1")

	req, err := http.NewRequestWithContext(ctx, "POST", mixpanelEndpoint, strings.NewReader(body.Encode()))
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	// If event is older than 4 days https://developer.mixpanel.com/reference/events#import-events
	imp := shouldImport(properties)
	if imp && b.secret != "" {
		req, err = http.NewRequestWithContext(ctx, "POST", mixpanelImportEndpoint, strings.NewReader(body.Encode()))
		if err != nil {
			return fmt.Errorf("mixpanel backend: %w", err)
		}

		req.SetBasicAuth(b.secret, "")
	}

	req.Header.Set("Content-type", "application/x-www-form-urlencoded")

	res, err := b.client.Do(req)
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	defer res.Body.Close()

	mpRes := &mixpanelResponse{}

	err = json.NewDecoder(res.Body).Decode(mpRes)

	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	if mpRes.Status != 1 {
		return fmt.Errorf("mixpanel backend: call was not successful: %s", mpRes.Error)
	}

	return nil
}

func (b *MixpanelBackend) Track(ctx context.Context, name string, distinctID string, attrs map[string]string) error {
	properties := map[string]string{}
	for k, v := range attrs {
		properties[k] = v
	}

	properties["distinct_id"] = distinctID

	return b.track(ctx, name, properties)

}

func (b *MixpanelBackend) Alias(ctx context.Context, currentID string, alias string) error {
	props := map[string]string{
		"distinct_id": currentID,
		"alias":       alias,
	}
	return b.track(ctx, "$create_alias", props)
}

func (b *MixpanelBackend) Close() error {
	return nil
}

func shouldImport(properties map[string]string) bool {
	ets, ok := properties["time"]

	if !ok {
		return false
	}

	eti, err := strconv.ParseInt(ets, 10, 64)
	if err != nil {
		return false
	}

	if time.Unix(eti, 0).Before(time.Now().AddDate(0,0,-4)) {
		return true
	}

	return false
}