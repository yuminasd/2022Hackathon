// interface TickedEvent {
//   tickCount: number;
// }

// export interface TickedMouseEvent extends TickedEvent {
//   type: string;
//   pos: Position;
//   mouseIsPressed: boolean;
//   event: MouseEvent | TouchEvent;
// }

// export interface GameEvent extends TickedEvent {
//   type: "mouseEnterHouse" | "mouseLeaveHouse";
// }

// export interface MouseEnterHouseEvent extends GameEvent {
//   tickCount: number;
//   mouseEvent: TickedMouseEvent; // mousemove event
//   prevMouseEvent: TickedMouseEvent; // Previous mousemove event
// }

// export interface MouseLeaveHouseEvent extends GameEvent {
//   tickCount: number;
//   mouseEvent: TickedMouseEvent; // mousemove event
//   prevMouseEvent: TickedMouseEvent; // Previous mousemove event
// }

// export interface EmittedEvents {
//   mouseEvent?: TickedMouseEvent;
//   gameEvent?: GameEvent;
// }

class EventBuilder {
  // private tickCount = -1;
  // private house: House;
  // private maxMouseEvents = 100;
  // private maxGameEvents = 100;
  // private _mouseEvents: TickedMouseEvent[] = [];
  // private _gameEvents: GameEvent[] = [];

  // private _mouseIsPressed = false;
  // private _mouseIsOverHouse = false;

  constructor(house) {
    this.tickCount = -1;
    this.maxMouseEvents = 100;
    this.maxGameEvents = 100;
    this._mouseEvents = [];
    this._gameEvents = [];

    this._mouseIsPressed = false;
    this._mouseisOverHouse = false;

    this.house = house;
  }

  get mouseEvents() {
    return this._mouseEvents;
  }

  get gameEvents() {
    return this._gameEvents;
  }

  get mouseIsPressed() {
    return this._mouseIsPressed;
  }

  get mouseIsOverHouse() {
    return this._mouseIsOverHouse;
  }

  // public
  tick(tickCount) {
    this.buildGameEvents(this.tickCount); // Build game events from the prev tickCount

    const emittedEvents = {}; // interface EmittedEvents
    if (
      this.mouseEvents.length &&
      this.mouseEvents[0].tickCount === this.tickCount
    ) {
      emittedEvents.mouseEvent = this.mouseEvents[0];
    }
    if (
      this.gameEvents.length &&
      this.gameEvents[0].tickCount === this.tickCount
    ) {
      emittedEvents.gameEvent = this.gameEvents[0];
    }

    this.tickCount = tickCount;

    return emittedEvents;
  }

  // private pushEvent<T extends TickedEvent>(event: T, eventList: T[], maxSize: number) {
  pushEvent(event, eventList, maxSize) {
    eventList.unshift(event);
    if (eventList.length > maxSize) {
      eventList.pop();
    }
  }

  // private
  pushMouseEvent(event) {
    const pos = this.pressPos(event);
    const tickedMouseEvent = {
      type: event.type,
      pos,
      tickCount: this.tickCount,
      mouseIsPressed: this._mouseIsPressed,
      event,
    };

    this.pushEvent(tickedMouseEvent, this._mouseEvents, this.maxMouseEvents);
  }

  // private
  pushGameEvent(event) {
    this.pushEvent(event, this._gameEvents, this.maxGameEvents);
  }

  // private Position
  pressPos(e) {
    const x = "pageX" in e ? e.pageX : e.changedTouches[0].pageX;
    const y = "pageY" in e ? e.pageY : e.changedTouches[0].pageY;
    return { x, y };
  }

  // public
  pressEventHandler = (event) => {
    this._mouseIsPressed = true;
    this.pushMouseEvent(event);
  };

  // public
  moveEventHandler = (event) => {
    this.pushMouseEvent(event);
  };

  // Mouse up events
  // public
  releaseEventHandler = (event) => {
    this._mouseIsPressed = false;
    this.pushMouseEvent(event);
  };

  // Mouse exits canvas
  // public
  pressCancelEventHandler = (event) => {
    this._mouseIsPressed = false;
    this.pushMouseEvent(event);
  };

  // private
  buildGameEvents(tickCount) {
    if (!this.mouseEvents.length) return;

    const lastMouseEvent = this.mouseEvents[0];
    if (tickCount > lastMouseEvent.tickCount) return; // No new events since last tick

    if (this.house) {
      this.buildMouseOverHouseEvents(tickCount);
    }
  }

  // private
  buildMouseOverHouseEvents(tickCount) {
    const lastMouseMoveEvent = this.getLastMouseMoveEvent(tickCount);
    if (!lastMouseMoveEvent) return;

    if (!this._mouseIsOverHouse && this.isMouseOverHouse(lastMouseMoveEvent)) {
      this._mouseIsOverHouse = true;

      // interface MouseEnterHouseEvent
      const mouseEnterHouseEvent = {
        type: "mouseEnterHouse",
        tickCount,
        mouseEvent: lastMouseMoveEvent,
        prevMouseEvent: this.getPrevMouseMoveEvent(tickCount),
      };
      this.pushGameEvent(mouseEnterHouseEvent);
    } else if (
      this._mouseIsOverHouse &&
      !this.isMouseOverHouse(lastMouseMoveEvent)
    ) {
      this._mouseIsOverHouse = false;

      // interface MouseLeaveHouseEvent
      const mouseLeaveHouseEvent = {
        type: "mouseLeaveHouse",
        tickCount,
        mouseEvent: lastMouseMoveEvent,
        prevMouseEvent: this.getPrevMouseMoveEvent(tickCount),
      };
      this.pushGameEvent(mouseLeaveHouseEvent);
    }
  }

  // private boolean
  // event: TickedMouseEvent
  isMouseOverHouse(event) {
    return this.house.isPosInside(event.pos);
  }

  // private
  getLastMouseMoveEvent(tickCount) {
    for (const event of this.mouseEvents) {
      if (tickCount < event.tickCount) continue;
      if (event.type === "mousemove" || event.type === "touchmove") {
        return event;
      }
    }

    return undefined;
  }

  // private
  getPrevMouseMoveEvent(tickCount) {
    return this.getLastMouseMoveEvent(tickCount - 1);
  }
}

export default EventBuilder;
