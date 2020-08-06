import { UIBackend } from "@utilitywarehouse/customer-tracking-core";
import { Account } from "@utilitywarehouse/customer-tracking-types";
export declare class MixpanelBackend implements UIBackend {
    constructor(token: string, options?: {
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
