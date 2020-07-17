// package: 
// file: tracking.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Account extends jspb.Message { 
    getId(): string;
    setId(value: string): Account;

    getNumber(): string;
    setNumber(value: string): Account;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        id: string,
        number: string,
    }
}

export class Application extends jspb.Message { 
    getId(): string;
    setId(value: string): Application;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Application.AsObject;
    static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Application;
    static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
    export type AsObject = {
        id: string,
    }
}

export class Person extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
    }
}

export class StageEvent extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): StageEvent;


    hasApplication(): boolean;
    clearApplication(): void;
    getApplication(): Application | undefined;
    setApplication(value?: Application): StageEvent;

    getObject(): Object;
    setObject(value: Object): StageEvent;

    getIntent(): Intent;
    setIntent(value: Intent): StageEvent;

    getStage(): Stage;
    setStage(value: Stage): StageEvent;


    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StageEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StageEvent): StageEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StageEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StageEvent;
    static deserializeBinaryFromReader(message: StageEvent, reader: jspb.BinaryReader): StageEvent;
}

export namespace StageEvent {
    export type AsObject = {
        account?: Account.AsObject,
        application?: Application.AsObject,
        object: Object,
        intent: Intent,
        stage: Stage,

        attributesMap: Array<[string, string]>,
    }
}

export class InteractionEvent extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): InteractionEvent;


    hasApplication(): boolean;
    clearApplication(): void;
    getApplication(): Application | undefined;
    setApplication(value?: Application): InteractionEvent;

    getObject(): Object;
    setObject(value: Object): InteractionEvent;

    getIntent(): Intent;
    setIntent(value: Intent): InteractionEvent;

    getInteraction(): Interaction;
    setInteraction(value: Interaction): InteractionEvent;

    getChannel(): InteractionChannel;
    setChannel(value: InteractionChannel): InteractionEvent;


    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InteractionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: InteractionEvent): InteractionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InteractionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InteractionEvent;
    static deserializeBinaryFromReader(message: InteractionEvent, reader: jspb.BinaryReader): InteractionEvent;
}

export namespace InteractionEvent {
    export type AsObject = {
        account?: Account.AsObject,
        application?: Application.AsObject,
        object: Object,
        intent: Intent,
        interaction: Interaction,
        channel: InteractionChannel,

        attributesMap: Array<[string, string]>,
    }
}

export enum Object {
    OBJECT_NONE = 0,
    OBJECT_METER_READING = 1,
}

export enum Intent {
    INTENT_NONE = 0,
    INTENT_METER_READING_SUBMIT = 1,
}

export enum Stage {
    STAGE_NONE = 0,
    STAGE_SUBMITTED = 1,
    STAGE_RECEIVED_REQUEST_FOR_AMEND = 2,
    STAGE_COMPLETED = 3,
    STAGE_REJECTED = 4,
    STAGE_ENTERED = 5,
    STAGE_STARTED = 6,
    STAGE_FAILED = 7,
}

export enum Interaction {
    INTERACTION_NONE = 0,
    INTERACTION_CLICKED = 1,
    INTERACTION_VIEWED = 2,
}

export enum InteractionChannel {
    INTERACTION_CHANNEL_NONE = 0,
    INTERACTION_CHANNEL_EMAIL = 1,
    INTERACTION_CHANNEL_WILLIAM = 2,
}
