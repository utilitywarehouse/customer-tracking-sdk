"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_tracking_for_server_1 = require("@utilitywarehouse/customer-tracking-for-server");
const tracker = new customer_tracking_for_server_1.Tracker(new customer_tracking_for_server_1.MixpanelBackend("apiToken", { debug: true }));
tracker.onError((err) => {
    console.error("onError -> ", err.message);
});
const getAttributes = () => {
    return new Promise(r => r({ timeOfLastRead: "2020-06-01" }));
};
const failAttributes = () => {
    return new Promise((_, r) => r(new Error("failed to obtain event context")));
};
tracker.trackStage({
    account: { id: "", number: "3002098" },
    // application, where appropriate should indicate the subject the user token was issued to
    // ie. a graphql tracking should use the react app ID in this place because the react app is
    // what triggered the action, this helps understanding where the action originated if many
    // different frontends are using the same backend
    application: { id: "ds-meter-reads" },
    subject: customer_tracking_for_server_1.Subject.SUBJECT_METER_READING,
    intent: customer_tracking_for_server_1.Intent.INTENT_METER_READING_SUBMIT,
    stage: customer_tracking_for_server_1.Stage.STAGE_COMPLETED,
    attributes: getAttributes() // note how attributes can be a promise
});
tracker.trackInteraction({
    account: { id: "", number: "3002098" },
    application: { id: "ds-meter-reads" },
    subject: customer_tracking_for_server_1.Subject.SUBJECT_METER_READING,
    intent: customer_tracking_for_server_1.Intent.INTENT_METER_READING_SUBMIT,
    interaction: customer_tracking_for_server_1.Interaction.INTERACTION_CLICKED,
    channel: customer_tracking_for_server_1.InteractionChannel.INTERACTION_CHANNEL_EMAIL,
    // note how the failure to resolve the promise will result in an onError event
    // trigger rather than the tracker.trackInteraction promise rejection
    attributes: failAttributes()
});
