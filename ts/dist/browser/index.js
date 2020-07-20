"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
const tracker_1 = require("../tracker");
class Tracker {
    constructor(backend, application) {
        this.backend = backend;
        this.application = application;
        this.baseTracker = new tracker_1.Tracker(backend);
    }
    async identify(account) {
        this.account = account;
        return this.backend.identify(account);
    }
    async reset() {
        return this.backend.reset();
    }
    async disable() {
        return this.backend.disable();
    }
    async enable() {
        return this.backend.enable();
    }
    async trackStage(subject, intent, stage, attributes = {}) {
        return this.baseTracker.trackStage(this.account, this.application, subject, intent, stage, attributes);
    }
    async trackInteraction(subject, intent, interaction, channel, attributes = {}) {
        return this.baseTracker.trackInteraction(this.account, this.application, subject, intent, interaction, channel, attributes);
    }
    async trackClick(target, attributes = {}) {
        return this.baseTracker.trackClick(this.account, this.application, target, attributes);
    }
    async trackVisit(location, attributes = {}) {
        return this.baseTracker.trackVisit(this.account, this.application, location, attributes);
    }
}
exports.Tracker = Tracker;
