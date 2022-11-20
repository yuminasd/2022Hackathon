import Tree from "./Tree";

class EventListener {
  // private house: House;
  // private eventBuilder: EventBuilder;

  constructor(house, eventBuilder, game) {
    this.house = house;
    this.eventBuilder = eventBuilder;
    this.game = game;
  }

  // public
  // emittedEvents: EmittedEvents
  // tickCount: number
  tick(emittedEvents, tickCount) {
    const gameEvent = emittedEvents.gameEvent;
    if (gameEvent) this.onEmittedGameEvent(gameEvent, tickCount);

    const externalEvents = emittedEvents.externalEvents;
    if (externalEvents) this.onEmittedExternalEvents(externalEvents, tickCount);
  }

  // priv
  onEmittedGameEvent(gameEvent, tickCount) {
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

  onEmittedExternalEvents(externalEvents, tickCount) {
    externalEvents.forEach((externalEvent) => {
      console.log("!!! iterating external event");
      switch (externalEvent.type) {
        case "habitClicked":
          console.log("!!! habit clicked");
          this.onHabitClicked(externalEvent, tickCount);
          break;
        default:
          throw new Error(
            `Unexpected externalEvent type ${externalEvent.type}`
          );
      }
    });
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

  onHabitClicked(event, tickCount) {
    // Grow 1 random tree or spawn 1 random tree
    const youngTrees = this.game.trees.filter((tree) => !tree.isGrown());
    const growExistingTree = Math.random() < youngTrees.length * 0.1;
    if (growExistingTree) {
      youngTrees[Math.floor(Math.random() * youngTrees.length)].grow();
    } else {
      this.game.trees.push(
        new Tree(
          {
            pos: { x: Math.random() * 300 + 650, y: Math.random() * 100 + 30 },
            width: 288,
            height: 366,
          },
          this.game.imageRepo.tree,
          this
        )
      );
    }
  }
}

export default EventListener;
