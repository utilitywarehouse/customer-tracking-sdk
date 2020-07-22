import { UIBackend, Account } from "@utilitywarehouse/customer-tracking-core";
export declare class MixpanelBackend implements UIBackend {
    constructor(token: string, options: {
        [k: string]: string | number;
    });
    track(eventName: string, eventAttributes: {
        [p: string]: string;
    }): Promise<void>;
    disable(): Promise<void>;
    enable(): Promise<void>;
    identify(account: Account): Promise<void>;
    reset(): Promise<void>;
}
