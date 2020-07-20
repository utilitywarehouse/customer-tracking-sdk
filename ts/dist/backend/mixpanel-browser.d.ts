import { BrowserBackend } from "../browser_backend";
import { Account } from "../generated/tracking";
export declare class MixpanelBrowserBackend implements BrowserBackend {
    constructor(token: string, options: {
        [k: string]: any;
    });
    track(eventName: string, eventAttributes: {
        [p: string]: string;
    }): Promise<void>;
    disable(): Promise<void>;
    enable(): Promise<void>;
    identify(account: Account): Promise<void>;
    reset(): Promise<void>;
}
