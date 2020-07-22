export interface Backend {
    track(eventName: string, eventAttributes: {[k: string]: string}): Promise<void>
}