export interface Backend {
    /**
     * track sends a tracking event to chosen backend
     *
     * @param eventName - name of the event
     * @param actorId - the unique identifier of the actor
     * @param eventAttributes - map of atrributes to attach
     */
    track(eventName: string, actorId?: string,  eventAttributes?: {[k: string]: string}): Promise<void>
    alias(from: string, to: string): Promise<void>
}