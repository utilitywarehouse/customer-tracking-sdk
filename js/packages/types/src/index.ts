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
   *  all attributes are automatically prefixed with application_
   */
  attributes: { [key: string]: string };
}

export interface Application_AttributesEntry {
  key: string;
  value: string;
}

export interface Journey {
  intent: JourneyIntent;
  subject: JourneySubject;
}

export interface JourneyStageEvent {
  journey: Journey | undefined;
  channel: Channel;
  actor: Actor | undefined;
  application: Application | undefined;
  stage: JourneyStage;
  /**
   *  step is optional and can be used to track microjourneys within journeys
   */
  step: string;
  attributes: { [key: string]: string };
}

export interface JourneyStageEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface Interaction {
  type: InteractionType;
  targetType: InteractionTargetType;
  target: string;
}

/**
 *  JourneyInteraction used to track significant microinteractions during journeys
 *  a good example is switching an additional option during product selection etc
 */
export interface JourneyInteractionEvent {
  journey: Journey | undefined;
  channel: Channel;
  actor: Actor | undefined;
  application: Application | undefined;
  interaction: Interaction | undefined;
  step: string;
  attributes: { [key: string]: string };
}

export interface JourneyInteractionEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface ClickEvent {
  actor: Actor | undefined;
  application: Application | undefined;
  channel: Channel;
  target: string;
  attributes: { [key: string]: string };
}

export interface ClickEvent_AttributesEntry {
  key: string;
  value: string;
}

export interface VisitEvent {
  actor: Actor | undefined;
  application: Application | undefined;
  channel: Channel;
  location: string;
  attributes: { [key: string]: string };
}

export interface VisitEvent_AttributesEntry {
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

const baseJourney: object = {
  intent: 0,
  subject: 0,
};

const baseJourneyStageEvent: object = {
  channel: 0,
  stage: 0,
  step: "",
};

const baseJourneyStageEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseInteraction: object = {
  type: 0,
  targetType: 0,
  target: "",
};

const baseJourneyInteractionEvent: object = {
  channel: 0,
  step: "",
};

const baseJourneyInteractionEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseClickEvent: object = {
  channel: 0,
  target: "",
};

const baseClickEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

const baseVisitEvent: object = {
  channel: 0,
  location: "",
};

const baseVisitEvent_AttributesEntry: object = {
  key: "",
  value: "",
};

export const Channel = {
  CHANNEL_UNKNOWN: 0 as const,
  CHANNEL_WEB: 1 as const,
  CHANNEL_MOBILE: 2 as const,
  CHANNEL_VOICE: 3 as const,
  CHANNEL_CHAT: 4 as const,
  CHANNEL_EMAIL: 5 as const,
  CHANNEL_AGENT: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): Channel {
    switch (object) {
      case 0:
      case "CHANNEL_UNKNOWN":
        return Channel.CHANNEL_UNKNOWN;
      case 1:
      case "CHANNEL_WEB":
        return Channel.CHANNEL_WEB;
      case 2:
      case "CHANNEL_MOBILE":
        return Channel.CHANNEL_MOBILE;
      case 3:
      case "CHANNEL_VOICE":
        return Channel.CHANNEL_VOICE;
      case 4:
      case "CHANNEL_CHAT":
        return Channel.CHANNEL_CHAT;
      case 5:
      case "CHANNEL_EMAIL":
        return Channel.CHANNEL_EMAIL;
      case 6:
      case "CHANNEL_AGENT":
        return Channel.CHANNEL_AGENT;
      case -1:
      case "UNRECOGNIZED":
      default:
        return Channel.UNRECOGNIZED;
    }
  },
  toJSON(object: Channel): string {
    switch (object) {
      case Channel.CHANNEL_UNKNOWN:
        return "CHANNEL_UNKNOWN";
      case Channel.CHANNEL_WEB:
        return "CHANNEL_WEB";
      case Channel.CHANNEL_MOBILE:
        return "CHANNEL_MOBILE";
      case Channel.CHANNEL_VOICE:
        return "CHANNEL_VOICE";
      case Channel.CHANNEL_CHAT:
        return "CHANNEL_CHAT";
      case Channel.CHANNEL_EMAIL:
        return "CHANNEL_EMAIL";
      case Channel.CHANNEL_AGENT:
        return "CHANNEL_AGENT";
      default:
        return "UNKNOWN";
    }
  },
}

export type Channel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const JourneyStage = {
  JOURNEY_STAGE_UNKNOWN: 0 as const,
  JOURNEY_STAGE_ENTERED: 1 as const,
  JOURNEY_STAGE_STARTED: 2 as const,
  JOURNEY_STAGE_SUBMITTED: 3 as const,
  JOURNEY_STAGE_COMPLETED: 4 as const,
  JOURNEY_STAGE_FAILED: 5 as const,
  JOURNEY_STAGE_ASKED_FOR_AMEND: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): JourneyStage {
    switch (object) {
      case 0:
      case "JOURNEY_STAGE_UNKNOWN":
        return JourneyStage.JOURNEY_STAGE_UNKNOWN;
      case 1:
      case "JOURNEY_STAGE_ENTERED":
        return JourneyStage.JOURNEY_STAGE_ENTERED;
      case 2:
      case "JOURNEY_STAGE_STARTED":
        return JourneyStage.JOURNEY_STAGE_STARTED;
      case 3:
      case "JOURNEY_STAGE_SUBMITTED":
        return JourneyStage.JOURNEY_STAGE_SUBMITTED;
      case 4:
      case "JOURNEY_STAGE_COMPLETED":
        return JourneyStage.JOURNEY_STAGE_COMPLETED;
      case 5:
      case "JOURNEY_STAGE_FAILED":
        return JourneyStage.JOURNEY_STAGE_FAILED;
      case 6:
      case "JOURNEY_STAGE_ASKED_FOR_AMEND":
        return JourneyStage.JOURNEY_STAGE_ASKED_FOR_AMEND;
      case -1:
      case "UNRECOGNIZED":
      default:
        return JourneyStage.UNRECOGNIZED;
    }
  },
  toJSON(object: JourneyStage): string {
    switch (object) {
      case JourneyStage.JOURNEY_STAGE_UNKNOWN:
        return "JOURNEY_STAGE_UNKNOWN";
      case JourneyStage.JOURNEY_STAGE_ENTERED:
        return "JOURNEY_STAGE_ENTERED";
      case JourneyStage.JOURNEY_STAGE_STARTED:
        return "JOURNEY_STAGE_STARTED";
      case JourneyStage.JOURNEY_STAGE_SUBMITTED:
        return "JOURNEY_STAGE_SUBMITTED";
      case JourneyStage.JOURNEY_STAGE_COMPLETED:
        return "JOURNEY_STAGE_COMPLETED";
      case JourneyStage.JOURNEY_STAGE_FAILED:
        return "JOURNEY_STAGE_FAILED";
      case JourneyStage.JOURNEY_STAGE_ASKED_FOR_AMEND:
        return "JOURNEY_STAGE_ASKED_FOR_AMEND";
      default:
        return "UNKNOWN";
    }
  },
}

export type JourneyStage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const InteractionType = {
  INTERACTION_TYPE_UNKNOWN: 0 as const,
  INTERACTION_TYPE_CLICK: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): InteractionType {
    switch (object) {
      case 0:
      case "INTERACTION_TYPE_UNKNOWN":
        return InteractionType.INTERACTION_TYPE_UNKNOWN;
      case 1:
      case "INTERACTION_TYPE_CLICK":
        return InteractionType.INTERACTION_TYPE_CLICK;
      case -1:
      case "UNRECOGNIZED":
      default:
        return InteractionType.UNRECOGNIZED;
    }
  },
  toJSON(object: InteractionType): string {
    switch (object) {
      case InteractionType.INTERACTION_TYPE_UNKNOWN:
        return "INTERACTION_TYPE_UNKNOWN";
      case InteractionType.INTERACTION_TYPE_CLICK:
        return "INTERACTION_TYPE_CLICK";
      default:
        return "UNKNOWN";
    }
  },
}

export type InteractionType = 0 | 1 | -1;

export const InteractionTargetType = {
  INTERACTION_TARGET_TYPE_UNKNOWN: 0 as const,
  INTERACTION_TARGET_TYPE_TOGGLE: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): InteractionTargetType {
    switch (object) {
      case 0:
      case "INTERACTION_TARGET_TYPE_UNKNOWN":
        return InteractionTargetType.INTERACTION_TARGET_TYPE_UNKNOWN;
      case 1:
      case "INTERACTION_TARGET_TYPE_TOGGLE":
        return InteractionTargetType.INTERACTION_TARGET_TYPE_TOGGLE;
      case -1:
      case "UNRECOGNIZED":
      default:
        return InteractionTargetType.UNRECOGNIZED;
    }
  },
  toJSON(object: InteractionTargetType): string {
    switch (object) {
      case InteractionTargetType.INTERACTION_TARGET_TYPE_UNKNOWN:
        return "INTERACTION_TARGET_TYPE_UNKNOWN";
      case InteractionTargetType.INTERACTION_TARGET_TYPE_TOGGLE:
        return "INTERACTION_TARGET_TYPE_TOGGLE";
      default:
        return "UNKNOWN";
    }
  },
}

export type InteractionTargetType = 0 | 1 | -1;

/**  JourneyIntent describes what we are trying to make the customer do against
 a specific JourneySubject, this should be universal and mostly applicable to
 any subject, a good example NEW_SERVICE_OR_UPGRADE, PREFERENCES_UPDATE, bad example NEW_MOBILE_SERVICE
 */
export const JourneyIntent = {
  JOURNEY_INTENT_UNKNOWN: 0 as const,
  JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): JourneyIntent {
    switch (object) {
      case 0:
      case "JOURNEY_INTENT_UNKNOWN":
        return JourneyIntent.JOURNEY_INTENT_UNKNOWN;
      case 1:
      case "JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE":
        return JourneyIntent.JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE;
      case -1:
      case "UNRECOGNIZED":
      default:
        return JourneyIntent.UNRECOGNIZED;
    }
  },
  toJSON(object: JourneyIntent): string {
    switch (object) {
      case JourneyIntent.JOURNEY_INTENT_UNKNOWN:
        return "JOURNEY_INTENT_UNKNOWN";
      case JourneyIntent.JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE:
        return "JOURNEY_INTENT_NEW_SERVICE_OR_UPGRADE";
      default:
        return "UNKNOWN";
    }
  },
}

export type JourneyIntent = 0 | 1 | -1;

/**  JourneySubject should describe one of the aggregate roots or important entities
 things like MOBILE_SERVICE, CONTACT_PREFERENCES etc.
 */
export const JourneySubject = {
  JOURNEY_SUBJECT_UNKNOWN: 0 as const,
  JOURNEY_SUBJECT_MOBILE_SERVICE: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): JourneySubject {
    switch (object) {
      case 0:
      case "JOURNEY_SUBJECT_UNKNOWN":
        return JourneySubject.JOURNEY_SUBJECT_UNKNOWN;
      case 1:
      case "JOURNEY_SUBJECT_MOBILE_SERVICE":
        return JourneySubject.JOURNEY_SUBJECT_MOBILE_SERVICE;
      case -1:
      case "UNRECOGNIZED":
      default:
        return JourneySubject.UNRECOGNIZED;
    }
  },
  toJSON(object: JourneySubject): string {
    switch (object) {
      case JourneySubject.JOURNEY_SUBJECT_UNKNOWN:
        return "JOURNEY_SUBJECT_UNKNOWN";
      case JourneySubject.JOURNEY_SUBJECT_MOBILE_SERVICE:
        return "JOURNEY_SUBJECT_MOBILE_SERVICE";
      default:
        return "UNKNOWN";
    }
  },
}

export type JourneySubject = 0 | 1 | -1;

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

export const Journey = {
  fromJSON(object: any): Journey {
    const message = { ...baseJourney } as Journey;
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = JourneyIntent.fromJSON(object.intent);
    } else {
      message.intent = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = JourneySubject.fromJSON(object.subject);
    } else {
      message.subject = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Journey>): Journey {
    const message = { ...baseJourney } as Journey;
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    } else {
      message.intent = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = 0;
    }
    return message;
  },
  toJSON(message: Journey): unknown {
    const obj: any = {};
    obj.intent = JourneyIntent.toJSON(message.intent);
    obj.subject = JourneySubject.toJSON(message.subject);
    return obj;
  },
};

export const JourneyStageEvent = {
  fromJSON(object: any): JourneyStageEvent {
    const message = { ...baseJourneyStageEvent } as JourneyStageEvent;
    message.attributes = {};
    if (object.journey !== undefined && object.journey !== null) {
      message.journey = Journey.fromJSON(object.journey);
    } else {
      message.journey = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = 0;
    }
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
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = JourneyStage.fromJSON(object.stage);
    } else {
      message.stage = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = String(object.step);
    } else {
      message.step = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<JourneyStageEvent>): JourneyStageEvent {
    const message = { ...baseJourneyStageEvent } as JourneyStageEvent;
    message.attributes = {};
    if (object.journey !== undefined && object.journey !== null) {
      message.journey = Journey.fromPartial(object.journey);
    } else {
      message.journey = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = 0;
    }
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
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = object.stage;
    } else {
      message.stage = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = object.step;
    } else {
      message.step = "";
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
  toJSON(message: JourneyStageEvent): unknown {
    const obj: any = {};
    obj.journey = message.journey ? Journey.toJSON(message.journey) : undefined;
    obj.channel = Channel.toJSON(message.channel);
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.stage = JourneyStage.toJSON(message.stage);
    obj.step = message.step || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const JourneyStageEvent_AttributesEntry = {
  fromJSON(object: any): JourneyStageEvent_AttributesEntry {
    const message = { ...baseJourneyStageEvent_AttributesEntry } as JourneyStageEvent_AttributesEntry;
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
  fromPartial(object: DeepPartial<JourneyStageEvent_AttributesEntry>): JourneyStageEvent_AttributesEntry {
    const message = { ...baseJourneyStageEvent_AttributesEntry } as JourneyStageEvent_AttributesEntry;
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
  toJSON(message: JourneyStageEvent_AttributesEntry): unknown {
    const obj: any = {};
    obj.key = message.key || "";
    obj.value = message.value || "";
    return obj;
  },
};

export const Interaction = {
  fromJSON(object: any): Interaction {
    const message = { ...baseInteraction } as Interaction;
    if (object.type !== undefined && object.type !== null) {
      message.type = InteractionType.fromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.targetType !== undefined && object.targetType !== null) {
      message.targetType = InteractionTargetType.fromJSON(object.targetType);
    } else {
      message.targetType = 0;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Interaction>): Interaction {
    const message = { ...baseInteraction } as Interaction;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.targetType !== undefined && object.targetType !== null) {
      message.targetType = object.targetType;
    } else {
      message.targetType = 0;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    return message;
  },
  toJSON(message: Interaction): unknown {
    const obj: any = {};
    obj.type = InteractionType.toJSON(message.type);
    obj.targetType = InteractionTargetType.toJSON(message.targetType);
    obj.target = message.target || "";
    return obj;
  },
};

export const JourneyInteractionEvent = {
  fromJSON(object: any): JourneyInteractionEvent {
    const message = { ...baseJourneyInteractionEvent } as JourneyInteractionEvent;
    message.attributes = {};
    if (object.journey !== undefined && object.journey !== null) {
      message.journey = Journey.fromJSON(object.journey);
    } else {
      message.journey = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = 0;
    }
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
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = Interaction.fromJSON(object.interaction);
    } else {
      message.interaction = undefined;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = String(object.step);
    } else {
      message.step = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = String(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<JourneyInteractionEvent>): JourneyInteractionEvent {
    const message = { ...baseJourneyInteractionEvent } as JourneyInteractionEvent;
    message.attributes = {};
    if (object.journey !== undefined && object.journey !== null) {
      message.journey = Journey.fromPartial(object.journey);
    } else {
      message.journey = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = 0;
    }
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
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = Interaction.fromPartial(object.interaction);
    } else {
      message.interaction = undefined;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = object.step;
    } else {
      message.step = "";
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
  toJSON(message: JourneyInteractionEvent): unknown {
    const obj: any = {};
    obj.journey = message.journey ? Journey.toJSON(message.journey) : undefined;
    obj.channel = Channel.toJSON(message.channel);
    obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined;
    obj.application = message.application ? Application.toJSON(message.application) : undefined;
    obj.interaction = message.interaction ? Interaction.toJSON(message.interaction) : undefined;
    obj.step = message.step || "";
    obj.attributes = message.attributes || undefined;
    return obj;
  },
};

export const JourneyInteractionEvent_AttributesEntry = {
  fromJSON(object: any): JourneyInteractionEvent_AttributesEntry {
    const message = { ...baseJourneyInteractionEvent_AttributesEntry } as JourneyInteractionEvent_AttributesEntry;
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
  fromPartial(object: DeepPartial<JourneyInteractionEvent_AttributesEntry>): JourneyInteractionEvent_AttributesEntry {
    const message = { ...baseJourneyInteractionEvent_AttributesEntry } as JourneyInteractionEvent_AttributesEntry;
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
  toJSON(message: JourneyInteractionEvent_AttributesEntry): unknown {
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = 0;
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = 0;
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
    obj.channel = Channel.toJSON(message.channel);
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = 0;
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = 0;
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
    obj.channel = Channel.toJSON(message.channel);
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