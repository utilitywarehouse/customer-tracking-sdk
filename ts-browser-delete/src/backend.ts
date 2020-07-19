import {ClickEvent, IAccount, InteractionEvent, StageEvent, VisitEvent} from "../generated/tracking";

export interface Backend {
    trackVisit(visit: VisitEvent): Promise<void>
    trackStage(stage: StageEvent): Promise<void>
    trackInteraction(interaction: InteractionEvent): Promise<void>
    trackClick(click: ClickEvent): Promise<void>
    enable(): Promise<void>
    disable(): Promise<void>
    identify(account: IAccount): Promise<void>
    reset(): Promise<void>
}