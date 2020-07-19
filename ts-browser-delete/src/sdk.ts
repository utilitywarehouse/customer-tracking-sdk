import {Backend} from "./backend";
import {MixpanelBackend, MixpanelConfig} from "./backends/mixpanel.backend";
import {
    IAccount,
    IApplication,
    Application,
    Intent,
    Interaction,
    InteractionChannel,
    Subject,
    Stage,
    StageEvent, InteractionEvent, VisitEvent, ClickEvent
} from "../generated/tracking";

export class Tracker {
    private account: IAccount;
    constructor(private readonly backend: Backend, private readonly application: IApplication) {
    }
    async identify(account: IAccount): Promise<void> {
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
        attributes?: ({ [k: string]: string }|null),
    ): Promise<void> {
        return this.backend.trackStage(
            new StageEvent({
                account: this.account,
                application: this.application,
                subject,
                intent,
                stage,
                attributes,
            })
        )
    }
    async trackInteraction(
        subject: Subject,
        intent: Intent,
        interaction: Interaction,
        channel: InteractionChannel,
        attributes?: ({ [k: string]: string }|null),
    ): Promise<void> {
        return this.backend.trackInteraction(
            new InteractionEvent({
                account: this.account,
                application: this.application,
                subject,
                intent,
                interaction,
                channel,
                attributes,
            })
        )
    }
    async trackVisit(
        location: string,
        attributes?: ({ [k: string]: string }|null),
    ): Promise<void> {
        return this.backend.trackVisit(
            new VisitEvent({
                account: this.account,
                application: this.application,
                location,
                attributes,
            })
        )
    }
    async trackClick(
        target: string,
        attributes?: ({ [k: string]: string }|null),
    ): Promise<void> {
        return this.backend.trackClick(
            new ClickEvent({
                account: this.account,
                application: this.application,
                target,
                attributes,
            })
        )
    }
}

export {
    MixpanelBackend,
    Stage,
    Intent,
    Interaction,
    InteractionChannel,
    Subject,
    MixpanelConfig,
    Application,
}