package example

func Example() {

  tracker := analytics.New("api-key")

  err := tracker.Event(analytics.MeterReads().EmailClick("eref", "utm"))

}
