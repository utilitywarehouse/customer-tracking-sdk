import * as pb_1 from "google-protobuf";
export class Account extends pb_1.Message {
    constructor(data?: any[] | {
        id?: string;
        number?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
            this.number = data.number;
        }
    }
    get id(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get number(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
    }
    set number(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            id: this.id,
            number: this.number
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeString(1, this.id);
        if (this.number !== undefined)
            writer.writeString(2, this.number);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Account {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Account();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readString();
                    break;
                case 2:
                    message.number = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Application extends pb_1.Message {
    constructor(data?: any[] | {
        id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeString(1, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Application {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Application();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Person extends pb_1.Message {
    constructor(data?: any[] | {}) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    toObject() {
        return {};
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Person {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Person();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class StageEvent extends pb_1.Message {
    constructor(data?: any[] | {
        account?: Account;
        application?: Application;
        object?: Object;
        intent?: Intent;
        stage?: Stage;
        attributes?: StageEvent.AttributesEntry[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [6], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.account = data.account;
            this.application = data.application;
            this.object = data.object;
            this.intent = data.intent;
            this.stage = data.stage;
            this.attributes = data.attributes;
        }
    }
    get account(): Account | undefined {
        return pb_1.Message.getWrapperField(this, Account, 1) as Account | undefined;
    }
    set account(value: Account) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get application(): Application | undefined {
        return pb_1.Message.getWrapperField(this, Application, 2) as Application | undefined;
    }
    set application(value: Application) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get object(): Object | undefined {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Object | undefined;
    }
    set object(value: Object) {
        pb_1.Message.setField(this, 3, value);
    }
    get intent(): Intent | undefined {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Intent | undefined;
    }
    set intent(value: Intent) {
        pb_1.Message.setField(this, 4, value);
    }
    get stage(): Stage | undefined {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as Stage | undefined;
    }
    set stage(value: Stage) {
        pb_1.Message.setField(this, 5, value);
    }
    get attributes(): StageEvent.AttributesEntry[] {
        return pb_1.Message.getRepeatedWrapperField(this, StageEvent.AttributesEntry, 6) as StageEvent.AttributesEntry[];
    }
    set attributes(value: StageEvent.AttributesEntry[]) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    toObject() {
        return {
            account: this.account && this.account.toObject(),
            application: this.application && this.application.toObject(),
            object: this.object,
            intent: this.intent,
            stage: this.stage,
            attributes: this.attributes.map((item: StageEvent.AttributesEntry) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.account !== undefined)
            writer.writeMessage(1, this.account, () => this.account.serialize(writer));
        if (this.application !== undefined)
            writer.writeMessage(2, this.application, () => this.application.serialize(writer));
        if (this.object !== undefined)
            writer.writeEnum(3, this.object);
        if (this.intent !== undefined)
            writer.writeEnum(4, this.intent);
        if (this.stage !== undefined)
            writer.writeEnum(5, this.stage);
        if (this.attributes !== undefined)
            writer.writeRepeatedMessage(6, this.attributes, (item: StageEvent.AttributesEntry) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StageEvent {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StageEvent();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.account, () => message.account = Account.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.application, () => message.application = Application.deserialize(reader));
                    break;
                case 3:
                    message.object = reader.readEnum();
                    break;
                case 4:
                    message.intent = reader.readEnum();
                    break;
                case 5:
                    message.stage = reader.readEnum();
                    break;
                case 6:
                    reader.readMessage(message.attributes, () => pb_1.Message.addToRepeatedWrapperField(message, 6, StageEvent.AttributesEntry.deserialize(reader), StageEvent.AttributesEntry));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export namespace StageEvent {
    export class AttributesEntry extends pb_1.Message {
        constructor(data?: any[] | {
            key?: string;
            value?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.key = data.key;
                this.value = data.value;
            }
        }
        get key(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get value(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set value(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                key: this.key,
                value: this.value
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key !== undefined)
                writer.writeString(1, this.key);
            if (this.value !== undefined)
                writer.writeString(2, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AttributesEntry {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AttributesEntry();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readString();
                        break;
                    case 2:
                        message.value = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
export class InteractionEvent extends pb_1.Message {
    constructor(data?: any[] | {
        account?: Account;
        application?: Application;
        object?: Object;
        intent?: Intent;
        interaction?: Interaction;
        channel?: InteractionChannel;
        attributes?: InteractionEvent.AttributesEntry[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [7], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.account = data.account;
            this.application = data.application;
            this.object = data.object;
            this.intent = data.intent;
            this.interaction = data.interaction;
            this.channel = data.channel;
            this.attributes = data.attributes;
        }
    }
    get account(): Account | undefined {
        return pb_1.Message.getWrapperField(this, Account, 1) as Account | undefined;
    }
    set account(value: Account) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get application(): Application | undefined {
        return pb_1.Message.getWrapperField(this, Application, 2) as Application | undefined;
    }
    set application(value: Application) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get object(): Object | undefined {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Object | undefined;
    }
    set object(value: Object) {
        pb_1.Message.setField(this, 3, value);
    }
    get intent(): Intent | undefined {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Intent | undefined;
    }
    set intent(value: Intent) {
        pb_1.Message.setField(this, 4, value);
    }
    get interaction(): Interaction | undefined {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as Interaction | undefined;
    }
    set interaction(value: Interaction) {
        pb_1.Message.setField(this, 5, value);
    }
    get channel(): InteractionChannel | undefined {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as InteractionChannel | undefined;
    }
    set channel(value: InteractionChannel) {
        pb_1.Message.setField(this, 6, value);
    }
    get attributes(): InteractionEvent.AttributesEntry[] {
        return pb_1.Message.getRepeatedWrapperField(this, InteractionEvent.AttributesEntry, 7) as InteractionEvent.AttributesEntry[];
    }
    set attributes(value: InteractionEvent.AttributesEntry[]) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    toObject() {
        return {
            account: this.account && this.account.toObject(),
            application: this.application && this.application.toObject(),
            object: this.object,
            intent: this.intent,
            interaction: this.interaction,
            channel: this.channel,
            attributes: this.attributes.map((item: InteractionEvent.AttributesEntry) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.account !== undefined)
            writer.writeMessage(1, this.account, () => this.account.serialize(writer));
        if (this.application !== undefined)
            writer.writeMessage(2, this.application, () => this.application.serialize(writer));
        if (this.object !== undefined)
            writer.writeEnum(3, this.object);
        if (this.intent !== undefined)
            writer.writeEnum(4, this.intent);
        if (this.interaction !== undefined)
            writer.writeEnum(5, this.interaction);
        if (this.channel !== undefined)
            writer.writeEnum(6, this.channel);
        if (this.attributes !== undefined)
            writer.writeRepeatedMessage(7, this.attributes, (item: InteractionEvent.AttributesEntry) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InteractionEvent {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new InteractionEvent();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.account, () => message.account = Account.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.application, () => message.application = Application.deserialize(reader));
                    break;
                case 3:
                    message.object = reader.readEnum();
                    break;
                case 4:
                    message.intent = reader.readEnum();
                    break;
                case 5:
                    message.interaction = reader.readEnum();
                    break;
                case 6:
                    message.channel = reader.readEnum();
                    break;
                case 7:
                    reader.readMessage(message.attributes, () => pb_1.Message.addToRepeatedWrapperField(message, 7, InteractionEvent.AttributesEntry.deserialize(reader), InteractionEvent.AttributesEntry));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export namespace InteractionEvent {
    export class AttributesEntry extends pb_1.Message {
        constructor(data?: any[] | {
            key?: string;
            value?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.key = data.key;
                this.value = data.value;
            }
        }
        get key(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get value(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set value(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                key: this.key,
                value: this.value
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key !== undefined)
                writer.writeString(1, this.key);
            if (this.value !== undefined)
                writer.writeString(2, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AttributesEntry {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AttributesEntry();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readString();
                        break;
                    case 2:
                        message.value = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
