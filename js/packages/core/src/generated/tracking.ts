/* eslint-disable */


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
  account: Account | undefined;
  application: Application | undefined;
  subject: Subject;
  intent: Intent;
  stage: Stage;
  attributes: { [key: string]: string };
}

export interface StageEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface InteractionEvent {
  account: Account | undefined;
  application: Application | undefined;
  subject: Subject;
  intent: Intent;
  interaction: Interaction;
  channel: InteractionChannel;
  attributes: { [key: string]: string };
}

export interface InteractionEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface VisitEvent {
  account: Account | undefined;
  application: Application | undefined;
  location: string;
  attributes: { [key: string]: string };
}

export interface VisitEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface ClickEvent {
  account: Account | undefined;
  application: Application | undefined;
  target: string;
  attributes: { [key: string]: string };
}

export interface ClickEvent_AttributesEntry {
  key: string;
  value: string;
}

const baseAccount: object = {
  id: "",
  number: "",
};

const baseApplication: object = {
  id: "",
};

const basePerson: object = {
};

const baseStageEvent: object = {
  subject: 0,
  intent: 0,
  stage: 0,
};

const baseStageEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseInteractionEvent: object = {
  subject: 0,
  intent: 0,
  interaction: 0,
  channel: 0,
};

const baseInteractionEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseVisitEvent: object = {
  location: "",
};

const baseVisitEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseClickEvent: object = {
  target: "",
};

const baseClickEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

export const Subject = {
  SUBJECT_NONE: 0 as const,
  SUBJECT_METER_READING: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Subject {
    switch (object) {
      case 0:
      case "SUBJECT_NONE":
        return Subject.SUBJECT_NONE;
      case 1:
      case "SUBJECT_METER_READING":
        return Subject.SUBJECT_METER_READING;
      case -1:
      case "UNRECOGNIZED":
      default:
        return Subject.UNRECOGNIZED;
    }
  },
  toJSON(object: Subject): string {
    switch (object) {
      case Subject.SUBJECT_NONE:
        return "SUBJECT_NONE";
      case Subject.SUBJECT_METER_READING:
        return "SUBJECT_METER_READING";
      default:
        return "UNKNOWN";
    }
  },
}

export type Subject = 0 | 1 | -1;

export const Intent = {
  INTENT_NONE: 0 as const,
  INTENT_METER_READING_SUBMIT: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Intent {
    switch (object) {
      case 0:
      case "INTENT_NONE":
        return Intent.INTENT_NONE;
      case 1:
      case "INTENT_METER_READING_SUBMIT":
        return Intent.INTENT_METER_READING_SUBMIT;
      case -1:
      case "UNRECOGNIZED":
      default:
        return Intent.UNRECOGNIZED;
    }
  },
  toJSON(object: Intent): string {
    switch (object) {
      case Intent.INTENT_NONE:
        return "INTENT_NONE";
      case Intent.INTENT_METER_READING_SUBMIT:
        return "INTENT_METER_READING_SUBMIT";
      default:
        return "UNKNOWN";
    }
  },
}

export type Intent = 0 | 1 | -1;

export const Stage = {
  STAGE_NONE: 0 as const,
  STAGE_SUBMITTED: 1 as const,
  STAGE_RECEIVED_REQUEST_FOR_AMEND: 2 as const,
  STAGE_COMPLETED: 3 as const,
  STAGE_REJECTED: 4 as const,
  STAGE_ENTERED: 5 as const,
  STAGE_STARTED: 6 as const,
  STAGE_FAILED: 7 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Stage {
    switch (object) {
      case 0:
      case "STAGE_NONE":
        return Stage.STAGE_NONE;
      case 1:
      case "STAGE_SUBMITTED":
        return Stage.STAGE_SUBMITTED;
      case 2:
      case "STAGE_RECEIVED_REQUEST_FOR_AMEND":
        return Stage.STAGE_RECEIVED_REQUEST_FOR_AMEND;
      case 3:
      case "STAGE_COMPLETED":
        return Stage.STAGE_COMPLETED;
      case 4:
      case "STAGE_REJECTED":
        return Stage.STAGE_REJECTED;
      case 5:
      case "STAGE_ENTERED":
        return Stage.STAGE_ENTERED;
      case 6:
      case "STAGE_STARTED":
        return Stage.STAGE_STARTED;
      case 7:
      case "STAGE_FAILED":
        return Stage.STAGE_FAILED;
      case -1:
      case "UNRECOGNIZED":
      default:
        return Stage.UNRECOGNIZED;
    }
  },
  toJSON(object: Stage): string {
    switch (object) {
      case Stage.STAGE_NONE:
        return "STAGE_NONE";
      case Stage.STAGE_SUBMITTED:
        return "STAGE_SUBMITTED";
      case Stage.STAGE_RECEIVED_REQUEST_FOR_AMEND:
        return "STAGE_RECEIVED_REQUEST_FOR_AMEND";
      case Stage.STAGE_COMPLETED:
        return "STAGE_COMPLETED";
      case Stage.STAGE_REJECTED:
        return "STAGE_REJECTED";
      case Stage.STAGE_ENTERED:
        return "STAGE_ENTERED";
      case Stage.STAGE_STARTED:
        return "STAGE_STARTED";
      case Stage.STAGE_FAILED:
        return "STAGE_FAILED";
      default:
        return "UNKNOWN";
    }
  },
}

export type Stage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

export const Interaction = {
  INTERACTION_NONE: 0 as const,
  INTERACTION_CLICKED: 1 as const,
  INTERACTION_VIEWED: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Interaction {
    switch (object) {
      case 0:
      case "INTERACTION_NONE":
        return Interaction.INTERACTION_NONE;
      case 1:
      case "INTERACTION_CLICKED":
        return Interaction.INTERACTION_CLICKED;
      case 2:
      case "INTERACTION_VIEWED":
        return Interaction.INTERACTION_VIEWED;
      case -1:
      case "UNRECOGNIZED":
      default:
        return Interaction.UNRECOGNIZED;
    }
  },
  toJSON(object: Interaction): string {
    switch (object) {
      case Interaction.INTERACTION_NONE:
        return "INTERACTION_NONE";
      case Interaction.INTERACTION_CLICKED:
        return "INTERACTION_CLICKED";
      case Interaction.INTERACTION_VIEWED:
        return "INTERACTION_VIEWED";
      default:
        return "UNKNOWN";
    }
  },
}

export type Interaction = 0 | 1 | 2 | -1;

export const InteractionChannel = {
  INTERACTION_CHANNEL_NONE: 0 as const,
  INTERACTION_CHANNEL_EMAIL: 1 as const,
  INTERACTION_CHANNEL_WILLIAM: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): InteractionChannel {
    switch (object) {
      case 0:
      case "INTERACTION_CHANNEL_NONE":
        return InteractionChannel.INTERACTION_CHANNEL_NONE;
      case 1:
      case "INTERACTION_CHANNEL_EMAIL":
        return InteractionChannel.INTERACTION_CHANNEL_EMAIL;
      case 2:
      case "INTERACTION_CHANNEL_WILLIAM":
        return InteractionChannel.INTERACTION_CHANNEL_WILLIAM;
      case -1:
      case "UNRECOGNIZED":
      default:
        return InteractionChannel.UNRECOGNIZED;
    }
  },
  toJSON(object: InteractionChannel): string {
    switch (object) {
      case InteractionChannel.INTERACTION_CHANNEL_NONE:
        return "INTERACTION_CHANNEL_NONE";
      case InteractionChannel.INTERACTION_CHANNEL_EMAIL:
        return "INTERACTION_CHANNEL_EMAIL";
      case InteractionChannel.INTERACTION_CHANNEL_WILLIAM:
        return "INTERACTION_CHANNEL_WILLIAM";
      default:
        return "UNKNOWN";
    }
  },
}

export type InteractionChannel = 0 | 1 | 2 | -1;

export const Account = {
  fromJSON(object: any): Account {
    const message = { ...baseAccount } as Account;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = String(object.number);
    } else {
      message.number = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = { ...baseAccount } as Account;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    return message;
  },
  toJSON(message: Account): unknown {
    const obj: any = {};
    obj.id = message.id || "";
    obj.number = message.number || "";
    return obj;
  },
};

export const Application = {
  fromJSON(object: any): Application {
    const message = { ...baseApplication } as Application;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Application>): Application {
    const message = { ...baseApplication } as Application;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Application): unknown {
    const obj: any = {};
    obj.id = message.id || "";
    return obj;
  },
};

export const Person = {
  fromJSON(_: any): Person {
    const message = { ...basePerson } as Person;
    return message;
  },
  fromPartial(_: DeepPartial<Person>): Person {
    const message = { ...basePerson } as Person;
    return message;
  },
  toJSON(_: Person): unknown {
    const obj: any = {};
    return obj;
  },
};

export const StageEvent = {
  fromJSON(object: any): StageEvent {
    const message = { ...baseStageEvent } as StageEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromJSON(object.application);
    } else {
      message.application = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = 0;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = Intent.fromJSON(object.intent);
    } else {
      message.intent = 0;
    }
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = Stage.fromJSON(object.stage);
    } else {
      message.stage = 0;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<StageEvent>): StageEvent {
    const message = { ...baseStageEvent } as StageEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromPartial(object.application);
    } else {
      message.application = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = 0;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    } else {
      message.intent = 0;
    }
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = object.stage;
    } else {
      message.stage = 0;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.attributes[key] = String(value);
        }
      })
    }
    return message;
  },
  toJSON(message: StageEvent): unknown {
    const obj: any = {};
    obj.account = message.account ? Account.toJSON(message.account) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.subject = Subject.toJSON(message.subject);
    obj.intent = Intent.toJSON(message.intent);
    obj.stage = Stage.toJSON(message.stage);
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const StageEvent_AttributesEntry = {
  fromJSON(object: any): StageEvent_AttributesEntry {
    const message = { ...baseStageEvent_AttributesEntry } as StageEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<StageEvent_AttributesEntry>): StageEvent_AttributesEntry {
    const message = { ...baseStageEvent_AttributesEntry } as StageEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: StageEvent_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const InteractionEvent = {
  fromJSON(object: any): InteractionEvent {
    const message = { ...baseInteractionEvent } as InteractionEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromJSON(object.application);
    } else {
      message.application = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = 0;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = Intent.fromJSON(object.intent);
    } else {
      message.intent = 0;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = Interaction.fromJSON(object.interaction);
    } else {
      message.interaction = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = InteractionChannel.fromJSON(object.channel);
    } else {
      message.channel = 0;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<InteractionEvent>): InteractionEvent {
    const message = { ...baseInteractionEvent } as InteractionEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromPartial(object.application);
    } else {
      message.application = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = 0;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    } else {
      message.intent = 0;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = object.interaction;
    } else {
      message.interaction = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = 0;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.attributes[key] = String(value);
        }
      })
    }
    return message;
  },
  toJSON(message: InteractionEvent): unknown {
    const obj: any = {};
    obj.account = message.account ? Account.toJSON(message.account) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.subject = Subject.toJSON(message.subject);
    obj.intent = Intent.toJSON(message.intent);
    obj.interaction = Interaction.toJSON(message.interaction);
    obj.channel = InteractionChannel.toJSON(message.channel);
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const InteractionEvent_AttributesEntry = {
  fromJSON(object: any): InteractionEvent_AttributesEntry {
    const message = { ...baseInteractionEvent_AttributesEntry } as InteractionEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<InteractionEvent_AttributesEntry>): InteractionEvent_AttributesEntry {
    const message = { ...baseInteractionEvent_AttributesEntry } as InteractionEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: InteractionEvent_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const VisitEvent = {
  fromJSON(object: any): VisitEvent {
    const message = { ...baseVisitEvent } as VisitEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromJSON(object.application);
    } else {
      message.application = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<VisitEvent>): VisitEvent {
    const message = { ...baseVisitEvent } as VisitEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromPartial(object.application);
    } else {
      message.application = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.attributes[key] = String(value);
        }
      })
    }
    return message;
  },
  toJSON(message: VisitEvent): unknown {
    const obj: any = {};
    obj.account = message.account ? Account.toJSON(message.account) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.location = message.location || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const VisitEvent_AttributesEntry = {
  fromJSON(object: any): VisitEvent_AttributesEntry {
    const message = { ...baseVisitEvent_AttributesEntry } as VisitEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<VisitEvent_AttributesEntry>): VisitEvent_AttributesEntry {
    const message = { ...baseVisitEvent_AttributesEntry } as VisitEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: VisitEvent_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const ClickEvent = {
  fromJSON(object: any): ClickEvent {
    const message = { ...baseClickEvent } as ClickEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromJSON(object.application);
    } else {
      message.application = undefined;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClickEvent>): ClickEvent {
    const message = { ...baseClickEvent } as ClickEvent;
    message.attributes = {};
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromPartial(object.application);
    } else {
      message.application = undefined;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.attributes[key] = String(value);
        }
      })
    }
    return message;
  },
  toJSON(message: ClickEvent): unknown {
    const obj: any = {};
    obj.account = message.account ? Account.toJSON(message.account) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.target = message.target || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const ClickEvent_AttributesEntry = {
  fromJSON(object: any): ClickEvent_AttributesEntry {
    const message = { ...baseClickEvent_AttributesEntry } as ClickEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClickEvent_AttributesEntry>): ClickEvent_AttributesEntry {
    const message = { ...baseClickEvent_AttributesEntry } as ClickEvent_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: ClickEvent_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;