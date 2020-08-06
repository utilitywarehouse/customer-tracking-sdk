// eslint-disable-next-line @typescript-eslint/no-var-requires
import mixpanel, {Response, VerboseResponse} from "mixpanel-browser";
import {UIBackend} from "@utilitywarehouse/customer-tracking-core";
import {Account} from "@utilitywarehouse/customer-tracking-types";

function isMixpanelVerboseResponse(response: Response | number): response is VerboseResponse {
    return (response as VerboseResponse).status !== undefined;
}

export class MixpanelBackend implements UIBackend {
    constructor(token: string, options?: {[k: string]: string | number}) {
        mixpanel.init(token, {
            api_host: "https://api-eu.mixpanel.com", // EU by default
            ...options,
        });
    }

    track(eventName: string, eventAttributes: { [p: string]: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            mixpanel.track(eventName, eventAttributes, (response: Response | number) => {
                if ((response as number) === 1) {
                    resolve();
                    return;
                }

                if (isMixpanelVerboseResponse(response)) {
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