import { Stage, Subject, Intent, Interaction, InteractionChannel } from '@utilitywarehouse/customer-tracking-types';
import { EventEmitter } from 'events';

class Tracker {
    constructor(backend) {
        this.backend = backend;
        this.emitter = new EventEmitter();
    }
    stageValue(m) {
        return Stage.toJSON(m)
            .toLowerCase()
            .replace(/^stage_/, "")
            .replace(/[^a-z]/g, "-");
    }
    subjectValue(m) {
        return Subject.toJSON(m)
            .toLowerCase()
            .replace(/^subject_/, "")
            .replace(/[^a-z]/g, "-");
    }
    intentValue(m) {
        return Intent.toJSON(m)
            .toLowerCase()
            .replace(/^intent_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionValue(m) {
        return Interaction.toJSON(m)
            .toLowerCase()
            .replace(/^interaction_/, "")
            .replace(/[^a-z]/g, "-");
    }
    interactionChannelValue(m) {
        return InteractionChannel.toJSON(m)
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
    async trackStage(inEvent) {
        try {
            const event = {
                account: inEvent.account,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                stage: inEvent.stage,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            };
            return this.backend.track(this.stageEventName(event), {
                account_number: event.account && event.account.number || "",
                client_id: event.application && event.application.id || "",
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
    async trackInteraction(inEvent) {
        try {
            const event = {
                account: inEvent.account,
                application: inEvent.application,
                subject: inEvent.subject,
                intent: inEvent.intent,
                interaction: inEvent.interaction,
                channel: inEvent.channel,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            };
            return this.backend.track(this.interactionEventName(event), {
                account_number: event.account && event.account.number || "",
                client_id: event.application && event.application.id || "",
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
    async trackClick(inEvent) {
        try {
            const event = {
                account: inEvent.account,
                application: inEvent.application,
                target: inEvent.target,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            };
            return this.backend.track("click", {
                account_number: event.account && event.account.number || "",
                client_id: event.application && event.application.id || "",
                target: event.target,
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
    async trackVisit(inEvent) {
        try {
            const event = {
                account: inEvent.account,
                application: inEvent.application,
                location: inEvent.location,
                attributes: inEvent.attributes && await inEvent.attributes || {},
            };
            return this.backend.track("visit", {
                account_number: event.account && event.account.number || "",
                client_id: event.application && event.application.id || "",
                location: event.location,
                ...this.attributes(event.attributes),
            });
        }
        catch (e) {
            this.emitter.emit("error", e);
        }
    }
}

class UITracker {
    constructor(backend, application) {
        this.backend = backend;
        this.application = application;
        this.baseTracker = new Tracker(backend);
    }
    onError(fn) {
        this.baseTracker.onError(fn);
    }
    async identify(account) {
        this.account = account;
        return this.backend.identify(account);
    }
    async reset() {
        this.account = { id: "", number: "" };
        return this.backend.reset();
    }
    async disable() {
        return this.backend.disable();
    }
    async enable() {
        return this.backend.enable();
    }
    async trackStage(event) {
        return this.baseTracker.trackStage({
            account: this.account,
            application: this.application,
            ...event
        });
    }
    async trackInteraction(event) {
        return this.baseTracker.trackInteraction({
            account: this.account,
            application: this.application,
            ...event
        });
    }
    async trackClick(event) {
        return this.baseTracker.trackClick({
            account: this.account,
            application: this.application,
            ...event
        });
    }
    async trackVisit(event) {
        return this.baseTracker.trackVisit({
            account: this.account,
            application: this.application,
            ...event
        });
    }
}

export { Tracker, UITracker };
