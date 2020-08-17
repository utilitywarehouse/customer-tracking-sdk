package tracking

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/davecgh/go-spew/spew"
)

const mixpanelEndpoint = "https://api-eu.mixpanel.com/track?verbose=1"

func NewMixpanelBackend(token string, client *http.Client) *MixpanelBackend {
	return &MixpanelBackend{
		token:  token,
		client: client,
	}
}

type MixpanelBackend struct {
	token  string
	client *http.Client
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

	spew.Dump(r)

	body, err := json.Marshal(r)
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	req, err := http.NewRequest("POST", mixpanelEndpoint, bytes.NewBuffer(body))
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

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

	properties["$distinct_id"] = distinctID

	return b.track(ctx, name, properties)

}

func (b *MixpanelBackend) Alias(ctx context.Context, currentID string, alias string) error {
	props := map[string]string{
		"distinct_id": currentID,
		"alias":       alias,
	}
	return b.track(ctx, "$create_alias", props)
}
