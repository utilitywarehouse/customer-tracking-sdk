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
    identify(account) {
        return __awaiter(this, void 0, void 0, function* () {
            this.account = account;
            return this.backend.identify(account);
        });
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
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
exports.UITracker = UITracker;
