export { UITracker as Tracker } from '@utilitywarehouse/customer-tracking-core';
export * from '@utilitywarehouse/customer-tracking-types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mixpanel = require("mixpanel-browser");
function isMixpanelResponse(response) {
    return response.status !== undefined;
}
class MixpanelBackend {
    constructor(token, options) {
        mixpanel.init(token, {
            api_host: "https://api-eu.mixpanel.com",
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
                if (isMixpanelResponse(response)) {
                    if (response.status && response.status === 1) {
                        resolve();
                        return;
                    }
                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }
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

export { MixpanelBackend };
