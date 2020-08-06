import { Backend } from "./backend";
import { Account } from "@utilitywarehouse/customer-tracking-types";
export interface UIBackend extends Backend {
    enable(): Promise<void>;
    disable(): Promise<void>;
    identify(account: Account): Promise<void>;
    reset(): Promise<void>;
}
