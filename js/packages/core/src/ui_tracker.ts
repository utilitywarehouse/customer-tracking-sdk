import {EventAttributes, Tracker as BaseTracker} from "./tracker";
import {UIBackend} from "./ui_backend";
import {
    Actor, Application, Intent, Stage, Subject, Interaction, InteractionChannel,
} from "@utilitywarehouse/customer-tracking-types";

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
    private actor!: Actor;
    private baseTracker: BaseTracker;
    constructor(private readonly backend: UIBackend, private readonly application: Application) {
        this.baseTracker = new BaseTracker(backend);
    }

    onError(fn: (err: Error) => void): void {
        this.baseTracker.onError(fn);
    }

    async identify(actor: Actor): Promise<void> {
        this.actor = actor;
        return this.backend.identify(actor);
    }
    async reset(): Promise<void> {
        this.actor = {id: "", attributes: {}};
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
            actor: this.actor,
            application: this.application,
            ...event
        })
    }

    async trackInteraction(event: InteractionArguments): Promise<void> {
        return this.baseTracker.trackInteraction({
            actor: this.actor,
            application: this.application,
            ...event
        })
    }

    async trackClick(event: ClickArguments): Promise<void> {
        return this.baseTracker.trackClick({
            actor: this.actor,
            application: this.application,
            ...event
        })
    }

    async trackVisit(event: VisitArguments): Promise<void> {
        return this.baseTracker.trackVisit({
            actor: this.actor,
            application: this.application,
            ...event
        })
    }

    async alias(from: string, to: string): Promise<void> {
        return this.baseTracker.alias(from, to)
    }
}