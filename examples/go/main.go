package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/utilitywarehouse/customer-tracking-sdk/go/tracking"
	"github.com/utilitywarehouse/customer-tracking-sdk/go/types"
)

func main() {
	ctx := context.Background()

	// Create your backend of choice
	client := &http.Client{
		Timeout: 2 * time.Second,
	}
	be := tracking.NewMixpanelBackend("apiKey", client)

	// Create a tracker
	tracker := tracking.New(be)

	// Track an event
	stage := &types.StageEvent{
		Account: &types.Account{
			Id:     "account-id",
			Number: "000000",
		},
		Application: &types.Application{
			Id: "your-application",
		},
		Subject: types.Subject_SUBJECT_METER_READING,
		Intent:  types.Intent_INTENT_METER_READING_SUBMIT,
		Stage:   types.Stage_STAGE_COMPLETED,
		Attributes: map[string]string{
			"your-additional-attribute": "foo",
		},
	}

	err := tracker.TrackStage(ctx, stage)
	if err != nil {
		log.Fatal(err)
	}

	// Or do it in a separate routine
	go func() {
		interaction := &types.InteractionEvent{
			Account: &types.Account{
				Id:     "account-id",
				Number: "000000",
			},
			Application: &types.Application{
				Id: "your-application",
			},
			Subject:     types.Subject_SUBJECT_METER_READING,
			Intent:      types.Intent_INTENT_METER_READING_SUBMIT,
			Channel:     types.InteractionChannel_INTERACTION_CHANNEL_EMAIL,
			Interaction: types.Interaction_INTERACTION_CLICKED,
			Attributes: map[string]string{
				"your-additional-attribute": "foo",
			},
		}

		_ = tracker.TrackInteraction(ctx, interaction)
	}()
}
