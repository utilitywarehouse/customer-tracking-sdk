import {Backend} from "./backend";
import {Actor} from "@utilitywarehouse/customer-tracking-types";

export interface UIBackend extends Backend {
    enable(): Promise<void>
    disable(): Promise<void>
    identify(actor: Actor): Promise<void>
    reset(): Promise<void>
}