import { Account, Application, Intent, Interaction, InteractionChannel, Stage, Subject } from "./generated/tracking";
import { Backend } from "./backend";
export declare type EventAttributes = Promise<{
    [k: string]: string;
}> | {
    [k: string]: string;
};
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
    trackStage(account: Account, application: Application, subject: Subject, intent: Intent, stage: Stage, attributes?: EventAttributes): Promise<void>;
    trackInteraction(account: Account, application: Application, subject: Subject, intent: Intent, interaction: Interaction, channel: InteractionChannel, attributes?: EventAttributes): Promise<void>;
    trackClick(account: Account, application: Application, target: string, attributes?: EventAttributes): Promise<void>;
    trackVisit(account: Account, application: Application, location: string, attributes?: EventAttributes): Promise<void>;
}
