import {Tracker, MixpanelBackend, Subject, Stage, Intent, Interaction, InteractionChannel} from "../"

const tracker = new Tracker(
    new MixpanelBackend("apiToken", {debug: true}),
    {id: "ds-meter-read-frontend"},
)

tracker.onError((err: Error) => {
    console.error("onError -> ", err.message)
})

const getAttributes = (): Promise<{ [k: string]: string }> => {
    return new Promise(r => r({timeOfLastRead: "2020-06-01"}));
}

const failAttributes = (): Promise<{ [k: string]: string }> => {
    return new Promise((_,r) => r(new Error("failed to obtain event context")));
}

// below event will be delivered without account identification
tracker.trackStage({
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    stage: Stage.STAGE_STARTED,
})

tracker.identify({id: "", number: "3002098"});

tracker.trackStage({
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    stage: Stage.STAGE_COMPLETED,
    attributes: getAttributes() // note how attributes can be a promise
})

// after identify, events are delivered with account information attached

tracker.trackInteraction({
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    interaction: Interaction.INTERACTION_CLICKED,
    channel: InteractionChannel.INTERACTION_CHANNEL_EMAIL,
    // note how the failure to resolve the promise will result in an onError event
    // trigger rather than the tracker.trackInteraction promise rejection
    attributes: failAttributes()
})