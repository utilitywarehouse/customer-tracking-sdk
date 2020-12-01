import {Tracker} from "./tracker";
import {Backend} from "./backend";
import {
    Actor, Application, JourneySubject, JourneyIntent, JourneyStage, Channel, Journey,
    Interaction, InteractionTargetType, InteractionType
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

    const eventName = "journey_stage";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application: Application = {id: "acc-123", attributes: {version: "1"}};
    const subject: JourneySubject = JourneySubject.JOURNEY_SUBJECT_MOBILE_SERVICE;
    const intent: JourneyIntent = JourneyIntent.JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE;
    const journey: Journey = {intent, subject};
    const stage: JourneyStage = JourneyStage.JOURNEY_STAGE_SUBMITTED;
    const channel: Channel =  Channel.CHANNEL_WEB;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackJourneyStage({
            actor,
            application,
            journey,
            stage,
            channel,
            step: "sim-config",
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        application: application.id,
        application_version: application.attributes.version,
        channel: "web",
        journey: "new-service-or-upgrade:mobile-service",
        subject: "mobile-service",
        step: "sim-config",
        intent: "new-service-or-upgrade",
        stage: "submitted",
        ...expectedAttributes
    });
})


test("interaction event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "journey_interaction";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application = {id: "acc-123"};
    const subject: JourneySubject = JourneySubject.JOURNEY_SUBJECT_MOBILE_SERVICE;
    const intent: JourneyIntent = JourneyIntent.JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE;
    const journey: Journey = {intent, subject};
    const interactionType: InteractionType = InteractionType.INTERACTION_TYPE_CLICK;
    const interactionTargetType: InteractionTargetType = InteractionTargetType.INTERACTION_TARGET_TYPE_TOGGLE;
    const interaction: Interaction = {
        type: interactionType,
        targetType: interactionTargetType,
        target: "budget-plan-toggle",
    }
    const channel: Channel =  Channel.CHANNEL_WEB;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackJourneyInteraction({
            actor,
            application,
            journey,
            interaction,
            channel,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        application: application.id,
        channel: "web",
        journey: "new-service-or-upgrade:mobile-service",
        subject: "mobile-service",
        intent: "new-service-or-upgrade",
        step: "",
        target: "budget-plan-toggle",
        target_type: "toggle",
        type: "click",
        ...expectedAttributes
    });
})

test("visit event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "visit";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application = {id: "acc-123"};
    const location = "location";
    const channel: Channel =  Channel.CHANNEL_WEB;
    const attributes = {"a-a": "b", c: 'd'};
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackVisit({
            actor,
            application,
            location,
            channel,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        application: application.id,
        channel: "web",
        location, ...expectedAttributes
    });
})

test("click event tracking", async () => {

    const backend = mockBackend();
    const tracker = new Tracker(backend);

    const eventName = "click";

    const actor: Actor = {attributes: {"account-number": "acc-123", "account-id": "acc-id"}, id: "acc-id"};
    const application = {id: "acc-123"};
    const target = "target";
    const attributes = {"a-a": "b", c: 'd'};
    const channel: Channel =  Channel.CHANNEL_WEB;
    const expectedAttributes = {"a_a": "b", c: 'd'};

    await tracker.trackClick({
            actor,
            application,
            target,
            channel,
            attributes: new Promise(r => r(attributes)),
        }
    )

    expect(backend.track).toBeCalledWith(eventName, actor.id, {
        "account_number": actor.attributes["account-number"],
        "account_id": actor.id,
        application: application.id,
        channel: "web",
        target,
        ...expectedAttributes
    });
})

