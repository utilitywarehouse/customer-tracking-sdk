import {
    Tracker, MixpanelBackend, Subject, Stage, Intent, Interaction, InteractionChannel
} from "@utilitywarehouse/customer-tracking-for-server"

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
    actor: {id: "3002098", attributes: {account_number: "3002098"}},
    // application, where appropriate should indicate the subject the user token was issued to
    // ie. a graphql tracking should use the react app ID in this place because the react app is
    // what triggered the action, this helps understanding where the action originated if many
    // different frontends are using the same backend
    application: {id: "ds-meter-reads"},
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    stage: Stage.STAGE_COMPLETED,
    attributes: getAttributes() // note how attributes can be a promise
})

tracker.trackInteraction({
    actor: {id: "3002098", attributes: {account_number: "3002098"}},
    application: {id: "ds-meter-reads"},
    subject: Subject.SUBJECT_METER_READING,
    intent: Intent.INTENT_METER_READING_SUBMIT,
    interaction: Interaction.INTERACTION_CLICKED,
    channel: InteractionChannel.INTERACTION_CHANNEL_EMAIL,
    // note how the failure to resolve the promise will result in an onError event
    // trigger rather than the tracker.trackInteraction promise rejection
    attributes: failAttributes()
})