export interface Account {
    id: string;
    number: string;
}
export interface Application {
    id: string;
}
export interface Person {
}
export interface StageEvent {
    account?: Account;
    application?: Application;
    subject: Subject;
    intent: Intent;
    stage: Stage;
    attributes: {
        [key: string]: string;
    };
}
export interface StageEvent_AttributesEntry {
    key: string;
    value: string;
}
export interface InteractionEvent {
    account?: Account;
    application?: Application;
    subject: Subject;
    intent: Intent;
    interaction: Interaction;
    channel: InteractionChannel;
    attributes: {
        [key: string]: string;
    };
}
export interface InteractionEvent_AttributesEntry {
    key: string;
    value: string;
}
export interface VisitEvent {
    account?: Account;
    application?: Application;
    location: string;
    attributes: {
        [key: string]: string;
    };
}
export interface VisitEvent_AttributesEntry {
    key: string;
    value: string;
}
export interface ClickEvent {
    account?: Account;
    application?: Application;
    target: string;
    attributes: {
        [key: string]: string;
    };
}
export interface ClickEvent_AttributesEntry {
    key: string;
    value: string;
}
export declare const Subject: {
    SUBJECT_NONE: 0;
    SUBJECT_METER_READING: 1;
    UNRECOGNIZED: -1;
    fromJSON(object: any): Subject;
    toJSON(object: Subject): string;
};
export declare type Subject = 0 | 1 | -1;
export declare const Intent: {
    INTENT_NONE: 0;
    INTENT_METER_READING_SUBMIT: 1;
    UNRECOGNIZED: -1;
    fromJSON(object: any): Intent;
    toJSON(object: Intent): string;
};
export declare type Intent = 0 | 1 | -1;
export declare const Stage: {
    STAGE_NONE: 0;
    STAGE_SUBMITTED: 1;
    STAGE_RECEIVED_REQUEST_FOR_AMEND: 2;
    STAGE_COMPLETED: 3;
    STAGE_REJECTED: 4;
    STAGE_ENTERED: 5;
    STAGE_STARTED: 6;
    STAGE_FAILED: 7;
    UNRECOGNIZED: -1;
    fromJSON(object: any): Stage;
    toJSON(object: Stage): string;
};
export declare type Stage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;
export declare const Interaction: {
    INTERACTION_NONE: 0;
    INTERACTION_CLICKED: 1;
    INTERACTION_VIEWED: 2;
    UNRECOGNIZED: -1;
    fromJSON(object: any): Interaction;
    toJSON(object: Interaction): string;
};
export declare type Interaction = 0 | 1 | 2 | -1;
export declare const InteractionChannel: {
    INTERACTION_CHANNEL_NONE: 0;
    INTERACTION_CHANNEL_EMAIL: 1;
    INTERACTION_CHANNEL_WILLIAM: 2;
    UNRECOGNIZED: -1;
    fromJSON(object: any): InteractionChannel;
    toJSON(object: InteractionChannel): string;
};
export declare type InteractionChannel = 0 | 1 | 2 | -1;
export declare const Account: {
    fromJSON(object: any): Account;
    fromPartial(object: DeepPartial<Account>): Account;
    toJSON(message: Account): unknown;
};
export declare const Application: {
    fromJSON(object: any): Application;
    fromPartial(object: DeepPartial<Application>): Application;
    toJSON(message: Application): unknown;
};
export declare const Person: {
    fromJSON(_: any): Person;
    fromPartial(_: DeepPartial<Person>): Person;
    toJSON(_: Person): unknown;
};
export declare const StageEvent: {
    fromJSON(object: any): StageEvent;
    fromPartial(object: DeepPartial<StageEvent>): StageEvent;
    toJSON(message: StageEvent): unknown;
};
export declare const StageEvent_AttributesEntry: {
    fromJSON(object: any): StageEvent_AttributesEntry;
    fromPartial(object: DeepPartial<StageEvent_AttributesEntry>): StageEvent_AttributesEntry;
    toJSON(message: StageEvent_AttributesEntry): unknown;
};
export declare const InteractionEvent: {
    fromJSON(object: any): InteractionEvent;
    fromPartial(object: DeepPartial<InteractionEvent>): InteractionEvent;
    toJSON(message: InteractionEvent): unknown;
};
export declare const InteractionEvent_AttributesEntry: {
    fromJSON(object: any): InteractionEvent_AttributesEntry;
    fromPartial(object: DeepPartial<InteractionEvent_AttributesEntry>): InteractionEvent_AttributesEntry;
    toJSON(message: InteractionEvent_AttributesEntry): unknown;
};
export declare const VisitEvent: {
    fromJSON(object: any): VisitEvent;
    fromPartial(object: DeepPartial<VisitEvent>): VisitEvent;
    toJSON(message: VisitEvent): unknown;
};
export declare const VisitEvent_AttributesEntry: {
    fromJSON(object: any): VisitEvent_AttributesEntry;
    fromPartial(object: DeepPartial<VisitEvent_AttributesEntry>): VisitEvent_AttributesEntry;
    toJSON(message: VisitEvent_AttributesEntry): unknown;
};
export declare const ClickEvent: {
    fromJSON(object: any): ClickEvent;
    fromPartial(object: DeepPartial<ClickEvent>): ClickEvent;
    toJSON(message: ClickEvent): unknown;
};
export declare const ClickEvent_AttributesEntry: {
    fromJSON(object: any): ClickEvent_AttributesEntry;
    fromPartial(object: DeepPartial<ClickEvent_AttributesEntry>): ClickEvent_AttributesEntry;
    toJSON(message: ClickEvent_AttributesEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
