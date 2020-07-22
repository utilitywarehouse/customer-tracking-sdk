import {Backend} from "./backend";
import {Account} from "./generated/tracking";

export interface UIBackend extends Backend {
    enable(): Promise<void>
    disable(): Promise<void>
    identify(account: Account): Promise<void>
    reset(): Promise<void>
}