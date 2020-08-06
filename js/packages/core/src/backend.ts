export interface Backend {
    track(eventName: string, eventAttributes?: {[k: string]: string}): Promise<void>
    alias(from: string, to: string): Promise<void>
}