import {EventAttributes, Tracker as BaseTracker} from "./tracker";
import {UIBackend} from "./ui_backend";
import {Account, Application, Intent, Stage, Subject, Interaction, InteractionChannel} from "./generated/tracking";

interface StageArguments {
    subject: Subject;
    intent: Intent;
    stage: Stage;
    attributes?: EventAttributes;
}

interface InteractionArguments {
    subject: Subject;
    intent: Intent;
    interaction: Interaction;
    channel: InteractionChannel;
    attributes?: EventAttributes;
}

interface ClickArguments {
    target: string;
    attributes?: EventAttributes;
}

interface VisitArguments {
    location: string;
    attributes?: EventAttributes;
}

export class UITracker {
    private account!: Account;
    private baseTracker: BaseTracker;
    constructor(private readonly backend: UIBackend, private readonly application: Application) {
        this.baseTracker = new BaseTracker(backend);
    }

    onError(fn: (err: Error) => void): void {
        this.baseTracker.onError(fn);
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

    async trackStage(event: StageArguments): Promise<void> {
        return this.baseTracker.trackStage({
            account: this.account,
            application: this.application,
            ...event
        })
    }

    async trackInteraction(event: InteractionArguments): Promise<void> {
        return this.baseTracker.trackInteraction({
            account: this.account,
            application: this.application,
            ...event
        })
    }

    async trackClick(event: ClickArguments): Promise<void> {
        return this.baseTracker.trackClick({
            account: this.account,
            application: this.application,
            ...event
        })
    }

    async trackVisit(event: VisitArguments): Promise<void> {
        return this.baseTracker.trackVisit({
            account: this.account,
            application: this.application,
            ...event
        })
    }
}