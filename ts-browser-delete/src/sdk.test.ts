import {Tracker} from "./sdk";
import {Backend} from "./backend";
import {
    Account,
    Application, ClickEvent,
    Intent,
    Interaction, InteractionChannel,
    InteractionEvent,
    Stage,
    StageEvent,
    Subject, VisitEvent
} from "../generated/tracking";

function mockBackend(): Backend {
    return {
        trackStage: jest.fn(),
        trackVisit: jest.fn(),
        trackInteraction: jest.fn(),
        trackClick: jest.fn(),
        enable: jest.fn(),
        disable: jest.fn(),
        identify: jest.fn(),
        reset: jest.fn(),
    }
}

test("stage event tracking", () => {

    const application = new Application({id: "app-321"});

    const backend = mockBackend()
    const tracker = new Tracker(
        backend,
        application,
    )

    const subject = Subject.SUBJECT_METER_READING;
    const intent = Intent.INTENT_METER_READING_SUBMIT;
    const stage = Stage.STAGE_SUBMITTED;
    const attributes = {a: "b", c: "d"};

    tracker.trackStage(subject, intent, stage, attributes);

    expect(backend.trackStage).toBeCalledWith(
        StageEvent.create({application, subject, intent, stage, attributes})
    );

    const account = new Account({number: "acc-123"});

    tracker.identify(account);

    tracker.trackStage(subject, intent, stage, attributes);

    expect(backend.trackStage).toBeCalledWith(
        StageEvent.create({application, account, subject, intent, stage, attributes})
    );

})

test("interaction event tracking", () => {

    const application = new Application({id: "app-321"});

    const backend = mockBackend()
    const tracker = new Tracker(
        backend,
        application,
    )
    const subject = Subject.SUBJECT_METER_READING;
    const intent = Intent.INTENT_METER_READING_SUBMIT;
    const interaction = Interaction.INTERACTION_CLICKED;
    const channel = InteractionChannel.INTERACTION_CHANNEL_EMAIL;
    const attributes = {a: "b", c: "d"};

    tracker.trackInteraction(subject, intent, interaction, channel, attributes);

    expect(backend.trackInteraction).toBeCalledWith(
        InteractionEvent.create({application, subject, intent, interaction, channel, attributes})
    );

    const account = new Account({number: "acc-123"});

    tracker.identify(account);

    tracker.trackInteraction(subject, intent, interaction, channel, attributes);

    expect(backend.trackInteraction).toBeCalledWith(
        InteractionEvent.create({application, account, subject, intent, interaction, channel, attributes})
    );

})

test("visit event tracking", () => {

    const application = new Application({id: "app-321"});

    const backend = mockBackend()
    const tracker = new Tracker(
        backend,
        application,
    )

    const location = "main-screen";
    const attributes = {a: "b", c: "d"};

    tracker.trackVisit(location, attributes);

    expect(backend.trackVisit).toBeCalledWith(
        VisitEvent.create({application, location, attributes})
    );

    const account = new Account({number: "acc-123"});

    tracker.identify(account);

    tracker.trackVisit(location, attributes);

    expect(backend.trackVisit).toBeCalledWith(
        VisitEvent.create({application, location, attributes})
    );

})

test("click event tracking", () => {

    const application = new Application({id: "app-321"});

    const backend = mockBackend()
    const tracker = new Tracker(
        backend,
        application,
    )

    const target = "menu-button";
    const attributes = {a: "b", c: "d"};

    tracker.trackClick(target, attributes);

    expect(backend.trackClick).toBeCalledWith(
        ClickEvent.create({application, target, attributes})
    );

    const account = new Account({number: "acc-123"});

    tracker.identify(account);

    tracker.trackClick(target, attributes);

    expect(backend.trackClick).toBeCalledWith(
        ClickEvent.create({application, target, attributes})
    );

})