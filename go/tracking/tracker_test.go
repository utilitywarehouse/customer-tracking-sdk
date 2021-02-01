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
		Actor: &types.Actor{
			Id:         "000000",
			Attributes: map[string]string{"account-number": "000001"},
		},
		Application: &types.Application{
			Id: "test-application",
		},
		Subject: types.SUBJECT_METER_READING,
		Intent:  types.INTENT_METER_READING_SUBMIT,
		Stage:   types.STAGE_COMPLETED,
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
	assert.Equal(t, "000000", receivedEvent.id)
	expectedAttributes := map[string]string{
		"account_number": "000001",
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
		Actor: &types.Actor{
			Id:         "000000",
			Attributes: map[string]string{"account-number": "000001"},
		},
		Application: &types.Application{
			Id: "test-application",
		},
		Subject:     types.SUBJECT_METER_READING,
		Intent:      types.INTENT_METER_READING_SUBMIT,
		Channel:     types.INTERACTION_CHANNEL_EMAIL,
		Interaction: types.INTERACTION_VIEWED,
		Attributes: map[string]string{
			"sample key":  "foo",
			"sample key2": "foo",
		},
	}

	b := &mockBackend{}
	tracker := tracking.New(b)
	err := tracker.TrackInteraction(ctx, e)
	require.NoError(t, err)

	require.Len(t, b.events, 1)
	receivedEvent := b.events[0]

	assert.Equal(t, "email.viewed", receivedEvent.name)
	assert.Equal(t, "000000", receivedEvent.id)
	expectedAttributes := map[string]string{
		"account_number":      "000001",
		"client_id":           "test-application",
		"subject":             "meter-reading",
		"intent":              "meter-reading-submit",
		"interaction_channel": "email",
		"interaction":         "viewed",
		"sample_key":          "foo",
		"sample_key2":         "foo",
	}
	assert.Equal(t, expectedAttributes, receivedEvent.attributes)
}

type event struct {
	name       string
	id         string
	attributes map[string]string
}

type mockBackend struct {
	events []event
}

func (b *mockBackend) Import(_ context.Context, name string, id string, attrs map[string]string) error {
	return nil
}

func (b *mockBackend) Track(_ context.Context, name string, id string, attrs map[string]string) error {
	e := event{
		name:       name,
		id:         id,
		attributes: attrs,
	}
	b.events = append(b.events, e)
	return nil
}

func (b *mockBackend) Alias(ctx context.Context, currentID string, alias string) error {
	return nil
}

func (b *mockBackend) Close() error {
	return nil
}
