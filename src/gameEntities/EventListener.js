class EventListener {
  // private house: House;
  // private eventBuilder: EventBuilder;

  constructor(house, eventBuilder) {
    this.house = house;
    this.eventBuilder = eventBuilder;
  }

  // public
  // emittedEvents: EmittedEvents
  // tickCount: number
  tick(emittedEvents, tickCount) {
    const gameEvent = emittedEvents.gameEvent;
    if (!gameEvent) return;

    switch (gameEvent.type) {
      case "mouseEnterHouse":
        this.onMouseEnterHouse(gameEvent, tickCount);
        break;
      case "mouseLeaveHouse":
        this.onMouseLeaveHouse(gameEvent, tickCount);
        break;
      default:
        throw new Error(`Unexpected gameEvent type ${gameEvent.type}`);
    }
  }

  // private
  // event: GameEvent
  // tickCount: number
  onMouseEnterHouse(event, tickCount) {
    if (
      this.house.activityState === "idle" ||
      this.house.activityState === "looking"
    ) {
      this.house.activityState = "squishing";
    }
  }

  // private
  // event: GameEvent
  // tickCount: number
  onMouseLeaveHouse(event, tickCount) {
    if (
      this.house.activityState === "squished" ||
      this.house.activityState === "squishing"
    ) {
      this.house.activityState = "unsquishing";
    }
  }
}

export default EventListener;
