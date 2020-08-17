package tracking_test

import (
	"bytes"
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/utilitywarehouse/customer-tracking-sdk/go/tracking"
)

func TestMixpanelBackend_Track(t *testing.T) {
	ctx := context.Background()

	t.Run("sets provided event name as event", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", "id", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "sample", transport.received.Event)
	})

	t.Run("sets $distinct_id ", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", "000000", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "000000", transport.received.Properties["$distinct_id"])
	})

	t.Run("sets token", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", "0000000", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "apiKey", transport.received.Properties["token"])
	})

	t.Run("returns an error if call is not successful", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "0",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", "0000000", map[string]string{})

		assert.Errorf(t, err, "mixpanel backend: call was not successful")
	})

	t.Run("sends all properties and returns nil if successful", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", "0000000", map[string]string{
			"prop1": "prop1",
			"prop2": "prop2",
		})

		require.NoError(t, err)

		assert.Equal(t, "prop1", transport.received.Properties["prop1"])
		assert.Equal(t, "prop2", transport.received.Properties["prop2"])
	})
}

func TestMixpanelBackend_Alias(t *testing.T) {
	ctx := context.Background()

	t.Run("sends correct properties and returns nil", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Alias(ctx, "id", "alias")

		require.NoError(t, err)

		assert.Equal(t, "$create_alias", transport.received.Event)
		assert.Equal(t, "id", transport.received.Properties["distinct_id"])
		assert.Equal(t, "alias", transport.received.Properties["alias"])
		assert.Equal(t, "apiKey", transport.received.Properties["token"])
	})

	t.Run("returns an error if call is not successful", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "0",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Alias(ctx, "id", "alias")

		assert.Errorf(t, err, "mixpanel backend: call was not successful")
	})
}

type testRoundTripper struct {
	response string

	received *mixpanelRequest
}

type mixpanelRequest struct {
	Event      string            `json:"event"`
	Properties map[string]string `json:"properties"`
}

func (t *testRoundTripper) RoundTrip(req *http.Request) (*http.Response, error) {
	defer req.Body.Close()
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		return nil, err
	}

	sent := &mixpanelRequest{}
	err = json.Unmarshal(body, sent)
	if err != nil {
		return nil, err
	}

	t.received = sent

	resp := &http.Response{
		StatusCode: http.StatusOK,
		Body:       ioutil.NopCloser(bytes.NewBufferString(t.response)),
	}

	return resp, nil
}
