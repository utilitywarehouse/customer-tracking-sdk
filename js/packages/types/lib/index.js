/* eslint-disable */
const baseAccount = {
    id: "",
    number: "",
};
const baseApplication = {
    id: "",
};
const basePerson = {};
const baseStageEvent = {
    subject: 0,
    intent: 0,
    stage: 0,
};
const baseStageEvent_AttributesEntry = {
    key: "",
    value: "",
};
const baseInteractionEvent = {
    subject: 0,
    intent: 0,
    interaction: 0,
    channel: 0,
};
const baseInteractionEvent_AttributesEntry = {
    key: "",
    value: "",
};
const baseVisitEvent = {
    location: "",
};
const baseVisitEvent_AttributesEntry = {
    key: "",
    value: "",
};
const baseClickEvent = {
    target: "",
};
const baseClickEvent_AttributesEntry = {
    key: "",
    value: "",
};
const Subject = {
    SUBJECT_NONE: 0,
    SUBJECT_METER_READING: 1,
    UNRECOGNIZED: -1,
    fromJSON(object) {
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
    toJSON(object) {
        switch (object) {
            case Subject.SUBJECT_NONE:
                return "SUBJECT_NONE";
            case Subject.SUBJECT_METER_READING:
                return "SUBJECT_METER_READING";
            default:
                return "UNKNOWN";
        }
    },
};
const Intent = {
    INTENT_NONE: 0,
    INTENT_METER_READING_SUBMIT: 1,
    UNRECOGNIZED: -1,
    fromJSON(object) {
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
    toJSON(object) {
        switch (object) {
            case Intent.INTENT_NONE:
                return "INTENT_NONE";
            case Intent.INTENT_METER_READING_SUBMIT:
                return "INTENT_METER_READING_SUBMIT";
            default:
                return "UNKNOWN";
        }
    },
};
const Stage = {
    STAGE_NONE: 0,
    STAGE_SUBMITTED: 1,
    STAGE_RECEIVED_REQUEST_FOR_AMEND: 2,
    STAGE_COMPLETED: 3,
    STAGE_REJECTED: 4,
    STAGE_ENTERED: 5,
    STAGE_STARTED: 6,
    STAGE_FAILED: 7,
    UNRECOGNIZED: -1,
    fromJSON(object) {
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
    toJSON(object) {
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
};
const Interaction = {
    INTERACTION_NONE: 0,
    INTERACTION_CLICKED: 1,
    INTERACTION_VIEWED: 2,
    UNRECOGNIZED: -1,
    fromJSON(object) {
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
    toJSON(object) {
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
};
const InteractionChannel = {
    INTERACTION_CHANNEL_NONE: 0,
    INTERACTION_CHANNEL_EMAIL: 1,
    INTERACTION_CHANNEL_WILLIAM: 2,
    UNRECOGNIZED: -1,
    fromJSON(object) {
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
    toJSON(object) {
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
};
const Account = {
    fromJSON(object) {
        const message = { ...baseAccount };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = String(object.number);
        }
        else {
            message.number = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseAccount };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        else {
            message.number = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.id = message.id || "";
        obj.number = message.number || "";
        return obj;
    },
};
const Application = {
    fromJSON(object) {
        const message = { ...baseApplication };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseApplication };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.id = message.id || "";
        return obj;
    },
};
const Person = {
    fromJSON(_) {
        const message = { ...basePerson };
        return message;
    },
    fromPartial(_) {
        const message = { ...basePerson };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
};
const StageEvent = {
    fromJSON(object) {
        const message = { ...baseStageEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromJSON(object.subject);
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = Intent.fromJSON(object.intent);
        }
        else {
            message.intent = 0;
        }
        if (object.stage !== undefined && object.stage !== null) {
            message.stage = Stage.fromJSON(object.stage);
        }
        else {
            message.stage = 0;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                message.attributes[key] = String(value);
            });
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseStageEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromPartial(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = object.intent;
        }
        else {
            message.intent = 0;
        }
        if (object.stage !== undefined && object.stage !== null) {
            message.stage = object.stage;
        }
        else {
            message.stage = 0;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.attributes[key] = String(value);
                }
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.account = message.account ? Account.toJSON(message.account) : undefined;
        obj.application = message.application ? Application.toJSON(message.application) : undefined;
        obj.subject = Subject.toJSON(message.subject);
        obj.intent = Intent.toJSON(message.intent);
        obj.stage = Stage.toJSON(message.stage);
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
const StageEvent_AttributesEntry = {
    fromJSON(object) {
        const message = { ...baseStageEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseStageEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.key = message.key || "";
        obj.value = message.value || "";
        return obj;
    },
};
const InteractionEvent = {
    fromJSON(object) {
        const message = { ...baseInteractionEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = Subject.fromJSON(object.subject);
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = Intent.fromJSON(object.intent);
        }
        else {
            message.intent = 0;
        }
        if (object.interaction !== undefined && object.interaction !== null) {
            message.interaction = Interaction.fromJSON(object.interaction);
        }
        else {
            message.interaction = 0;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = InteractionChannel.fromJSON(object.channel);
        }
        else {
            message.channel = 0;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                message.attributes[key] = String(value);
            });
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseInteractionEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromPartial(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = object.intent;
        }
        else {
            message.intent = 0;
        }
        if (object.interaction !== undefined && object.interaction !== null) {
            message.interaction = object.interaction;
        }
        else {
            message.interaction = 0;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        else {
            message.channel = 0;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.attributes[key] = String(value);
                }
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
const InteractionEvent_AttributesEntry = {
    fromJSON(object) {
        const message = { ...baseInteractionEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseInteractionEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.key = message.key || "";
        obj.value = message.value || "";
        return obj;
    },
};
const VisitEvent = {
    fromJSON(object) {
        const message = { ...baseVisitEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = String(object.location);
        }
        else {
            message.location = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                message.attributes[key] = String(value);
            });
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseVisitEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromPartial(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        else {
            message.location = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.attributes[key] = String(value);
                }
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.account = message.account ? Account.toJSON(message.account) : undefined;
        obj.application = message.application ? Application.toJSON(message.application) : undefined;
        obj.location = message.location || "";
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
const VisitEvent_AttributesEntry = {
    fromJSON(object) {
        const message = { ...baseVisitEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseVisitEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.key = message.key || "";
        obj.value = message.value || "";
        return obj;
    },
};
const ClickEvent = {
    fromJSON(object) {
        const message = { ...baseClickEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = String(object.target);
        }
        else {
            message.target = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                message.attributes[key] = String(value);
            });
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseClickEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = Application.fromPartial(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target;
        }
        else {
            message.target = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.attributes[key] = String(value);
                }
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.account = message.account ? Account.toJSON(message.account) : undefined;
        obj.application = message.application ? Application.toJSON(message.application) : undefined;
        obj.target = message.target || "";
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
const ClickEvent_AttributesEntry = {
    fromJSON(object) {
        const message = { ...baseClickEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseClickEvent_AttributesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.key = message.key || "";
        obj.value = message.value || "";
        return obj;
    },
};

export { Account, Application, ClickEvent, ClickEvent_AttributesEntry, Intent, Interaction, InteractionChannel, InteractionEvent, InteractionEvent_AttributesEntry, Person, Stage, StageEvent, StageEvent_AttributesEntry, Subject, VisitEvent, VisitEvent_AttributesEntry };
