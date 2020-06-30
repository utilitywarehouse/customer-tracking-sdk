package analytics

type Event struct {
  Journey string
  Action string
  Params map[string]string
}


// constructors
type meterReadsJourney struct {
}

func MeterReads() *meterReadsJourney {
  return &meterReadsJourney{}
}

func (*meterReadsJourney) EmailClick(eref, utm string) *Event {
  return *Event{
    Journey: "MeterReads",
    Action: "EmailClick",
    Params: map[string]string{eref: eref, utm: utm}
  }
}

// usage

analytics.Track(MeterReads().EmailClick("G12313", "july-meter-read-campaign"))
