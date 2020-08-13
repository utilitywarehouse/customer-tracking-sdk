package tracking

import (
	"context"
	"fmt"
	"regexp"
	"strings"

	"github.com/utilitywarehouse/customer-tracking-sdk/go/types"
)

type Tracker struct {
	backend Backend
}

type Backend interface {
	Track(ctx context.Context, eventName string, attributes map[string]string) error
	Alias(ctx context.Context, currentID string, alias string) error
}

func New(backend Backend) *Tracker {
	return &Tracker{
		backend: backend,
	}
}

// Alias allows to associate another unique ID to an existing identity.
func (t *Tracker) Alias(ctx context.Context, currentID string, alias string) error {
	return t.backend.Alias(ctx, currentID, alias)
}

func (t *Tracker) TrackStage(ctx context.Context, event *types.StageEvent) error {
	name := stageToString(event.Stage) + "." + intentToString(event.Intent)
	attrs := map[string]string{
		"client_id": clientID(event.Application),
		"intent":    intentToString(event.Intent),
		"stage":     stageToString(event.Stage),
		"subject":   subjectToString(event.Subject),
	}

	accountNumber := accountNumber(event.Account)
	if accountNumber != "" {
		attrs["account_number"] = accountNumber
	}

	accountID := accountID(event.Account)
	if accountID != "" {
		attrs["account_id"] = accountID
	}

	customAttrs := formatAttributes(event.Attributes)
	for k, v := range customAttrs {
		attrs[k] = v
	}
	return t.backend.Track(ctx, name, attrs)
}

func (t *Tracker) TrackInteraction(ctx context.Context, event *types.InteractionEvent) error {
	name := channelToString(event.Channel) + "." + interactionToString(event.Interaction)
	attrs := map[string]string{
		"client_id":           clientID(event.Application),
		"intent":              intentToString(event.Intent),
		"subject":             subjectToString(event.Subject),
		"interaction":         interactionToString(event.Interaction),
		"interaction_channel": channelToString(event.Channel),
	}

	accountNumber := accountNumber(event.Account)
	if accountNumber != "" {
		attrs["account_number"] = accountNumber
	}

	accountID := accountID(event.Account)
	if accountID != "" {
		attrs["account_id"] = accountID
	}

	customAttrs := formatAttributes(event.Attributes)
	for k, v := range customAttrs {
		attrs[k] = v
	}
	return t.backend.Track(ctx, name, attrs)
}

func accountNumber(account *types.Account) string {
	if account == nil {
		return ""
	}
	return account.Number
}

func accountID(account *types.Account) string {
	if account == nil {
		return ""
	}
	return account.Id
}

func clientID(application *types.Application) string {
	if application == nil {
		return ""
	}
	return application.Id
}

func replaceNonAlphanumericWithDashes(str string) string {
	re := regexp.MustCompile(`[^a-z]`)
	return re.ReplaceAllString(str, "-")
}

func enumToString(value fmt.Stringer, root string) string {
	str := strings.ToLower(value.String())
	str = strings.ReplaceAll(str, root, "")
	return replaceNonAlphanumericWithDashes(str)
}

func stageToString(stage types.Stage) string {
	return enumToString(stage, "stage_")
}

func intentToString(intent types.Intent) string {
	return enumToString(intent, "intent_")
}

func subjectToString(subject types.Subject) string {
	return enumToString(subject, "subject_")
}

func channelToString(subject types.InteractionChannel) string {
	return enumToString(subject, "interaction_channel_")
}

func interactionToString(subject types.Interaction) string {
	return enumToString(subject, "interaction_")
}

func formatAttributes(attrs map[string]string) map[string]string {
	formatted := map[string]string{}
	if attrs == nil {
		return formatted
	}

	for k, v := range attrs {
		formatted[formatMapKey(k)] = v
	}

	return formatted
}

func formatMapKey(key string) string {
	str := strings.ToLower(key)
	re := regexp.MustCompile(`[^a-z]`)
	return re.ReplaceAllString(str, "_")
}
