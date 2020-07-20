import { EventAttributes } from "../tracker";
import { BrowserBackend } from "../browser_backend";
import { Account, Application, Intent, Stage, Subject, Interaction, InteractionChannel } from "../generated/tracking";
export declare class Tracker {
    private readonly backend;
    private readonly application;
    private account;
    private baseTracker;
    constructor(backend: BrowserBackend, application: Application);
    identify(account: Account): Promise<void>;
    reset(): Promise<void>;
    disable(): Promise<void>;
    enable(): Promise<void>;
    trackStage(subject: Subject, intent: Intent, stage: Stage, attributes?: EventAttributes): Promise<void>;
    trackInteraction(subject: Subject, intent: Intent, interaction: Interaction, channel: InteractionChannel, attributes?: EventAttributes): Promise<void>;
    trackClick(target: string, attributes?: EventAttributes): Promise<void>;
    trackVisit(location: string, attributes?: EventAttributes): Promise<void>;
}
