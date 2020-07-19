

import * as mixpanel from "mixpanel-browser";
import {BrowserBackend} from "../browser_backend";
import {Account} from "../../generated/tracking";

export class MixpanelBrowserBackend implements BrowserBackend {
    constructor(token: string, options?: mixpanel.Config | null) {
        mixpanel.init(token, options);
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