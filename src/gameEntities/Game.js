import { loadImageRepo } from "./ImageRepo";
import EventBuilder from "./EventBuilder";
import EventListener from "./EventListener";
import Tree from "./Tree";
import Cloud from "./Cloud";

class Game {
  // private canvas: HTMLCanvasElement;
  // private tickCount: number = 0;
  // private imageRepo = loadImageRepo();
  // public house: House;
  // public eventBuilder: EventBuilder;
  // public eventListener: EventListener;

  constructor(canvas) {
    this.externalEvents = [];

    this.imageRepo = loadImageRepo();

    this.canvas = canvas;
    // this.house = new House(
    //   {
    //     pos: {
    //       x: canvas.width / 2 - 150 / 2,
    //       y: canvas.height * 0.6,
    //     },
    //     width: 150,
    //     height: 162,
    //   },
    //   this.imageRepo.house,
    //   this
    // );
    this.trees = [
      new Tree(
        {
          // pos: { x: canvas.width * 0.6, y: canvas.height * 0.5 },
          pos: { x: 750, y: 30 },
          width: 288,
          height: 366,
        },
        this.imageRepo.tree,
        this
      ),
    ];
    this.flowers = [];
    this.clouds = [];

    this.eventBuilder = new EventBuilder(undefined);
    this.eventListener = new EventListener(undefined, this.eventBuilder, this);

    this.createUserEvents();

    this.spawnClouds();
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
  queueExternalEvent(event) {
    this.externalEvents.push(event);
  }

  // private
  clearExternalEvents() {
    this.externalEvents = [];
  }

  // public
  tick(ctx, tickCount) {
    this.tickCount = tickCount;

    ctx.drawImage(this.imageRepo.background, 0, 0);

    const emittedEvents = this.eventBuilder.tick(tickCount);
    emittedEvents.externalEvents = this.externalEvents;
    if (emittedEvents.externalEvents.length)
      this.eventListener.tick(emittedEvents, tickCount);

    this.clearExternalEvents(); // external events have been read in eventListener, dispose of them

    this.clouds.forEach((cloud) => cloud.tick(ctx, tickCount));

    // this.house.tick(ctx, tickCount);
    this.trees.forEach((tree) => tree.tick(ctx, tickCount));

    ctx.drawImage(this.imageRepo.staticHouse, 500, 50);
  }

  // private
  pressEventHandler = (event) => {
    console.log("!!! pressy", event.x, event.y);
  };

  dragEventHandler = (event) => {};

  releaseEventHandler = (event) => {};

  pressCancelEventHandler = (event) => {};

  // public
  spawnClouds() {
    const numClouds = Math.floor(Math.random() * 6) + 1;
    for (let i = 0; i < numClouds; i++) {
      const cloud = new Cloud(
        {
          pos: {
            x: Math.random() * 1500 + 100,
            y: Math.random() * 400 - 100,
          },
          width: 0, // ignored,
          height: 0, // ignored
        },
        this.imageRepo.clouds,
        this
      );

      const heightDiff = cloud.bottom - 300;
      if (heightDiff > 0) {
        cloud.pos.y -= heightDiff;
      }

      this.clouds.push(cloud);
    }
  }
}

export default Game;
