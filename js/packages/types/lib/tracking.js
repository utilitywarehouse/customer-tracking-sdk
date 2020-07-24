"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent_AttributesEntry = exports.ClickEvent = exports.VisitEvent_AttributesEntry = exports.VisitEvent = exports.InteractionEvent_AttributesEntry = exports.InteractionEvent = exports.StageEvent_AttributesEntry = exports.StageEvent = exports.Person = exports.Application = exports.Account = exports.InteractionChannel = exports.Interaction = exports.Stage = exports.Intent = exports.Subject = void 0;
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
exports.Subject = {
    SUBJECT_NONE: 0,
    SUBJECT_METER_READING: 1,
    UNRECOGNIZED: -1,
    fromJSON(object) {
        switch (object) {
            case 0:
            case "SUBJECT_NONE":
                return exports.Subject.SUBJECT_NONE;
            case 1:
            case "SUBJECT_METER_READING":
                return exports.Subject.SUBJECT_METER_READING;
            case -1:
            case "UNRECOGNIZED":
            default:
                return exports.Subject.UNRECOGNIZED;
        }
    },
    toJSON(object) {
        switch (object) {
            case exports.Subject.SUBJECT_NONE:
                return "SUBJECT_NONE";
            case exports.Subject.SUBJECT_METER_READING:
                return "SUBJECT_METER_READING";
            default:
                return "UNKNOWN";
        }
    },
};
exports.Intent = {
    INTENT_NONE: 0,
    INTENT_METER_READING_SUBMIT: 1,
    UNRECOGNIZED: -1,
    fromJSON(object) {
        switch (object) {
            case 0:
            case "INTENT_NONE":
                return exports.Intent.INTENT_NONE;
            case 1:
            case "INTENT_METER_READING_SUBMIT":
                return exports.Intent.INTENT_METER_READING_SUBMIT;
            case -1:
            case "UNRECOGNIZED":
            default:
                return exports.Intent.UNRECOGNIZED;
        }
    },
    toJSON(object) {
        switch (object) {
            case exports.Intent.INTENT_NONE:
                return "INTENT_NONE";
            case exports.Intent.INTENT_METER_READING_SUBMIT:
                return "INTENT_METER_READING_SUBMIT";
            default:
                return "UNKNOWN";
        }
    },
};
exports.Stage = {
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
                return exports.Stage.STAGE_NONE;
            case 1:
            case "STAGE_SUBMITTED":
                return exports.Stage.STAGE_SUBMITTED;
            case 2:
            case "STAGE_RECEIVED_REQUEST_FOR_AMEND":
                return exports.Stage.STAGE_RECEIVED_REQUEST_FOR_AMEND;
            case 3:
            case "STAGE_COMPLETED":
                return exports.Stage.STAGE_COMPLETED;
            case 4:
            case "STAGE_REJECTED":
                return exports.Stage.STAGE_REJECTED;
            case 5:
            case "STAGE_ENTERED":
                return exports.Stage.STAGE_ENTERED;
            case 6:
            case "STAGE_STARTED":
                return exports.Stage.STAGE_STARTED;
            case 7:
            case "STAGE_FAILED":
                return exports.Stage.STAGE_FAILED;
            case -1:
            case "UNRECOGNIZED":
            default:
                return exports.Stage.UNRECOGNIZED;
        }
    },
    toJSON(object) {
        switch (object) {
            case exports.Stage.STAGE_NONE:
                return "STAGE_NONE";
            case exports.Stage.STAGE_SUBMITTED:
                return "STAGE_SUBMITTED";
            case exports.Stage.STAGE_RECEIVED_REQUEST_FOR_AMEND:
                return "STAGE_RECEIVED_REQUEST_FOR_AMEND";
            case exports.Stage.STAGE_COMPLETED:
                return "STAGE_COMPLETED";
            case exports.Stage.STAGE_REJECTED:
                return "STAGE_REJECTED";
            case exports.Stage.STAGE_ENTERED:
                return "STAGE_ENTERED";
            case exports.Stage.STAGE_STARTED:
                return "STAGE_STARTED";
            case exports.Stage.STAGE_FAILED:
                return "STAGE_FAILED";
            default:
                return "UNKNOWN";
        }
    },
};
exports.Interaction = {
    INTERACTION_NONE: 0,
    INTERACTION_CLICKED: 1,
    INTERACTION_VIEWED: 2,
    UNRECOGNIZED: -1,
    fromJSON(object) {
        switch (object) {
            case 0:
            case "INTERACTION_NONE":
                return exports.Interaction.INTERACTION_NONE;
            case 1:
            case "INTERACTION_CLICKED":
                return exports.Interaction.INTERACTION_CLICKED;
            case 2:
            case "INTERACTION_VIEWED":
                return exports.Interaction.INTERACTION_VIEWED;
            case -1:
            case "UNRECOGNIZED":
            default:
                return exports.Interaction.UNRECOGNIZED;
        }
    },
    toJSON(object) {
        switch (object) {
            case exports.Interaction.INTERACTION_NONE:
                return "INTERACTION_NONE";
            case exports.Interaction.INTERACTION_CLICKED:
                return "INTERACTION_CLICKED";
            case exports.Interaction.INTERACTION_VIEWED:
                return "INTERACTION_VIEWED";
            default:
                return "UNKNOWN";
        }
    },
};
exports.InteractionChannel = {
    INTERACTION_CHANNEL_NONE: 0,
    INTERACTION_CHANNEL_EMAIL: 1,
    INTERACTION_CHANNEL_WILLIAM: 2,
    UNRECOGNIZED: -1,
    fromJSON(object) {
        switch (object) {
            case 0:
            case "INTERACTION_CHANNEL_NONE":
                return exports.InteractionChannel.INTERACTION_CHANNEL_NONE;
            case 1:
            case "INTERACTION_CHANNEL_EMAIL":
                return exports.InteractionChannel.INTERACTION_CHANNEL_EMAIL;
            case 2:
            case "INTERACTION_CHANNEL_WILLIAM":
                return exports.InteractionChannel.INTERACTION_CHANNEL_WILLIAM;
            case -1:
            case "UNRECOGNIZED":
            default:
                return exports.InteractionChannel.UNRECOGNIZED;
        }
    },
    toJSON(object) {
        switch (object) {
            case exports.InteractionChannel.INTERACTION_CHANNEL_NONE:
                return "INTERACTION_CHANNEL_NONE";
            case exports.InteractionChannel.INTERACTION_CHANNEL_EMAIL:
                return "INTERACTION_CHANNEL_EMAIL";
            case exports.InteractionChannel.INTERACTION_CHANNEL_WILLIAM:
                return "INTERACTION_CHANNEL_WILLIAM";
            default:
                return "UNKNOWN";
        }
    },
};
exports.Account = {
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
exports.Application = {
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
exports.Person = {
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
exports.StageEvent = {
    fromJSON(object) {
        const message = { ...baseStageEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = exports.Subject.fromJSON(object.subject);
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = exports.Intent.fromJSON(object.intent);
        }
        else {
            message.intent = 0;
        }
        if (object.stage !== undefined && object.stage !== null) {
            message.stage = exports.Stage.fromJSON(object.stage);
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
            message.account = exports.Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromPartial(object.application);
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
        obj.account = message.account ? exports.Account.toJSON(message.account) : undefined;
        obj.application = message.application ? exports.Application.toJSON(message.application) : undefined;
        obj.subject = exports.Subject.toJSON(message.subject);
        obj.intent = exports.Intent.toJSON(message.intent);
        obj.stage = exports.Stage.toJSON(message.stage);
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
exports.StageEvent_AttributesEntry = {
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
exports.InteractionEvent = {
    fromJSON(object) {
        const message = { ...baseInteractionEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromJSON(object.application);
        }
        else {
            message.application = undefined;
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = exports.Subject.fromJSON(object.subject);
        }
        else {
            message.subject = 0;
        }
        if (object.intent !== undefined && object.intent !== null) {
            message.intent = exports.Intent.fromJSON(object.intent);
        }
        else {
            message.intent = 0;
        }
        if (object.interaction !== undefined && object.interaction !== null) {
            message.interaction = exports.Interaction.fromJSON(object.interaction);
        }
        else {
            message.interaction = 0;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = exports.InteractionChannel.fromJSON(object.channel);
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
            message.account = exports.Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromPartial(object.application);
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
        obj.account = message.account ? exports.Account.toJSON(message.account) : undefined;
        obj.application = message.application ? exports.Application.toJSON(message.application) : undefined;
        obj.subject = exports.Subject.toJSON(message.subject);
        obj.intent = exports.Intent.toJSON(message.intent);
        obj.interaction = exports.Interaction.toJSON(message.interaction);
        obj.channel = exports.InteractionChannel.toJSON(message.channel);
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
exports.InteractionEvent_AttributesEntry = {
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
exports.VisitEvent = {
    fromJSON(object) {
        const message = { ...baseVisitEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromJSON(object.application);
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
            message.account = exports.Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromPartial(object.application);
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
        obj.account = message.account ? exports.Account.toJSON(message.account) : undefined;
        obj.application = message.application ? exports.Application.toJSON(message.application) : undefined;
        obj.location = message.location || "";
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
exports.VisitEvent_AttributesEntry = {
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
exports.ClickEvent = {
    fromJSON(object) {
        const message = { ...baseClickEvent };
        message.attributes = {};
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.Account.fromJSON(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromJSON(object.application);
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
            message.account = exports.Account.fromPartial(object.account);
        }
        else {
            message.account = undefined;
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = exports.Application.fromPartial(object.application);
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
        obj.account = message.account ? exports.Account.toJSON(message.account) : undefined;
        obj.application = message.application ? exports.Application.toJSON(message.application) : undefined;
        obj.target = message.target || "";
        obj.attributes = message.attributes || undefined;
        return obj;
    },
};
exports.ClickEvent_AttributesEntry = {
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
