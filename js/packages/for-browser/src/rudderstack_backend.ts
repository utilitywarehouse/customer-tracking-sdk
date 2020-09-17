import {UIBackend} from "@utilitywarehouse/customer-tracking-core";
import {Actor} from "@utilitywarehouse/customer-tracking-types";
import * as rudderanalytics from "rudder-sdk-js"

export class RudderstackBackend implements UIBackend {
    disabled: boolean = false
    constructor(token: string, options?: {[k: string]: string | number}) {
        rudderanalytics.load(token, options["dataPlaneUrl"] as string, optionsthis.disabled = false
    }

    alias(from: string, to: string): Promise<void> {
        if (this.disabled) {
            return Promise.resolve()
        }
        return new Promise((res, rej) => {
            rudderanalytics.alias(to, from, undefined, (err) => {
                if (err) {
                    rej(err)
                    return
                }
                res()
            })
        })
    }

    track(eventName: string, distinctId?: string, eventAttributes?: { [p: string]: string }): Promise<void> {
        if (this.disabled) {
            return Promise.resolve()
        }
        return new Promise((res, rej) => {

            const filteredAttributes: { [p: string]: string } = {};

            for (const key in eventAttributes) {
                if (eventAttributes[key]) {
                    filteredAttributes[key] = eventAttributes[key];
                }
            }

            rudderanalytics.track(eventName, filteredAttributes, undefined,(err) => {
                if (err) {
                    rej(err)
                    return
                }
                res()
            })
        })
    }

    disable(): Promise<void> {
        this.disabled = true
        return Promise.resolve()
    }

    enable(): Promise<void> {
        this.disabled = false
        return Promise.resolve()
    }

    identify(actor: Actor): Promise<void> {
        if (this.disabled) {
            return Promise.resolve()
        }
        return new Promise((res, rej) => {
            rudderanalytics.identify(actor.id, actor.ttributes, undefined, (err) => {
                if (err) {
                    rej(err)
                    return
                }
                res()
            });
        })
    }

    reset(): Promise<void> {
        return Promise.resolve(rudderanalytics.reset())
    }
}