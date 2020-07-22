// eslint-disable-next-line @typescript-eslint/no-var-requires
const mixpanel = require("mixpanel-browser");
import {UIBackend, Account} from "@utilitywarehouse/customer-tracking-core";

export class MixpanelBackend implements UIBackend {
    constructor(token: string, options: {[k: string]: any}) {
        mixpanel.init(token, {
            api_host: "api-eu.mixpanel.com", // EU by default
            ...options,
        });
    }

    track(eventName: string, eventAttributes: { [p: string]: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            mixpanel.track(eventName, eventAttributes, (response: any) => {

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
                return
            })
        })
    }

    disable(): Promise<void> {
        return Promise.resolve(mixpanel.opt_out_tracking())
    }

    enable(): Promise<void> {
        return Promise.resolve(mixpanel.opt_in_tracking());
    }

    identify(account: Account): Promise<void> {
        return Promise.resolve(mixpanel.identify(account.number));
    }

    reset(): Promise<void> {
        return Promise.resolve(mixpanel.reset());
    }

}