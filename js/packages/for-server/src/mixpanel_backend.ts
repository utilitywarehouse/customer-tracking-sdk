import {Backend} from "@utilitywarehouse/customer-tracking-core";
import * as mixpanel from "mixpanel";

export class MixpanelBackend implements Backend {
    private mixpanel: mixpanel.Mixpanel;
    constructor(apiKey: string, config?: mixpanel.InitConfig) {
        this.mixpanel = mixpanel.init(apiKey, {
            host: "api-eu.mixpanel.com", // EU by default
            ...config
        });
    }

    alias(from: string, to: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.mixpanel.alias(from, to, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }

    track(eventName: string, distinctId?: string, eventAttributes?: { [p: string]: string }): Promise<void> {

        const filteredAttributes: { [p: string]: string } = {};

        for (const key in eventAttributes) {
            if (eventAttributes[key]) {
                filteredAttributes[key] = eventAttributes[key];
            }
        }

        if (distinctId) {
            filteredAttributes['distinct_id'] = distinctId;
        }

        return new Promise((resolve, reject) => {
            this.mixpanel.track(eventName, filteredAttributes, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }
}
