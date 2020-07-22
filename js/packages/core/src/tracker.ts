import {
    Account,
    Application, ClickEvent,
    Intent,
    Interaction, InteractionChannel,
    InteractionEvent,
    Stage,
    StageEvent,
    Subject, VisitEvent
} from "./generated/tracking";
import {EventEmitter} from "events";
import {Backend} from "./backend";

export type EventAttributes = Promise<{[k: string]: string }> | { [k: string]: string }

interface StageArguments {
    account: Account;
    application: Application;
    subject: Subject;
    intent: Intent;
    stage: Stage;
    attributes: EventAttributes;
}

interface InteractionArguments {
    account: Account;
    application: Application;
    subject: Subject;
    intent: Intent;
    interaction: Interaction;
    channel: InteractionChannel;
    attributes: EventAttributes;
}

interface ClickArguments {
    account: Account;
    application: Application;
    target: string;
    attributes: EventAttributes;
}

interface VisitArguments {
    account: Account;
    application: Application;
    location: string;
    attributes: EventAttributes;
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
                account: inEvent.account,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                stage: inEvent.stage,
                attributes: await inEvent.attributes,
            }

            return this.backend.track(
                this.stageEventName(event),
                {
                    account_number: event.account && event.account.number || "",
                    client_id: event.application && event.application.id || "",
                    subject: this.subjectValue(event.subject),
                    intent: this.intentValue(event.intent),
                    stage: this.stageValue(event.stage),
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
                account: inEvent.account,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                interaction: inEvent.interaction,
                channel: inEvent.channel,
                attributes: await inEvent.attributes,
            }

            return this.backend.track(
                this.interactionEventName(event),
                {
                    account_number: event.account && event.account.number || "",
                    client_id: event.application && event.application.id || "",
                    subject: this.subjectValue(event.subject),
                    intent: this.intentValue(event.intent),
                    interaction: this.interactionValue(event.interaction),
                    interaction_channel: this.interactionChannelValue(event.channel),
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
                account: inEvent.account,
                application: inEvent.application,
                target: inEvent.target,
                attributes: await inEvent.attributes,
            }

            return this.backend.track(
                "click",
                {
                    account_number: event.account && event.account.number || "",
                    client_id: event.application && event.application.id || "",
                    target: event.target,
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
                account: inEvent.account,
                application: inEvent.application,
                location: inEvent.location,
                attributes: await inEvent.attributes,
            }

            return this.backend.track(
                "visit",
                {
                    account_number: event.account && event.account.number || "",
                    client_id: event.application && event.application.id || "",
                    location: event.location,
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }
}