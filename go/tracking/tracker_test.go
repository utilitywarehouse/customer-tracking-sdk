package tracking_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/utilitywarehouse/customer-tracking-sdk/go/tracking"
	"github.com/utilitywarehouse/customer-tracking-sdk/go/types"
)

func TestTrackStage(t *testing.T) {
	ctx := context.Background()
	e := &types.StageEvent{
		Account: &types.Account{
			Id:     "accId",
			Number: "000000",
		},
		Application: &types.Application{
			Id: "test-application",
		},
		Subject: types.Subject_SUBJECT_METER_READING,
		Intent:  types.Intent_INTENT_METER_READING_SUBMIT,
		Stage:   types.Stage_STAGE_COMPLETED,
		Attributes: map[string]string{
			"sample key": "foo",
		},
	}

	b := &mockBackend{}
	tracker := tracking.New(b)
	err := tracker.TrackStage(ctx, e)
	require.NoError(t, err)

	require.Len(t, b.events, 1)
	receivedEvent := b.events[0]

	assert.Equal(t, "completed.meter-reading-submit", receivedEvent.name)
	expectedAttributes := map[string]string{
		"account_number": "000000",
		"account_id":     "accId",
		"client_id":      "test-application",
		"subject":        "meter-reading",
		"intent":         "meter-reading-submit",
		"stage":          "completed",
		"sample_key":     "foo",
	}
	assert.Equal(t, expectedAttributes, receivedEvent.attributes)
}

func TestTrackInteraction(t *testing.T) {
	ctx := context.Background()
	e := &types.InteractionEvent{
		Account: &types.Account{
			Id:     "accId",
			Number: "000000",
		},
		Application: &types.Application{
			Id: "test-application",
		},
		Subject:     types.Subject_SUBJECT_METER_READING,
		Intent:      types.Intent_INTENT_METER_READING_SUBMIT,
		Channel:     types.InteractionChannel_INTERACTION_CHANNEL_EMAIL,
		Interaction: types.Interaction_INTERACTION_VIEWED,
		Attributes: map[string]string{
			"sample key": "foo",
		},
	}

	b := &mockBackend{}
	tracker := tracking.New(b)
	err := tracker.TrackInteraction(ctx, e)
	require.NoError(t, err)

	require.Len(t, b.events, 1)
	receivedEvent := b.events[0]

	assert.Equal(t, "email.viewed", receivedEvent.name)
	expectedAttributes := map[string]string{
		"account_number":      "000000",
		"account_id":          "accId",
		"client_id":           "test-application",
		"subject":             "meter-reading",
		"intent":              "meter-reading-submit",
		"interaction_channel": "email",
		"interaction":         "viewed",
		"sample_key":          "foo",
	}
	assert.Equal(t, expectedAttributes, receivedEvent.attributes)
}

type event struct {
	name       string
	attributes map[string]string
}

type mockBackend struct {
	events []event
}

func (b *mockBackend) Track(_ context.Context, name string, attrs map[string]string) error {
	e := event{
		name:       name,
		attributes: attrs,
	}
	b.events = append(b.events, e)
	return nil
}
