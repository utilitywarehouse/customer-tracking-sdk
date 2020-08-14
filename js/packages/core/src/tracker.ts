import {
    Actor,
    Application,
    ClickEvent,
    Intent,
    Interaction,
    InteractionChannel,
    InteractionEvent,
    Stage,
    StageEvent,
    Subject, VisitEvent,
} from "@utilitywarehouse/customer-tracking-types";

import {EventEmitter} from "events";
import {Backend} from "./backend";

export type EventAttributes = Promise<{[k: string]: string }> | { [k: string]: string }

interface StageArguments {
    actor: Actor;
    application: Application;
    subject: Subject;
    intent: Intent;
    stage: Stage;
    attributes?: EventAttributes;
}

interface InteractionArguments {
    actor: Actor;
    application: Application;
    subject: Subject;
    intent: Intent;
    interaction: Interaction;
    channel: InteractionChannel;
    attributes?: EventAttributes;
}

interface ClickArguments {
    actor: Actor;
    application: Application;
    target: string;
    attributes?: EventAttributes;
}

interface VisitArguments {
    actor: Actor;
    application: Application;
    location: string;
    attributes?: EventAttributes;
}

export class Tracker {
    private emitter: EventEmitter;

    constructor(private readonly backend: Backend) {
        this.emitter = new EventEmitter();
    }

    private stageValue(m: Stage): string {
        return Stage.toJSON(m)
            .toLowerCase()
            .replace(/^stage_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private subjectValue(m: Subject): string {
        return Subject.toJSON(m)
            .toLowerCase()
            .replace(/^subject_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private intentValue(m: Intent): string {
        return Intent.toJSON(m)
            .toLowerCase()
            .replace(/^intent_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private interactionValue(m: Interaction): string {
        return Interaction.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private interactionChannelValue(m: InteractionChannel): string {
        return InteractionChannel.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_channel_/, "")
            .replace(/[^a-z]/g, "-")
    }

    private stageEventName(event: StageEvent): string {
        return this.stageValue(event.stage) + "." + this.intentValue(event.intent)
    }

    private interactionEventName(event: InteractionEvent): string {
        return this.interactionChannelValue(event.channel) + "." + this.interactionValue(event.interaction)
    }

    private attributes(attributes: {[k: string]: string}): {[k: string]: string} {
        const mapped: EventAttributes = {};

        for (const k in attributes) {
            mapped[k.toLowerCase().replace(/[^a-z]/g, "_")] = attributes[k];
        }

        return mapped;
    }

    onError(fn: (err: Error) => void): void {
        this.emitter.on("error", fn);
    }

    async trackStage(
        inEvent: StageArguments,
    ): Promise<void> {

        try {

            const event: StageEvent = {
                actor: inEvent.actor,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                stage: inEvent.stage,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            }

            return this.backend.track(
                this.stageEventName(event),
                event.actor && event.actor.id || undefined,
                {
                    client_id: event.application && event.application.id || "",
                    subject: this.subjectValue(event.subject),
                    intent: this.intentValue(event.intent),
                    stage: this.stageValue(event.stage),
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackInteraction(
        inEvent: InteractionArguments,
    ): Promise<void> {
        try {
            const event: InteractionEvent = {
                actor: inEvent.actor,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                interaction: inEvent.interaction,
                channel: inEvent.channel,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            }

            return this.backend.track(
                this.interactionEventName(event),
                event.actor && event.actor.id || undefined,
                {
                    client_id: event.application && event.application.id || "",
                    subject: this.subjectValue(event.subject),
                    intent: this.intentValue(event.intent),
                    interaction: this.interactionValue(event.interaction),
                    interaction_channel: this.interactionChannelValue(event.channel),
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackClick(
        inEvent: ClickArguments,
    ): Promise<void> {
        try {
            const event: ClickEvent = {
                actor: inEvent.actor,
                application: inEvent.application,
                target: inEvent.target,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            }

            return this.backend.track(
                "click",
                event.actor && event.actor.id || undefined,
                {
                    client_id: event.application && event.application.id || "",
                    target: event.target,
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackVisit(
        inEvent: VisitArguments,
    ): Promise<void> {
        try {
            const event: VisitEvent = {
                actor: inEvent.actor,
                application: inEvent.application,
                location: inEvent.location,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            }

            return this.backend.track(
                "visit",
                event.actor && event.actor.id || undefined,
                {
                    client_id: event.application && event.application.id || "",
                    location: event.location,
                    ...this.attributes(event.actor && event.actor.attributes || {}),
                    ...this.attributes(event.attributes),
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