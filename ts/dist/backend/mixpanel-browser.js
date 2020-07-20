"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixpanelBrowserBackend = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mixpanel = require("mixpanel-browser");
class MixpanelBrowserBackend {
    constructor(token, options) {
        mixpanel.init(token, {
            api_host: "api-eu.mixpanel.com",
            ...options,
        });
    }
    track(eventName, eventAttributes) {
        return new Promise((resolve, reject) => {
            mixpanel.track(eventName, eventAttributes, (response) => {
                if (response === 1) {
                    resolve();
                    return;
                }
                if (response.status && response.status === 1) {
                    resolve();
                    return;
                }
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }
                reject(new Error("mixpanel response unsuccessful"));
                return;
            });
        });
    }
    disable() {
        return Promise.resolve(mixpanel.opt_out_tracking());
    }
    enable() {
        return Promise.resolve(mixpanel.opt_in_tracking());
    }
    identify(account) {
        return Promise.resolve(mixpanel.identify(account.number));
    }
    reset() {
        return Promise.resolve(mixpanel.reset());
    }
}
exports.MixpanelBrowserBackend = MixpanelBrowserBackend;
