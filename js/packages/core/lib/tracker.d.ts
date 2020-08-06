import { Account, Application, Intent, Interaction, InteractionChannel, Stage, Subject } from "@utilitywarehouse/customer-tracking-types";
import { Backend } from "./backend";
export declare type EventAttributes = Promise<{
    [k: string]: string;
}> | {
    [k: string]: string;
};
interface StageArguments {
    account: Account;
    application: Application;
    subject: Subject;
    intent: Intent;
    stage: Stage;
    attributes?: EventAttributes;
}
interface InteractionArguments {
    account: Account;
    application: Application;
    subject: Subject;
    intent: Intent;
    interaction: Interaction;
    channel: InteractionChannel;
    attributes?: EventAttributes;
}
interface ClickArguments {
    account: Account;
    application: Application;
    target: string;
    attributes?: EventAttributes;
}
interface VisitArguments {
    account: Account;
    application: Application;
    location: string;
    attributes?: EventAttributes;
}
export declare class Tracker {
    private readonly backend;
    private emitter;
    constructor(backend: Backend);
    private stageValue;
    private subjectValue;
    private intentValue;
    private interactionValue;
    private interactionChannelValue;
    private stageEventName;
    private interactionEventName;
    private attributes;
    onError(fn: (err: Error) => void): void;
    trackStage(inEvent: StageArguments): Promise<void>;
    trackInteraction(inEvent: InteractionArguments): Promise<void>;
    trackClick(inEvent: ClickArguments): Promise<void>;
    trackVisit(inEvent: VisitArguments): Promise<void>;
}
export {};
