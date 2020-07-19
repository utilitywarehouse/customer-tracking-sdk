import {Backend} from "../backend";
import {
    Account,
    ClickEvent, IAccount, IApplication,
    Intent, Interaction, InteractionChannel,
    InteractionEvent, IStageEvent, Stage,
    StageEvent, Subject,
    VisitEvent
} from "../../generated/tracking";
import * as mixpanel from "mixpanel-browser";
import {Config as MixpanelConfig} from "mixpanel-browser";

function subjectName(enumVal: Subject): string {
    return Subject[enumVal].toLowerCase().replace(/subject_/g, "");
}

function stageName(enumVal: Stage): string {
    return Stage[enumVal].toLowerCase().replace(/stage_/g, "");
}

function interactionName(enumVal: Interaction): string {
    return Interaction[enumVal].toLowerCase().replace(/interaction_/g, "");
}

function intentName(enumVal: Intent): string {
    return Intent[enumVal].toLowerCase().replace(/intent_/, "");
}

function interactionChannelName(enumVal: InteractionChannel): string {
    return InteractionChannel[enumVal].toLowerCase().replace(/interaction_channel_/, "");
}

function stageEventName(stage: IStageEvent) {
    return (stageName(stage.stage)+"."+intentName(stage.intent))
        .toLowerCase()
        .replace(/[^a-z.]/g, "-");
}

function interactionEventName(interaction: InteractionEvent) {
    return (interactionChannelName(interaction.channel)+"."+interactionName(interaction.interaction))
        .toLowerCase()
        .replace(/[^a-z.]/g, "-");
}

interface CommonPayload {
    application?: IApplication,
    attributes?: { [k: string]: string },
    account?: IAccount,
}

function buildPaiload(event: CommonPayload, attributes: {[k: string]: string}): { [k: string]: string } {
    const payload: {[k: string]: string} = attributes;

    if (event.application) {
        payload.client_id = event.application.id;
    }

    if (event.account) {
        payload.account_number = event.account.number;
    }

    const readyPayload: {[k: string]: string} = attributes;
    const payloadToProcess = {...payload, ...event.attributes};

    for (const key in payloadToProcess) {
        readyPayload[key.toLowerCase().replace(/[^a-z]/g, "_")] = payloadToProcess[key];
    }

    return readyPayload;
}

export class MixpanelBackend implements Backend {
    constructor(token: string, options?: mixpanel.Config | null) {
        mixpanel.init(token, options);
    }
    disable(): Promise<void> {
        mixpanel.opt_out_tracking()
        return Promise.resolve(undefined);
    }

    enable(): Promise<void> {
        mixpanel.opt_in_tracking()
        return Promise.resolve(undefined);
    }

    identify(account: Account): Promise<void> {
        mixpanel.identify(account.number)
        return Promise.resolve(undefined);
    }

    reset(): Promise<void> {
        mixpanel.reset();
        return Promise.resolve(undefined);
    }

    trackInteraction(event: InteractionEvent): Promise<void> {
        mixpanel.track(interactionEventName(event), buildPaiload(event, {
            subject: subjectName(event.subject),
            intent: intentName(event.intent),
            interaction: interactionName(event.interaction),
            interaction_channel: interactionChannelName(event.channel),
        }))

        return Promise.resolve(undefined);
    }

    trackStage(event: StageEvent): Promise<void> {
        mixpanel.track(stageEventName(event), buildPaiload(event, {
            subject: subjectName(event.subject),
            intent: intentName(event.intent),
            stage: stageName(event.stage),
        }))

        return Promise.resolve(undefined);
    }

    trackVisit(event: VisitEvent): Promise<void> {
        mixpanel.track("visit", buildPaiload(event, {
            location: event.location
        }))

        return Promise.resolve(undefined);
    }

    trackClick(event: ClickEvent): Promise<void> {
        mixpanel.track("click", buildPaiload(event, {
            target: event.target,
        }))

        return Promise.resolve(undefined);
    }
}

export {MixpanelConfig}