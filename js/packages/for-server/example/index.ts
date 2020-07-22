import {Tracker, MixpanelBackend, Subject, Stage, Intent, Interaction, InteractionChannel} from "../"

const tracker = new Tracker(
    new MixpanelBackend("apiToken", {debug: true}),
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

tracker.trackStage({
    account: {id: "", number: "3002098"},
    application: {id: "ds-meter-reads"},
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    stage: Stage.STAGE_COMPLETED,
    attributes: getAttributes() // note how attributes can be a promise
})

tracker.trackInteraction({
    account: {id: "", number: "3002098"},
    application: {id: "ds-meter-reads"},
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    interaction: Interaction.INTERACTION_CLICKED,
    channel: InteractionChannel.INTERACTION_CHANNEL_EMAIL,
    // note how the failure to resolve the promise will result in an onError event
    // trigger rather than the tracker.trackInteraction promise rejection
    attributes: failAttributes()
})