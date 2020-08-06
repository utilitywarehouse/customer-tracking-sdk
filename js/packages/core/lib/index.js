import { Stage, Subject, Intent, Interaction, InteractionChannel } from '@utilitywarehouse/customer-tracking-types';
import { EventEmitter } from 'events';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

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

class UITracker {
    constructor(backend, application) {
        this.backend = backend;
        this.application = application;
        this.baseTracker = new Tracker(backend);
    }
    onError(fn) {
        this.baseTracker.onError(fn);
    }
    identify(account) {
        return __awaiter(this, void 0, void 0, function* () {
            this.account = account;
            return this.backend.identify(account);
        });
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            this.account = { id: "", number: "" };
            return this.backend.reset();
        });
    }
    disable() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.backend.disable();
        });
    }
    enable() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.backend.enable();
        });
    }
    trackStage(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.baseTracker.trackStage(Object.assign({ account: this.account, application: this.application }, event));
        });
    }
    trackInteraction(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.baseTracker.trackInteraction(Object.assign({ account: this.account, application: this.application }, event));
        });
    }
    trackClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.baseTracker.trackClick(Object.assign({ account: this.account, application: this.application }, event));
        });
    }
    trackVisit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.baseTracker.trackVisit(Object.assign({ account: this.account, application: this.application }, event));
        });
    }
}

export { Tracker, UITracker };
