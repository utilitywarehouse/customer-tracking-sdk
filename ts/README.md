## API overview

## Vanilla JS browser usage

Copy the built package from [here](dist-browser/uw_tracking.js) to your project.

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

## React usage

-- use browser tracker but load by importing

## Server side usage

-- use normal tracker