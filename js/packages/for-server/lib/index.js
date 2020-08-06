export { Tracker } from '@utilitywarehouse/customer-tracking-core';
export * from '@utilitywarehouse/customer-tracking-types';
import { init } from 'mixpanel';

class MixpanelBackend {
    constructor(apiKey, config) {
        this.mixpanel = init(apiKey, {
            api_host: "https://api-eu.mixpanel.com",
            ...config
        });
    }
    track(eventName, eventAttributes) {
        return new Promise((resolve, reject) => {
            this.mixpanel.track(eventName, eventAttributes, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
}

export { MixpanelBackend };
