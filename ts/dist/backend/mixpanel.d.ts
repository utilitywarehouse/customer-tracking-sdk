import { Backend } from "../backend";
import * as mixpanel from "mixpanel";
export declare class MixpanelBackend implements Backend {
    private mixpanel;
    constructor(apiKey: string, config: mixpanel.InitConfig);
    track(eventName: string, eventAttributes: {
        [p: string]: string;
    }): Promise<void>;
}