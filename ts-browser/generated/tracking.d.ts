import * as $protobuf from "protobufjs";
/** Properties of an Account. */
export interface IAccount {

    /** Account id */
    id?: (string|null);

    /** Account number */
    number?: (string|null);
}

/** Represents an Account. */
export class Account implements IAccount {

    /**
     * Constructs a new Account.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccount);

    /** Account id. */
    public id: string;

    /** Account number. */
    public number: string;

    /**
     * Creates a new Account instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Account instance
     */
    public static create(properties?: IAccount): Account;

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @param message Account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @param message Account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Account;

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Account;

    /**
     * Verifies an Account message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Account
     */
    public static fromObject(object: { [k: string]: any }): Account;

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @param message Account
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Account to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Application. */
export interface IApplication {

    /** Application id */
    id?: (string|null);
}

/** Represents an Application. */
export class Application implements IApplication {

    /**
     * Constructs a new Application.
     * @param [properties] Properties to set
     */
    constructor(properties?: IApplication);

    /** Application id. */
    public id: string;

    /**
     * Creates a new Application instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Application instance
     */
    public static create(properties?: IApplication): Application;

    /**
     * Encodes the specified Application message. Does not implicitly {@link Application.verify|verify} messages.
     * @param message Application message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Application message, length delimited. Does not implicitly {@link Application.verify|verify} messages.
     * @param message Application message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Application message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Application
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Application;

    /**
     * Decodes an Application message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Application
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Application;

    /**
     * Verifies an Application message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Application message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Application
     */
    public static fromObject(object: { [k: string]: any }): Application;

    /**
     * Creates a plain object from an Application message. Also converts values to other types if specified.
     * @param message Application
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Application, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Application to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Person. */
export interface IPerson {
}

/** Represents a Person. */
export class Person implements IPerson {

    /**
     * Constructs a new Person.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPerson);

    /**
     * Creates a new Person instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Person instance
     */
    public static create(properties?: IPerson): Person;

    /**
     * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
     * @param message Person message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Person message, length delimited. Does not implicitly {@link Person.verify|verify} messages.
     * @param message Person message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Person message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Person;

    /**
     * Decodes a Person message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Person;

    /**
     * Verifies a Person message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Person message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Person
     */
    public static fromObject(object: { [k: string]: any }): Person;

    /**
     * Creates a plain object from a Person message. Also converts values to other types if specified.
     * @param message Person
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Person to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StageEvent. */
export interface IStageEvent {

    /** StageEvent account */
    account?: (IAccount|null);

    /** StageEvent application */
    application?: (IApplication|null);

    /** StageEvent subject */
    subject?: (Subject|null);

    /** StageEvent intent */
    intent?: (Intent|null);

    /** StageEvent stage */
    stage?: (Stage|null);

    /** StageEvent attributes */
    attributes?: ({ [k: string]: string }|null);
}

/** Represents a StageEvent. */
export class StageEvent implements IStageEvent {

    /**
     * Constructs a new StageEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStageEvent);

    /** StageEvent account. */
    public account?: (IAccount|null);

    /** StageEvent application. */
    public application?: (IApplication|null);

    /** StageEvent subject. */
    public subject: Subject;

    /** StageEvent intent. */
    public intent: Intent;

    /** StageEvent stage. */
    public stage: Stage;

    /** StageEvent attributes. */
    public attributes: { [k: string]: string };

    /**
     * Creates a new StageEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StageEvent instance
     */
    public static create(properties?: IStageEvent): StageEvent;

    /**
     * Encodes the specified StageEvent message. Does not implicitly {@link StageEvent.verify|verify} messages.
     * @param message StageEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StageEvent message, length delimited. Does not implicitly {@link StageEvent.verify|verify} messages.
     * @param message StageEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StageEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StageEvent;

    /**
     * Decodes a StageEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StageEvent;

    /**
     * Verifies a StageEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StageEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StageEvent
     */
    public static fromObject(object: { [k: string]: any }): StageEvent;

    /**
     * Creates a plain object from a StageEvent message. Also converts values to other types if specified.
     * @param message StageEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StageEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InteractionEvent. */
export interface IInteractionEvent {

    /** InteractionEvent account */
    account?: (IAccount|null);

    /** InteractionEvent application */
    application?: (IApplication|null);

    /** InteractionEvent subject */
    subject?: (Subject|null);

    /** InteractionEvent intent */
    intent?: (Intent|null);

    /** InteractionEvent interaction */
    interaction?: (Interaction|null);

    /** InteractionEvent channel */
    channel?: (InteractionChannel|null);

    /** InteractionEvent attributes */
    attributes?: ({ [k: string]: string }|null);
}

/** Represents an InteractionEvent. */
export class InteractionEvent implements IInteractionEvent {

    /**
     * Constructs a new InteractionEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInteractionEvent);

    /** InteractionEvent account. */
    public account?: (IAccount|null);

    /** InteractionEvent application. */
    public application?: (IApplication|null);

    /** InteractionEvent subject. */
    public subject: Subject;

    /** InteractionEvent intent. */
    public intent: Intent;

    /** InteractionEvent interaction. */
    public interaction: Interaction;

    /** InteractionEvent channel. */
    public channel: InteractionChannel;

    /** InteractionEvent attributes. */
    public attributes: { [k: string]: string };

    /**
     * Creates a new InteractionEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InteractionEvent instance
     */
    public static create(properties?: IInteractionEvent): InteractionEvent;

    /**
     * Encodes the specified InteractionEvent message. Does not implicitly {@link InteractionEvent.verify|verify} messages.
     * @param message InteractionEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInteractionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InteractionEvent message, length delimited. Does not implicitly {@link InteractionEvent.verify|verify} messages.
     * @param message InteractionEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInteractionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InteractionEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InteractionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InteractionEvent;

    /**
     * Decodes an InteractionEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InteractionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InteractionEvent;

    /**
     * Verifies an InteractionEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InteractionEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InteractionEvent
     */
    public static fromObject(object: { [k: string]: any }): InteractionEvent;

    /**
     * Creates a plain object from an InteractionEvent message. Also converts values to other types if specified.
     * @param message InteractionEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InteractionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InteractionEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VisitEvent. */
export interface IVisitEvent {

    /** VisitEvent account */
    account?: (IAccount|null);

    /** VisitEvent application */
    application?: (IApplication|null);

    /** VisitEvent location */
    location?: (string|null);

    /** VisitEvent attributes */
    attributes?: ({ [k: string]: string }|null);
}

/** Represents a VisitEvent. */
export class VisitEvent implements IVisitEvent {

    /**
     * Constructs a new VisitEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVisitEvent);

    /** VisitEvent account. */
    public account?: (IAccount|null);

    /** VisitEvent application. */
    public application?: (IApplication|null);

    /** VisitEvent location. */
    public location: string;

    /** VisitEvent attributes. */
    public attributes: { [k: string]: string };

    /**
     * Creates a new VisitEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VisitEvent instance
     */
    public static create(properties?: IVisitEvent): VisitEvent;

    /**
     * Encodes the specified VisitEvent message. Does not implicitly {@link VisitEvent.verify|verify} messages.
     * @param message VisitEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVisitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VisitEvent message, length delimited. Does not implicitly {@link VisitEvent.verify|verify} messages.
     * @param message VisitEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVisitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VisitEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VisitEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VisitEvent;

    /**
     * Decodes a VisitEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VisitEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VisitEvent;

    /**
     * Verifies a VisitEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VisitEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VisitEvent
     */
    public static fromObject(object: { [k: string]: any }): VisitEvent;

    /**
     * Creates a plain object from a VisitEvent message. Also converts values to other types if specified.
     * @param message VisitEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VisitEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VisitEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClickEvent. */
export interface IClickEvent {

    /** ClickEvent account */
    account?: (IAccount|null);

    /** ClickEvent application */
    application?: (IApplication|null);

    /** ClickEvent target */
    target?: (string|null);

    /** ClickEvent attributes */
    attributes?: ({ [k: string]: string }|null);
}

/** Represents a ClickEvent. */
export class ClickEvent implements IClickEvent {

    /**
     * Constructs a new ClickEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClickEvent);

    /** ClickEvent account. */
    public account?: (IAccount|null);

    /** ClickEvent application. */
    public application?: (IApplication|null);

    /** ClickEvent target. */
    public target: string;

    /** ClickEvent attributes. */
    public attributes: { [k: string]: string };

    /**
     * Creates a new ClickEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClickEvent instance
     */
    public static create(properties?: IClickEvent): ClickEvent;

    /**
     * Encodes the specified ClickEvent message. Does not implicitly {@link ClickEvent.verify|verify} messages.
     * @param message ClickEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClickEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClickEvent message, length delimited. Does not implicitly {@link ClickEvent.verify|verify} messages.
     * @param message ClickEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClickEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClickEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClickEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClickEvent;

    /**
     * Decodes a ClickEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClickEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClickEvent;

    /**
     * Verifies a ClickEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClickEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClickEvent
     */
    public static fromObject(object: { [k: string]: any }): ClickEvent;

    /**
     * Creates a plain object from a ClickEvent message. Also converts values to other types if specified.
     * @param message ClickEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClickEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClickEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Subject enum. */
export enum Subject {
    SUBJECT_NONE = 0,
    SUBJECT_METER_READING = 1
}

/** Intent enum. */
export enum Intent {
    INTENT_NONE = 0,
    INTENT_METER_READING_SUBMIT = 1
}

/** Stage enum. */
export enum Stage {
    STAGE_NONE = 0,
    STAGE_SUBMITTED = 1,
    STAGE_RECEIVED_REQUEST_FOR_AMEND = 2,
    STAGE_COMPLETED = 3,
    STAGE_REJECTED = 4,
    STAGE_ENTERED = 5,
    STAGE_STARTED = 6,
    STAGE_FAILED = 7
}

/** Interaction enum. */
export enum Interaction {
    INTERACTION_NONE = 0,
    INTERACTION_CLICKED = 1,
    INTERACTION_VIEWED = 2
}

/** InteractionChannel enum. */
export enum InteractionChannel {
    INTERACTION_CHANNEL_NONE = 0,
    INTERACTION_CHANNEL_EMAIL = 1,
    INTERACTION_CHANNEL_WILLIAM = 2
}
