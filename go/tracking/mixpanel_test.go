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
		err := be.Track(ctx, "sample", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "sample", transport.received.Event)
	})

	t.Run("sets account number as $distinct_id if present", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", map[string]string{
			"account_number": "000000",
		})

		require.NoError(t, err)
		assert.Equal(t, "000000", transport.received.Properties["$distinct_id"])
	})

	t.Run("sets account id as $distinct_id if present", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", map[string]string{
			"account_id": "account-id",
		})

		require.NoError(t, err)
		assert.Equal(t, "account-id", transport.received.Properties["$distinct_id"])
	})

	t.Run("sets token", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", map[string]string{})

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
		err := be.Track(ctx, "sample", map[string]string{})

		assert.Errorf(t, err, "mixpanel backend: track call was not successful")
	})

	t.Run("sends all properties and returns nil if successful", func(t *testing.T) {
		transport := &testRoundTripper{
			response: "1",
		}
		client := &http.Client{
			Transport: transport,
		}

		be := tracking.NewMixpanelBackend("apiKey", client)
		err := be.Track(ctx, "sample", map[string]string{
			"prop1": "prop1",
			"prop2": "prop2",
		})

		require.NoError(t, err)

		assert.Equal(t, "prop1", transport.received.Properties["prop1"])
		assert.Equal(t, "prop2", transport.received.Properties["prop2"])
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
