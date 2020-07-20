import {Tracker} from "./tracker";
import {Backend} from "./backend";
import {Account, Application, Intent, Interaction, InteractionChannel, Stage, Subject} from "./generated/tracking";

function mockBackend(): Backend {
    return {
        track: jest.fn(),
    }
}

test("stage event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "submitted.meter-reading-submit";

    const account: Account = {number: "acc-123", id: ""};
    const application: Application = {id: "acc-123"};
    const subject: Subject = Subject.SUBJECT_METER_READING;
    const intent: Intent = Intent.INTENT_METER_READING_SUBMIT;
    const stage: Stage = Stage.STAGE_SUBMITTED;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackStage(
        account,
        application,
        subject,
        intent,
        stage,
        new Promise(r => r(attributes)),
    )

    expect(backend.track).toBeCalledWith(eventName, {
        "account_number": account.number,
        client_id: application.id,
        subject: "meter-reading",
        intent: "meter-reading-submit",
        stage: "submitted",
        ...expectedAttributes
    });
})

test("interaction event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "email.clicked";

    const account: Account = {number: "acc-123", id: ""};
    const application: Application = {id: "acc-123"};
    const subject: Subject = Subject.SUBJECT_METER_READING;
    const intent: Intent = Intent.INTENT_METER_READING_SUBMIT;
    const interaction: Interaction = Interaction.INTERACTION_CLICKED;
    const channel: InteractionChannel = InteractionChannel.INTERACTION_CHANNEL_EMAIL;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackInteraction(
        account,
        application,
        subject,
        intent,
        interaction,
        channel,
        new Promise(r => r(attributes)),
    )

    expect(backend.track).toBeCalledWith(eventName, {
        "account_number": account.number,
        client_id: application.id,
        subject: "meter-reading",
        intent: "meter-reading-submit",
        interaction: "clicked",
        interaction_channel: "email",
        ...expectedAttributes
    });
})

test("visit event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "visit";

    const account: Account = {number: "acc-123", id: ""};
    const application: Application = {id: "acc-123"};
    const location = "location";
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackVisit(
        account,
        application,
        location,
        new Promise(r => r(attributes)),
    )

    expect(backend.track).toBeCalledWith(eventName, {
        "account_number": account.number, client_id: application.id, location, ...expectedAttributes
    });
})

test("click event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "click";

    const account: Account = {number: "acc-123", id: ""};
    const application: Application = {id: "acc-123"};
    const target = "target";
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackClick(
        account,
        application,
        target,
        new Promise(r => r(attributes)),
    )

    expect(backend.track).toBeCalledWith(eventName, {
        "account_number": account.number, client_id: application.id, target, ...expectedAttributes
    });
})