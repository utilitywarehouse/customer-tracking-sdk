import {Backend} from "@utilitywarehouse/customer-tracking-core";
import * as mixpanel from "mixpanel";

export class MixpanelBackend implements Backend {
    private mixpanel: mixpanel.Mixpanel;
    constructor(apiKey: string, config?: mixpanel.InitConfig) {
        this.mixpanel = mixpanel.init(apiKey, {
            api_host: "https://api-eu.mixpanel.com", // EU by default
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

    track(eventName: string, eventAttributes: { [p: string]: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.mixpanel.track(eventName, eventAttributes, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }
}