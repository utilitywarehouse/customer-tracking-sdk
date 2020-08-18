import Mixpanel from "react-native-mixpanel"
import { UIBackend } from "@utilitywarehouse/customer-tracking-core"
import { Actor } from "@utilitywarehouse/customer-tracking-types"

export class MixpanelBackend implements UIBackend {
    constructor(token: string, options: {[k: string]: string | number | boolean} = {}) {
        const {
            optOutTrackingByDefault,
            trackCrashes,
            automaticPushTracking,
            launchOptions,
        } = options
        Mixpanel.sharedInstanceWithToken(
            token, 
            optOutTrackingByDefault == undefined ? undefined : !!optOutTrackingByDefault,
            trackCrashes == undefined ? undefined : !!trackCrashes,
            automaticPushTracking == undefined ? undefined : !!automaticPushTracking,
            launchOptions
        )
    }

    alias(from: string, to: string): Promise<void> {
        return Promise.resolve(Mixpanel.createAlias(from, to))
    }

    track(eventName: string, distinctId?: string, eventAttributes?: { [p: string]: string }): Promise<void> {
        // ignoring distinctId, it's here because of the backend interface

        const filteredAttributes: { [p: string]: string } = {};

        for (const key in eventAttributes) {
            if (eventAttributes[key]) {
                filteredAttributes[key] = eventAttributes[key];
            }
        }

        return Promise.resolve(Mixpanel.trackWithProperties(eventName, filteredAttributes))
    }

    disable(): Promise<void> {
        return Promise.resolve(Mixpanel.optOutTracking())
    }

    enable(): Promise<void> {
        return Promise.resolve(Mixpanel.optInTracking())
    }

    identify(actor: Actor): Promise<void> {
        return Promise.resolve(Mixpanel.identify(actor.id))
    }

    reset(): Promise<void> {
        return Promise.resolve(Mixpanel.reset())
    }

}