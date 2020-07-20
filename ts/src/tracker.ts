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
import {Backend} from "./backend";
import {EventEmitter} from "events";

export type EventAttributes = Promise<{[k: string]: string }> | { [k: string]: string }

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
        account: Account,
        application: Application,
        subject: Subject,
        intent: Intent,
        stage: Stage,
        attributes: EventAttributes = {},
    ): Promise<void> {

        try {

            const event: StageEvent = {
                account,
                application,
                subject,
                intent,
                stage,
                attributes: await attributes,
            }

            return this.backend.track(
                this.stageEventName(event),
                {
                    account_number: account.number,
                    client_id: application.id,
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
        account: Account,
        application: Application,
        subject: Subject,
        intent: Intent,
        interaction: Interaction,
        channel: InteractionChannel,
        attributes: EventAttributes = {},
    ): Promise<void> {
        try {
            const event: InteractionEvent = {
                account,
                application,
                subject,
                intent,
                interaction,
                channel,
                attributes: await attributes,
            }

            return this.backend.track(
                this.interactionEventName(event),
                {
                    account_number: account.number,
                    client_id: application.id,
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
        account: Account,
        application: Application,
        target: string,
        attributes: EventAttributes = {},
    ): Promise<void> {
        try {
            const event: ClickEvent = {
                account,
                application,
                target,
                attributes: await attributes,
            }

            return this.backend.track(
                "click",
                {
                    account_number: account.number,
                    client_id: application.id,
                    target,
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }

    async trackVisit(
        account: Account,
        application: Application,
        location: string,
        attributes: EventAttributes = {},
    ): Promise<void> {
        try {
            const event: VisitEvent = {
                account,
                application,
                location,
                attributes: await attributes,
            }

            return this.backend.track(
                "visit",
                {
                    account_number: account.number,
                    client_id: application.id,
                    location,
                    ...this.attributes(event.attributes),
                },
            )
        } catch (e) {
            this.emitter.emit("error", e);
        }
    }
}