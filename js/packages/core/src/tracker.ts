import {
    Journey, Actor,
    JourneyIntent, JourneySubject, JourneyStage, Channel,
    Interaction, InteractionTargetType, InteractionType
} from "@utilitywarehouse/customer-tracking-types";

export interface Application {
    id: string,
    attributes?: { [key: string]: string },
}

import {EventEmitter} from "events";
import {Backend} from "./backend";

export type EventAttributes = Promise<{[k: string]: string }> | { [k: string]: string }

const JOURNEY_STAGE_EVENT_NAME = 'journey_stage'
const JOURNEY_INTERACTION_EVENT_NAME = 'journey_interaction'
const CLICK_EVENT_NAME = 'click'
const VISIT_EVENT_NAME = 'visit'

interface JourneyStageArguments {
    journey: Journey;
    channel: Channel;
    actor: Actor,
    application: Application,
    stage: JourneyStage;
    step?: string;
    attributes?: EventAttributes;
}

interface JourneyInteractionArguments {
    journey: Journey;
    channel: Channel;
    actor: Actor,
    application: Application,
    interaction: Interaction;
    step?: string;
    attributes?: EventAttributes;
}

interface ClickArguments {
    actor: Actor,
    application: Application,
    target: string;
    channel: Channel;
    attributes?: EventAttributes;
}

interface VisitArguments {
    actor: Actor,
    channel: Channel;
    application: Application,
    location: string;
    attributes?: EventAttributes;
}

export class Tracker {
    private emitter: EventEmitter;

    constructor(private readonly backend: Backend) {
        this.emitter = new EventEmitter();
    }

    private channelValue(m: Channel): string {
        return Channel.toJSON(m)
            .toLowerCase()
            .replace(/^channel_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private stageValue(m: JourneyStage): string {
        return JourneyStage.toJSON(m)
            .toLowerCase()
            .replace(/^journey_stage_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private subjectValue(m: JourneySubject): string {
        return JourneySubject.toJSON(m)
            .toLowerCase()
            .replace(/^journey_subject_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private intentValue(m: JourneyIntent): string {
        return JourneyIntent.toJSON(m)
            .toLowerCase()
            .replace(/^journey_intent_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private interactionTypeValue(m: InteractionType): string {
        return InteractionType.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_type_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private interactionTargetTypeValue(m: InteractionTargetType): string {
        return InteractionTargetType.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_target_type_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private journeyValue(m: Journey): string {
        return `${this.intentValue(m.intent)}:${this.subjectValue(m.subject)}`
    }

    private attributes(attributes: {[k: string]: string}, prefix?: string): {[k: string]: string} {
        const mapped: EventAttributes = {};

        for (const k in attributes) {

            let key = k.toLowerCase().replace(/[^a-z]/g, "_")

            if (prefix) {
                key = prefix+key
            }

            mapped[key] = attributes[k];
        }

        return mapped;
    }

    onError(fn: (err: Error) => void): void {
        this.emitter.on("error", fn);
    }

    async trackJourneyStage(
        event: JourneyStageArguments,
    ): Promise<void> {
        try {

            const eventAttributes = event.attributes && await event.attributes || {}

            return this.backend.track(
                JOURNEY_STAGE_EVENT_NAME,
                event.actor && event.actor.id || undefined,
                {
                    journey: this.journeyValue(event.journey),
                    application: event.application && event.application.id || "",
                    channel: this.channelValue(event.channel),
                    subject: this.subjectValue(event.journey.subject),
                    intent: this.intentValue(event.journey.intent),
                    stage: this.stageValue(event.stage),
                    step: event.step || "",
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.application && event.application.attributes || {}, "application_"),
                    ...this.attributes(eventAttributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackJourneyInteraction(
        event: JourneyInteractionArguments,
    ): Promise<void> {
        try {

            const eventAttributes = event.attributes && await event.attributes || {}

            return this.backend.track(
                JOURNEY_INTERACTION_EVENT_NAME,
                event.actor && event.actor.id || undefined,
                {
                    journey: this.journeyValue(event.journey),
                    application: event.application && event.application.id || "",
                    channel: this.channelValue(event.channel),
                    subject: this.subjectValue(event.journey.subject),
                    intent: this.intentValue(event.journey.intent),
                    type: this.interactionTypeValue(event.interaction.type),
                    target_type: this.interactionTargetTypeValue(event.interaction.targetType),
                    target: event.interaction.target,
                    step: event.step || "",
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.application && event.application.attributes || {}, "application_"),
                    ...this.attributes(eventAttributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackClick(
        event: ClickArguments,
    ): Promise<void> {
        try {

            const eventAttributes = event.attributes && await event.attributes || {}

            return this.backend.track(
                CLICK_EVENT_NAME,
                event.actor && event.actor.id || undefined,
                {
                    application: event.application && event.application.id || "",
                    channel: this.channelValue(event.channel),
                    target: event.target,
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.application && event.application.attributes || {}, "application_"),
                    ...this.attributes(eventAttributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackVisit(
        event: VisitArguments,
    ): Promise<void> {
        try {

            const eventAttributes = event.attributes && await event.attributes || {}

            return this.backend.track(
                VISIT_EVENT_NAME,
                event.actor && event.actor.id || undefined,
                {
                    application: event.application && event.application.id || "",
                    channel: this.channelValue(event.channel),
                    location: event.location,
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.application && event.application.attributes || {}, "application_"),
                    ...this.attributes(eventAttributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async alias(from: string, to: string): Promise<void> {
        try {
            return this.backend.alias(
                from, to
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }
}
