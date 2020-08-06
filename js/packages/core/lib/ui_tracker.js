"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UITracker = void 0;
const tracker_1 = require("./tracker");
class UITracker {
    constructor(backend, application) {
        this.backend = backend;
        this.application = application;
        this.baseTracker = new tracker_1.Tracker(backend);
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
exports.UITracker = UITracker;
