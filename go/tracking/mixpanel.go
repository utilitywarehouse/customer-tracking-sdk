package tracking

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

const mixpanelEndpoint = "https://api-eu.mixpanel.com/track"

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

func (b *MixpanelBackend) Track(ctx context.Context, name string, attrs map[string]string) error {
	properties := map[string]string{}
	for k, v := range attrs {
		properties[k] = v
	}

	// Set $distinct_id if identifiers are available
	if accountNumber, ok := properties["account_number"]; ok {
		properties["$distinct_id"] = accountNumber
	}
	if accountID, ok := properties["account_id"]; ok {
		properties["$distinct_id"] = accountID
	}

	// Set token
	properties["token"] = b.token

	r := &mixpanelRequest{
		Event:      name,
		Properties: properties,
	}

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

	// From Mixpanel documentation:
	// The request will return an HTTP response with
	// body "1" if the track call is successful, and a "0" otherwise.
	defer res.Body.Close()
	respBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return fmt.Errorf("mixpanel backend: %w", err)
	}

	if string(respBody) != "1" {
		return fmt.Errorf("mixpanel backend: track call was not successful")
	}

	return nil
}
