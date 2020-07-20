import {Backend} from "../backend";
import * as mixpanel from "mixpanel";

export class MixpanelBackend implements Backend {
    private mixpanel: mixpanel.Mixpanel;
    constructor(apiKey: string, config: mixpanel.InitConfig) {
        this.mixpanel = mixpanel.init(apiKey, {
            api_host: "api-eu.mixpanel.com", // EU by default
            ...config
        });
    }
    track(eventName: string, eventAttributes: { [p: string]: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            mixpanel.track(eventName, eventAttributes, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }
}