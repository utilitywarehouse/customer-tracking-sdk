"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
const customer_tracking_types_1 = require("@utilitywarehouse/customer-tracking-types");
const events_1 = require("events");
class Tracker {
    constructor(backend) {
        this.backend = backend;
        this.emitter = new events_1.EventEmitter();
    }
    stageValue(m) {
        return customer_tracking_types_1.Stage.toJSON(m)
            .toLowerCase()
            .replace(/^stage_/, "")
            .replace(/[^a-z]/g, "-");
    }
    subjectValue(m) {
        return customer_tracking_types_1.Subject.toJSON(m)
            .toLowerCase()
            .replace(/^subject_/, "")
            .replace(/[^a-z]/g, "-");
    }
    intentValue(m) {
        return customer_tracking_types_1.Intent.toJSON(m)
            .toLowerCase()
            .replace(/^intent_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionValue(m) {
        return customer_tracking_types_1.Interaction.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionChannelValue(m) {
        return customer_tracking_types_1.InteractionChannel.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_channel_/, "")
            .replace(/[^a-z]/g, "-");
    }
    stageEventName(event) {
        return this.stageValue(event.stage) + "." + this.intentValue(event.intent);
    }
    interactionEventName(event) {
        return this.interactionChannelValue(event.channel) + "." + this.interactionValue(event.interaction);
    }
    attributes(attributes) {
        const mapped = {};
        for (const k in attributes) {
            mapped[k.toLowerCase().replace(/[^a-z]/g, "_")] = attributes[k];
        }
        return mapped;
    }
    onError(fn) {
        this.emitter.on("error", fn);
    }
    trackStage(inEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = {
                    account: inEvent.account,
                    application: inEvent.application,
                    subject: inEvent.subject,
                    intent: inEvent.intent,
                    stage: inEvent.stage,
                    attributes: inEvent.attributes && (yield inEvent.attributes) || {},
                };
                return this.backend.track(this.stageEventName(event), Object.assign({ account_number: event.account && event.account.number || "", client_id: event.application && event.application.id || "", subject: this.subjectValue(event.subject), intent: this.intentValue(event.intent), stage: this.stageValue(event.stage) }, this.attributes(event.attributes)));
            }
            catch (e) {
                this.emitter.emit("error", e);
            }
        });
    }
    trackInteraction(inEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = {
                    account: inEvent.account,
                    application: inEvent.application,
                    subject: inEvent.subject,
                    intent: inEvent.intent,
                    interaction: inEvent.interaction,
                    channel: inEvent.channel,
                    attributes: inEvent.attributes && (yield inEvent.attributes) || {},
                };
                return this.backend.track(this.interactionEventName(event), Object.assign({ account_number: event.account && event.account.number || "", client_id: event.application && event.application.id || "", subject: this.subjectValue(event.subject), intent: this.intentValue(event.intent), interaction: this.interactionValue(event.interaction), interaction_channel: this.interactionChannelValue(event.channel) }, this.attributes(event.attributes)));
            }
            catch (e) {
                this.emitter.emit("error", e);
            }
        });
    }
    trackClick(inEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = {
                    account: inEvent.account,
                    application: inEvent.application,
                    target: inEvent.target,
                    attributes: inEvent.attributes && (yield inEvent.attributes) || {},
                };
                return this.backend.track("click", Object.assign({ account_number: event.account && event.account.number || "", client_id: event.application && event.application.id || "", target: event.target }, this.attributes(event.attributes)));
            }
            catch (e) {
                this.emitter.emit("error", e);
            }
        });
    }
    trackVisit(inEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = {
                    account: inEvent.account,
                    application: inEvent.application,
                    location: inEvent.location,
                    attributes: inEvent.attributes && (yield inEvent.attributes) || {},
                };
                return this.backend.track("visit", Object.assign({ account_number: event.account && event.account.number || "", client_id: event.application && event.application.id || "", location: event.location }, this.attributes(event.attributes)));
            }
            catch (e) {
                this.emitter.emit("error", e);
            }
        });
    }
}
exports.Tracker = Tracker;
