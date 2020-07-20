## API overview

## Browser

The browser implementation different from the server side one in the way users are identified. The app is configured on instance creation, and the account info is injected automatically once the `identify` method has been called.
There are also `disable/enable` methods to control tracking opt in/out, and a `reset` to reset identity on logout etc.

### Self contained

Copy the built package from [here](dist-browser/uw_tracking.js) to your project.

The mixpanel-browser dependency is built-in so the script load is likely 
the only thing you need. Enums are included as literals so make sure to use them, if you don't, 
string values will come as 'unrecognised'.

Example:

```html
<script src="uw_tracking.js"></script>
<script>

    var tracking = new uw_tracking.Tracker(
        new uw_tracking.MixpanelBrowserBackend("apiToken"),
        {id: "my-app"},
    );
    tracking.identify({number: "acc-888"})
    tracking.trackStage(
        uw_tracking.Subject.SUBJECT_METER_READING,
        uw_tracking.Intent.INTENT_METER_READING_SUBMIT,
        uw_tracking.Stage.STAGE_ENTERED,
        {"a-a": "this should be underscored"}
    );
</script>
```

### React or similar transpiled usage

```typescript
import {Tracker} from "@utilitywarehouse/customer-tracking-sdk/dist/browser";
import {MixpanelBrowserBackend} from "@utilitywarehouse/customer-tracking-sdk/dist/backend/mixpanel-browser.js";
import {Intent, Interaction, InteractionChannel, Stage, Subject} from "@utilitywarehouse/customer-tracking-sdk/dist/generated/tracking";

(() => {

    const tracker = new Tracker(
        new MixpanelBrowserBackend("apiKey", {debug: true}),
        {id: "my_client_id"},
    );
    
    // all calls inject app info automatically

    tracker.trackStage(
        Subject.SUBJECT_METER_READING,
        Intent.INTENT_METER_READING_SUBMIT,
        Stage.STAGE_COMPLETED,
        new Promise(() => {
            return {
                "a-V": "the key will be underscored as a_v",
                "why-promise": "cause sometimes you need to query data sources to get event context and this needs to be async"
            }
        })
    )

    tracker.identify({number: "acc-123", id: ""}) // calls below identify will inject account automatically

    tracker.trackInteraction(
        Subject.SUBJECT_METER_READING,
        Intent.INTENT_METER_READING_SUBMIT,
        Interaction.INTERACTION_CLICKED,
        InteractionChannel.INTERACTION_CHANNEL_EMAIL,
        {"note": "that attributes can be plan literals too, no need for a promise"}
    )

    tracker.onError((err) => {
        console.log("mixy had error");
    })

})()
````

## Server side usage

Similar to above but the account/application needs to be passed each time. We expect the `application.id` to be
the audience the auth token was issued to and not the application issuing tracking events.

```typescript
import {Tracker} from "@utilitywarehouse/customer-tracking-sdk";
import {MixpanelBackend} from "@utilitywarehouse/customer-tracking-sdk/dist/backend/mixpanel";
import {Intent, Interaction, InteractionChannel, Stage, Subject} from "@utilitywarehouse/customer-tracking-sdk/dist/generated/tracking";

(async () => {

    const tracker = new Tracker(
        new MixpanelBackend("apiKey", {debug: true})
    );

    await tracker.trackStage(
        {id: "", number: "acc-123"},
        {id: "my_client_id"},
        Subject.SUBJECT_METER_READING,
        Intent.INTENT_METER_READING_SUBMIT,
        Stage.STAGE_COMPLETED,
        new Promise(() => {
            return {
                "a-V": "the key will be underscored as a_v",
                "why-promise": "cause sometimes you need to query data sources to get event context and this needs to be async"
            }
        })
    )

    await tracker.trackInteraction(
        {id: "", number: "acc-123"},
        {id: "my_client_id"},
        Subject.SUBJECT_METER_READING,
        Intent.INTENT_METER_READING_SUBMIT,
        Interaction.INTERACTION_CLICKED,
        InteractionChannel.INTERACTION_CHANNEL_EMAIL,
        {"note": "that attributes can be plan literals too, no need for a promise"}
    )

    tracker.onError((err) => {
        console.log("mixy had error");
    })

})()
```