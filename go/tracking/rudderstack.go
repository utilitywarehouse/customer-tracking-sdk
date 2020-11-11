package tracking

import (
	"context"

	"github.com/pkg/errors"
	"github.com/rudderlabs/analytics-go"
)

func NewRudderstackBackend(token string, url string) *RudderstackBackend {
	return &RudderstackBackend{
		client: analytics.New(token, url),
	}
}

type RudderstackBackend struct {
	client analytics.Client
}

func (b *RudderstackBackend) Track(ctx context.Context, name string, distinctID string, attrs map[string]string) error {
	t := analytics.Track{
		UserId:     distinctID,
		Event:      name,
		Properties: analytics.NewProperties(),
	}

	for k, v := range attrs {
		t.Properties.Set(k, v)
	}

	if err := b.client.Enqueue(t); err != nil {
		return errors.Wrap(err, "failed to write to rudderstack")
	}

	return nil

}

func (b *RudderstackBackend) Alias(ctx context.Context, currentID string, alias string) error {
	t := analytics.Alias{
		PreviousId: currentID,
		UserId:     alias,
	}

	if err := b.client.Enqueue(t); err != nil {
		return errors.Wrap(err, "failed to write to rudderstack")
	}

	b.client.Close()

	return nil
}

func (b *RudderstackBackend) Close() error {
	return b.client.Close()
}
