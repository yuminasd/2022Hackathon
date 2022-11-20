import { loadImageRepo } from "./ImageRepo";
import House from "./House";
import EventBuilder from "./EventBuilder";
import EventListener from "./EventListener";

// Game code but just for the house only. I'm too lazy to separate Game into a reusable element

class GameHouse {
  // private canvas: HTMLCanvasElement;
  // private tickCount: number = 0;
  // private imageRepo = loadImageRepo();
  // public house: House;
  // public eventBuilder: EventBuilder;
  // public eventListener: EventListener;

  constructor(canvas) {
    this.imageRepo = loadImageRepo();

    this.canvas = canvas;
    this.house = new House(
      {
        pos: {
          x: (this.canvas.width - 150) / 2,
          y: 55,
        },
        width: 150,
        height: 162,
      },
      this.imageRepo.house,
      this
    );
    this.eventBuilder = new EventBuilder(this.house);
    this.eventListener = new EventListener(this.house, this.eventBuilder);

    this.createUserEvents();
  }

  // private
  createUserEvents() {
    this.canvas.addEventListener(
      "mousedown",
      this.eventBuilder.pressEventHandler
    );
    this.canvas.addEventListener(
      "mousemove",
      this.eventBuilder.moveEventHandler
    );
    this.canvas.addEventListener(
      "mouseup",
      this.eventBuilder.releaseEventHandler
    );
    this.canvas.addEventListener(
      "mouseout",
      this.eventBuilder.pressCancelEventHandler
    );

    this.canvas.addEventListener(
      "touchstart",
      this.eventBuilder.pressEventHandler
    );
    this.canvas.addEventListener(
      "touchmove",
      this.eventBuilder.moveEventHandler
    );
    this.canvas.addEventListener(
      "touchend",
      this.eventBuilder.releaseEventHandler
    );
    this.canvas.addEventListener(
      "touchcancel",
      this.eventBuilder.pressCancelEventHandler
    );
  }

  // public
  tick(ctx, tickCount) {
    this.tickCount = tickCount;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.drawImage(this.imageRepo.house.background, 0, 0);

    const emittedEvents = this.eventBuilder.tick(tickCount);
    this.eventListener.tick(emittedEvents, tickCount);

    this.house.tick(ctx, tickCount);
  }

  // private
  pressEventHandler = (event) => {
    console.log("!!! pressy", event.x, event.y);
  };

  dragEventHandler = (event) => {};

  releaseEventHandler = (event) => {};

  pressCancelEventHandler = (event) => {};
}

export default GameHouse;
