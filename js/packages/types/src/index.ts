/* eslint-disable */


export interface Actor {
  /**
   *  used as the main identifier in tracking backend (ie
   *  distinct_id in mixpanel)
   */
  id: string;
  /**
   *  map to attach actor attributes to each event, can be used for
   *  account_number etc.
   */
  attributes: { [key: string]: string };
}

export interface Actor_AttributesEntry {
  key: string;
  value: string;
}

export interface Application {
  id: string;
  /**
   *  map to attach application attributes to each event, can be used for
   *  build version etc.
   */
  attributes: { [key: string]: string };
}

export interface Application_AttributesEntry {
  key: string;
  value: string;
}

export interface StageEvent {
  actor: Actor | undefined;
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
  actor: Actor | undefined;
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
  actor: Actor | undefined;
  application: Application | undefined;
  location: string;
  attributes: { [key: string]: string };
}

export interface VisitEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface ClickEvent {
  actor: Actor | undefined;
  application: Application | undefined;
  target: string;
  attributes: { [key: string]: string };
}

export interface ClickEvent_AttributesEntry {
  key: string;
  value: string;
}

const baseActor: object = {
  id: "",
};

const baseActor_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseApplication: object = {
  id: "",
};

const baseApplication_AttributesEntry: object = {
  key: "",
  value: "",
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
  SUBJECT_CUSTOMER_REFERRAL: 2 as const,
  SUBJECT_BILL: 3 as const,
  SUBJECT_ENERGY_PREFERENCES: 4 as const,
  SUBJECT_HELP: 5 as const,
  SUBJECT_CUSTOMER_AUTH: 6 as const,
  SUBJECT_MOBILE_SIM: 7 as const,
  SUBJECT_SMART_METER_INSTALLATION: 8 as const,
  SUBJECT_CUSTOMER_OVERDUE_BALANCE: 9 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Subject {
    switch (object) {
      case 0:
      case "SUBJECT_NONE":
        return Subject.SUBJECT_NONE;
      case 1:
      case "SUBJECT_METER_READING":
        return Subject.SUBJECT_METER_READING;
      case 2:
      case "SUBJECT_CUSTOMER_REFERRAL":
        return Subject.SUBJECT_CUSTOMER_REFERRAL;
      case 3:
      case "SUBJECT_BILL":
        return Subject.SUBJECT_BILL;
      case 4:
      case "SUBJECT_ENERGY_PREFERENCES":
        return Subject.SUBJECT_ENERGY_PREFERENCES;
      case 5:
      case "SUBJECT_HELP":
        return Subject.SUBJECT_HELP;
      case 6:
      case "SUBJECT_CUSTOMER_AUTH":
        return Subject.SUBJECT_CUSTOMER_AUTH;
      case 7:
      case "SUBJECT_MOBILE_SIM":
        return Subject.SUBJECT_MOBILE_SIM;
      case 8:
      case "SUBJECT_SMART_METER_INSTALLATION":
        return Subject.SUBJECT_SMART_METER_INSTALLATION;
      case 9:
      case "SUBJECT_CUSTOMER_OVERDUE_BALANCE":
        return Subject.SUBJECT_CUSTOMER_OVERDUE_BALANCE;
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
      case Subject.SUBJECT_CUSTOMER_REFERRAL:
        return "SUBJECT_CUSTOMER_REFERRAL";
      case Subject.SUBJECT_BILL:
        return "SUBJECT_BILL";
      case Subject.SUBJECT_ENERGY_PREFERENCES:
        return "SUBJECT_ENERGY_PREFERENCES";
      case Subject.SUBJECT_HELP:
        return "SUBJECT_HELP";
      case Subject.SUBJECT_CUSTOMER_AUTH:
        return "SUBJECT_CUSTOMER_AUTH";
      case Subject.SUBJECT_MOBILE_SIM:
        return "SUBJECT_MOBILE_SIM";
      case Subject.SUBJECT_SMART_METER_INSTALLATION:
        return "SUBJECT_SMART_METER_INSTALLATION";
      case Subject.SUBJECT_CUSTOMER_OVERDUE_BALANCE:
        return "SUBJECT_CUSTOMER_OVERDUE_BALANCE";
      default:
        return "UNKNOWN";
    }
  },
}

export type Subject = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | -1;

export const Intent = {
  INTENT_NONE: 0 as const,
  INTENT_METER_READING_SUBMIT: 1 as const,
  INTENT_LEAD_CAPTURE: 2 as const,
  INTENT_PAYMENT: 3 as const,
  INTENT_FRIEND_REFERRAL_LINK_SHARE: 4 as const,
  INTENT_PREFERENCES_UPDATE: 5 as const,
  INTENT_CONTACT_SUPPORT: 6 as const,
  INTENT_LEAVE_FEEDBACK: 7 as const,
  INTENT_LOGIN: 8 as const,
  INTENT_MOBILE_SIM_UPGRADE: 9 as const,
  INTENT_APPOINTMENT_BOOKING: 10 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Intent {
    switch (object) {
      case 0:
      case "INTENT_NONE":
        return Intent.INTENT_NONE;
      case 1:
      case "INTENT_METER_READING_SUBMIT":
        return Intent.INTENT_METER_READING_SUBMIT;
      case 2:
      case "INTENT_LEAD_CAPTURE":
        return Intent.INTENT_LEAD_CAPTURE;
      case 3:
      case "INTENT_PAYMENT":
        return Intent.INTENT_PAYMENT;
      case 4:
      case "INTENT_FRIEND_REFERRAL_LINK_SHARE":
        return Intent.INTENT_FRIEND_REFERRAL_LINK_SHARE;
      case 5:
      case "INTENT_PREFERENCES_UPDATE":
        return Intent.INTENT_PREFERENCES_UPDATE;
      case 6:
      case "INTENT_CONTACT_SUPPORT":
        return Intent.INTENT_CONTACT_SUPPORT;
      case 7:
      case "INTENT_LEAVE_FEEDBACK":
        return Intent.INTENT_LEAVE_FEEDBACK;
      case 8:
      case "INTENT_LOGIN":
        return Intent.INTENT_LOGIN;
      case 9:
      case "INTENT_MOBILE_SIM_UPGRADE":
        return Intent.INTENT_MOBILE_SIM_UPGRADE;
      case 10:
      case "INTENT_APPOINTMENT_BOOKING":
        return Intent.INTENT_APPOINTMENT_BOOKING;
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
      case Intent.INTENT_LEAD_CAPTURE:
        return "INTENT_LEAD_CAPTURE";
      case Intent.INTENT_PAYMENT:
        return "INTENT_PAYMENT";
      case Intent.INTENT_FRIEND_REFERRAL_LINK_SHARE:
        return "INTENT_FRIEND_REFERRAL_LINK_SHARE";
      case Intent.INTENT_PREFERENCES_UPDATE:
        return "INTENT_PREFERENCES_UPDATE";
      case Intent.INTENT_CONTACT_SUPPORT:
        return "INTENT_CONTACT_SUPPORT";
      case Intent.INTENT_LEAVE_FEEDBACK:
        return "INTENT_LEAVE_FEEDBACK";
      case Intent.INTENT_LOGIN:
        return "INTENT_LOGIN";
      case Intent.INTENT_MOBILE_SIM_UPGRADE:
        return "INTENT_MOBILE_SIM_UPGRADE";
      case Intent.INTENT_APPOINTMENT_BOOKING:
        return "INTENT_APPOINTMENT_BOOKING";
      default:
        return "UNKNOWN";
    }
  },
}

export type Intent = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | -1;

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
  INTERACTION_CHANNEL_RESIDENTIAL_MOBILE_APP: 3 as const,
  INTERACTION_CHANNEL_RESIDENTIAL_WEB_APP: 5 as const,
  INTERACTION_CHANNEL_HELP_CENTRE_WEB: 6 as const,
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
      case 3:
      case "INTERACTION_CHANNEL_RESIDENTIAL_MOBILE_APP":
        return InteractionChannel.INTERACTION_CHANNEL_RESIDENTIAL_MOBILE_APP;
      case 5:
      case "INTERACTION_CHANNEL_RESIDENTIAL_WEB_APP":
        return InteractionChannel.INTERACTION_CHANNEL_RESIDENTIAL_WEB_APP;
      case 6:
      case "INTERACTION_CHANNEL_HELP_CENTRE_WEB":
        return InteractionChannel.INTERACTION_CHANNEL_HELP_CENTRE_WEB;
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
      case InteractionChannel.INTERACTION_CHANNEL_RESIDENTIAL_MOBILE_APP:
        return "INTERACTION_CHANNEL_RESIDENTIAL_MOBILE_APP";
      case InteractionChannel.INTERACTION_CHANNEL_RESIDENTIAL_WEB_APP:
        return "INTERACTION_CHANNEL_RESIDENTIAL_WEB_APP";
      case InteractionChannel.INTERACTION_CHANNEL_HELP_CENTRE_WEB:
        return "INTERACTION_CHANNEL_HELP_CENTRE_WEB";
      default:
        return "UNKNOWN";
    }
  },
}

export type InteractionChannel = 0 | 1 | 2 | 3 | 5 | 6 | -1;

export const Actor = {
  fromJSON(object: any): Actor {
    const message = { ...baseActor } as Actor;
    message.attributes = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<Actor>): Actor {
    const message = { ...baseActor } as Actor;
    message.attributes = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
  toJSON(message: Actor): unknown {
    const obj: any = {};
    obj.id = message.id || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const Actor_AttributesEntry = {
  fromJSON(object: any): Actor_AttributesEntry {
    const message = { ...baseActor_AttributesEntry } as Actor_AttributesEntry;
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
  fromPartial(object: DeepPartial<Actor_AttributesEntry>): Actor_AttributesEntry {
    const message = { ...baseActor_AttributesEntry } as Actor_AttributesEntry;
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
  toJSON(message: Actor_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const Application = {
  fromJSON(object: any): Application {
    const message = { ...baseApplication } as Application;
    message.attributes = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<Application>): Application {
    const message = { ...baseApplication } as Application;
    message.attributes = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
  toJSON(message: Application): unknown {
    const obj: any = {};
    obj.id = message.id || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const Application_AttributesEntry = {
  fromJSON(object: any): Application_AttributesEntry {
    const message = { ...baseApplication_AttributesEntry } as Application_AttributesEntry;
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
  fromPartial(object: DeepPartial<Application_AttributesEntry>): Application_AttributesEntry {
    const message = { ...baseApplication_AttributesEntry } as Application_AttributesEntry;
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
  toJSON(message: Application_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const StageEvent = {
  fromJSON(object: any): StageEvent {
    const message = { ...baseStageEvent } as StageEvent;
    message.attributes = {};
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromJSON(object.actor);
    } else {
      message.actor = undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromPartial(object.actor);
    } else {
      message.actor = undefined;
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
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromJSON(object.actor);
    } else {
      message.actor = undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromPartial(object.actor);
    } else {
      message.actor = undefined;
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
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromJSON(object.actor);
    } else {
      message.actor = undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromPartial(object.actor);
    } else {
      message.actor = undefined;
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
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromJSON(object.actor);
    } else {
      message.actor = undefined;
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
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = Actor.fromPartial(object.actor);
    } else {
      message.actor = undefined;
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
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
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