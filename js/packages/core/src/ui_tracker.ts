import {Application, EventAttributes, Tracker as BaseTracker} from "./tracker";
import {UIBackend} from "./ui_backend";
import {
    Journey, Channel, Actor, JourneyStage, Interaction
} from "@utilitywarehouse/customer-tracking-types";

interface JourneyStageArguments {
    journey: Journey;
    channel: Channel;
    stage: JourneyStage;
    step?: string;
    attributes?: EventAttributes;
}

interface JourneyInteractionArguments {
    journey: Journey;
    channel: Channel;
    interaction: Interaction;
    step?: string;
    attributes?: EventAttributes;
}

interface ClickArguments {
    target: string;
    channel: Channel;
    attributes?: EventAttributes;
}

interface VisitArguments {
    channel: Channel;
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

    async trackJourneyStage(event: JourneyStageArguments): Promise<void> {
        return this.baseTracker.trackJourneyStage({
            actor: this.actor,
            application: this.application,
            ...event
        })
    }

    async trackJourneyInteraction(event: JourneyInteractionArguments): Promise<void> {
        return this.baseTracker.trackJourneyInteraction({
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