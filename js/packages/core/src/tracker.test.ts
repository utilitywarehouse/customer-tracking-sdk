import {Tracker} from "./tracker";
import {Backend} from "./backend";
import {
    Actor, Application, Intent, Interaction, InteractionChannel, Stage, Subject,
} from "@utilitywarehouse/customer-tracking-types";

function mockBackend(): Backend {
    return {
        track: jest.fn(),
        alias: jest.fn(),
    }
}

test("stage event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "submitted.meter-reading-submit";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123"};
    const subject: Subject = Subject.SUBJECT_METER_READING;
    const intent: Intent = Intent.INTENT_METER_READING_SUBMIT;
    const stage: Stage = Stage.STAGE_SUBMITTED;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackStage({
            actor,
            application,
            subject,
            intent,
            stage,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
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

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123"};
    const subject: Subject = Subject.SUBJECT_METER_READING;
    const intent: Intent = Intent.INTENT_METER_READING_SUBMIT;
    const interaction: Interaction = Interaction.INTERACTION_CLICKED;
    const channel: InteractionChannel = InteractionChannel.INTERACTION_CHANNEL_EMAIL;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackInteraction({
            actor,
            application,
            subject,
            intent,
            interaction,
            channel,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
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

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123"};
    const location = "location";
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackVisit({
            actor,
            application,
            location,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        client_id: application.id,
        location, ...expectedAttributes
    });
})

test("click event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "click";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123"};
    const target = "target";
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackClick({
            actor,
            application,
            target,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        client_id: application.id,
        target,
        ...expectedAttributes
    });
})

test("click event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "click";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123"};
    const target = "target";
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackClick({
            actor,
            application,
            target,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        client_id: application.id,
        target,
        ...expectedAttributes
    });
})