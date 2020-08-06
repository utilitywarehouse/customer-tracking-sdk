import { EventAttributes } from "./tracker";
import { UIBackend } from "./ui_backend";
import { Account, Application, Intent, Stage, Subject, Interaction, InteractionChannel } from "@utilitywarehouse/customer-tracking-types";
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
export declare class UITracker {
    private readonly backend;
    private readonly application;
    private account;
    private baseTracker;
    constructor(backend: UIBackend, application: Application);
    onError(fn: (err: Error) => void): void;
    identify(account: Account): Promise<void>;
    reset(): Promise<void>;
    disable(): Promise<void>;
    enable(): Promise<void>;
    trackStage(event: StageArguments): Promise<void>;
    trackInteraction(event: InteractionArguments): Promise<void>;
    trackClick(event: ClickArguments): Promise<void>;
    trackVisit(event: VisitArguments): Promise<void>;
}
export {};
