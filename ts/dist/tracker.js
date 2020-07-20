"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
const tracking_1 = require("./generated/tracking");
const events_1 = require("events");
class Tracker {
    constructor(backend) {
        this.backend = backend;
        this.emitter = new events_1.EventEmitter();
    }
    stageValue(m) {
        return tracking_1.Stage.toJSON(m)
            .toLowerCase()
            .replace(/^stage_/, "")
            .replace(/[^a-z]/g, "-");
    }
    subjectValue(m) {
        return tracking_1.Subject.toJSON(m)
            .toLowerCase()
            .replace(/^subject_/, "")
            .replace(/[^a-z]/g, "-");
    }
    intentValue(m) {
        return tracking_1.Intent.toJSON(m)
            .toLowerCase()
            .replace(/^intent_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionValue(m) {
        return tracking_1.Interaction.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionChannelValue(m) {
        return tracking_1.InteractionChannel.toJSON(m)
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
    async trackStage(account, application, subject, intent, stage, attributes = {}) {
        try {
            const event = {
                account,
                application,
                subject,
                intent,
                stage,
                attributes: await attributes,
            };
            return this.backend.track(this.stageEventName(event), {
                account_number: account.number,
                client_id: application.id,
                subject: this.subjectValue(event.subject),
                intent: this.intentValue(event.intent),
                stage: this.stageValue(event.stage),
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
    async trackInteraction(account, application, subject, intent, interaction, channel, attributes = {}) {
        try {
            const event = {
                account,
                application,
                subject,
                intent,
                interaction,
                channel,
                attributes: await attributes,
            };
            return this.backend.track(this.interactionEventName(event), {
                account_number: account.number,
                client_id: application.id,
                subject: this.subjectValue(event.subject),
                intent: this.intentValue(event.intent),
                interaction: this.interactionValue(event.interaction),
                interaction_channel: this.interactionChannelValue(event.channel),
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
    async trackClick(account, application, target, attributes = {}) {
        try {
            const event = {
                account,
                application,
                target,
                attributes: await attributes,
            };
            return this.backend.track("click", {
                account_number: account.number,
                client_id: application.id,
                target,
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
    async trackVisit(account, application, location, attributes = {}) {
        try {
            const event = {
                account,
                application,
                location,
                attributes: await attributes,
            };
            return this.backend.track("visit", {
                account_number: account.number,
                client_id: application.id,
                location,
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
}
exports.Tracker = Tracker;
