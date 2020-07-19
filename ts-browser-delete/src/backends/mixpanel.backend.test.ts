import {MixpanelBackend} from "./mixpanel.backend";
import {
    ClickEvent,
    Intent,
    Interaction,
    InteractionChannel,
    InteractionEvent,
    Stage,
    StageEvent,
    Subject, VisitEvent
} from "../../generated/tracking";
import * as mixpanel from "mixpanel-browser";
import {Mixpanel} from "mixpanel-browser";

jest.mock("mixpanel-browser", () => {
    const t = {} as any;
    t.track = jest.fn();
    t.init = jest.fn().mockImplementation(() => t);

    return t;
});

test("stage event payload", () => {
    const backend = new MixpanelBackend("abc");

    backend.trackStage(
        new StageEvent({
            stage: Stage.STAGE_SUBMITTED,
            subject: Subject.SUBJECT_METER_READING,
            intent: Intent.INTENT_METER_READING_SUBMIT,
            application: {id: "app-321"},
            account: {number: "acc-123"},
            attributes: {
                a: "b",
                c: "d",
            }
        }),
    );

    expect(mixpanel.track).toBeCalledWith(
        "submitted.meter-reading-submit",
        {
            "account_number": "acc-123",
            "client_id": "app-321",
            "intent": "meter_reading_submit",
            "stage": "submitted",
            "subject": "meter_reading",
            "a": "b",
            "c": "d",
        },
    );
});

test("interaction event payload", () => {
    const backend = new MixpanelBackend("abc");

    backend.trackInteraction(
        new InteractionEvent({
            interaction: Interaction.INTERACTION_CLICKED,
            channel: InteractionChannel.INTERACTION_CHANNEL_EMAIL,
            subject: Subject.SUBJECT_METER_READING,
            intent: Intent.INTENT_METER_READING_SUBMIT,
            application: {id: "app-321"},
            account: {number: "acc-123"},
            attributes: {
                a: "b",
                c: "d",
            }
        }),
    );

    expect(mixpanel.track).toBeCalledWith(
        "email.clicked",
        {
            "account_number": "acc-123",
            "client_id": "app-321",
            "intent": "meter_reading_submit",
            "interaction": "clicked",
            "interaction_channel": "email",
            "subject": "meter_reading",
            "a": "b",
            "c": "d",
        },
    );
});

test("visit event payload", () => {
    const backend = new MixpanelBackend("abc");

    backend.trackVisit(
        new VisitEvent({
            location: "screen-energy-main",
            application: {id: "app-321"},
            account: {number: "acc-123"},
            attributes: {
                a: "b",
                c: "d",
            }
        }),
    );

    expect(mixpanel.track).toBeCalledWith(
        "visit",
        {
            "account_number": "acc-123",
            "client_id": "app-321",
            "location": "screen-energy-main",
            "a": "b",
            "c": "d",
        },
    );
});

test("click event payload", () => {
    const backend = new MixpanelBackend("abc");

    backend.trackClick(
        new ClickEvent({
            target: "menu-bottom-energy",
            application: {id: "app-321"},
            account: {number: "acc-123"},
            attributes: {
                a: "b",
                c: "d",
            }
        }),
    );

    expect(mixpanel.track).toBeCalledWith(
        "click",
        {
            "account_number": "acc-123",
            "client_id": "app-321",
            "target": "menu-bottom-energy",
            "a": "b",
            "c": "d",
        },
    );
});