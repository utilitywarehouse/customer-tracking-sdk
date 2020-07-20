import {EventAttributes, Tracker as BaseTracker} from "../tracker";
import {BrowserBackend} from "../browser_backend";
import {Account, Application, Intent, Stage, Subject, Interaction, InteractionChannel} from "../generated/tracking";

export class Tracker {
    private account!: Account;
    private baseTracker: BaseTracker;
    constructor(private readonly backend: BrowserBackend, private readonly application: Application) {
        this.baseTracker = new BaseTracker(backend);
    }

    async identify(account: Account): Promise<void> {
        this.account = account;
        return this.backend.identify(account);
    }
    async reset(): Promise<void> {
        return this.backend.reset()
    }
    async disable(): Promise<void> {
        return this.backend.disable()
    }
    async enable(): Promise<void> {
        return this.backend.enable()
    }

    async trackStage(
        subject: Subject,
        intent: Intent,
        stage: Stage,
        attributes: EventAttributes = {},
    ): Promise<void> {
        return this.baseTracker.trackStage(this.account, this.application, subject, intent, stage, attributes)
    }

    async trackInteraction(
        subject: Subject,
        intent: Intent,
        interaction: Interaction,
        channel: InteractionChannel,
        attributes: EventAttributes = {},
    ): Promise<void> {
        return this.baseTracker.trackInteraction(this.account, this.application, subject, intent, interaction, channel, attributes)
    }

    async trackClick(
        target: string,
        attributes: EventAttributes = {},
    ): Promise<void> {
        return this.baseTracker.trackClick(this.account, this.application, target, attributes)
    }

    async trackVisit(
        location: string,
        attributes: EventAttributes = {},
    ): Promise<void> {
        return this.baseTracker.trackVisit(this.account, this.application, location, attributes)
    }
}