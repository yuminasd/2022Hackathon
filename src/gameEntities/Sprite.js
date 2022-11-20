// A minimal sprite class loosely inspired by Pygame implementation of sprites
class Sprite {
  // params = pos ({x, y}), width, height
  constructor(params) {
    const { pos, width, height } = params;
    this.pos = pos;
    this.width = width;
    this.height = height;
  }

  get left() {
    return this.pos.x;
  }

  get right() {
    return this.pos.x + this.width;
  }

  get top() {
    return this.pos.y;
  }

  get bottom() {
    return this.pos.y + this.height;
  }

  get centerX() {
    return this.pos.x + this.width / 2;
  }

  get centerY() {
    return this.pos.y + this.height / 2;
  }
}

export default Sprite;
