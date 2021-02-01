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
		client, transport := tripper(1, "")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Track(ctx, "sample", "id", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "sample", transport.received.Event)
	})

	t.Run("sets distinct_id ", func(t *testing.T) {
		client, transport := tripper(1, "")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Track(ctx, "sample", "000000", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "000000", transport.received.Properties["distinct_id"])
	})

	t.Run("sets token", func(t *testing.T) {
		client, transport := tripper(1, "")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Track(ctx, "sample", "0000000", map[string]string{})

		require.NoError(t, err)
		assert.Equal(t, "apiKey", transport.received.Properties["token"])
	})

	t.Run("returns an error if call is not successful", func(t *testing.T) {
		client, _ := tripper(0, "errorMsg")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Track(ctx, "sample", "0000000", map[string]string{})

		assert.Errorf(t, err, "mixpanel backend: call was not successful: errorMsg")
	})

	t.Run("sends all properties and returns nil if successful", func(t *testing.T) {
		client, transport := tripper(1, "")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
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
		client, transport := tripper(1, "")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Alias(ctx, "id", "alias")

		require.NoError(t, err)

		assert.Equal(t, "$create_alias", transport.received.Event)
		assert.Equal(t, "id", transport.received.Properties["distinct_id"])
		assert.Equal(t, "alias", transport.received.Properties["alias"])
		assert.Equal(t, "apiKey", transport.received.Properties["token"])
	})

	t.Run("returns an error if call is not successful", func(t *testing.T) {
		client, _ := tripper(0, "errMsg")

		be := tracking.NewMixpanelBackend("apiKey", client, "")
		err := be.Alias(ctx, "id", "alias")

		assert.Errorf(t, err, "mixpanel backend: call was not successful: errMsg")
	})
}

type testRoundTripper struct {
	response *mixpanelResponse
	received *mixpanelRequest
}

type mixpanelRequest struct {
	Event      string            `json:"event"`
	Properties map[string]string `json:"properties"`
}

type mixpanelResponse struct {
	Status int    `json:"status"`
	Error  string `json:"error"`
}

func (t *testRoundTripper) RoundTrip(req *http.Request) (*http.Response, error) {

	err := req.ParseForm()

	if err != nil {
		return nil, err
	}

	sent := &mixpanelRequest{}
	err = json.Unmarshal([]byte(req.Form.Get("data")), sent)
	if err != nil {
		return nil, err
	}

	t.received = sent

	resS, err := json.Marshal(t.response)

	if err != nil {
		return nil, err
	}

	resp := &http.Response{
		StatusCode: http.StatusOK,
		Body:       ioutil.NopCloser(bytes.NewBuffer(resS)),
	}

	return resp, nil
}

func tripper(code int, msg string) (*http.Client, *testRoundTripper) {
	transport := &testRoundTripper{
		response: &mixpanelResponse{
			Status: code,
			Error:  msg,
		},
	}
	client := &http.Client{
		Transport: transport,
	}
	return client, transport
}

func TestMixpanelBackend_TrackIntegration(t *testing.T) {

	mp := tracking.NewMixpanelBackend("asd", http.DefaultClient, "")

	err := mp.Track(context.Background(), "test-event", "test-distinct-id", map[string]string{"param": "value"})

	assert.NoError(t, err)
}
