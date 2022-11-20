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
      switch (externalEvent.type) {
        case "habitClicked":
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
    const growExistingTree = Math.random() < youngTrees.length * 0.2;
    if (growExistingTree) {
      youngTrees[Math.floor(Math.random() * youngTrees.length)].grow();
    } else {
      const scale = Math.random() * 0.4 + 0.6;
      const tree = new Tree(
        {
          pos: {
            x: Math.random() * 320 + 650,
            y: Math.random() * 100 + 40,
          },
          width: 288 * scale,
          height: 366 * scale,
        },
        this.game.imageRepo.tree,
        this
      );

      const heightFromGround = 400 - tree.bottom;
      if (heightFromGround > 0) {
        tree.pos.y += heightFromGround;
      }

      this.game.trees.push(tree);

      // Sort trees
      this.game.trees.sort((a, b) => a.pos.y < b.pos.y);
    }
  }
}

export default EventListener;
