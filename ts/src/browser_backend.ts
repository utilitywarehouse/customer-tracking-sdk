import {Backend} from "./backend";
import {Account} from "../generated/tracking";

export interface BrowserBackend extends Backend {
    enable(): Promise<void>
    disable(): Promise<void>
    identify(account: Account): Promise<void>
    reset(): Promise<void>
}