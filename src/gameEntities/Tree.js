import Sprite from "./Sprite";

class Tree extends Sprite {
  constructor(params, imageRepo, game) {
    super(params);
    this.imageRepo = imageRepo;
    this.game = game;

    this.images =
      Math.random() < 0.5 ? this.imageRepo.left : this.imageRepo.right;
    this.image = this.images[0];
    this.imageIndex = 0;
  }

  tick(ctx, tickCount) {
    ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }

  isGrown() {
    return (this.imageIndex + 1) % this.images.length == 0;
  }

  grow() {
    this.image = this.images[++this.imageIndex];
  }
}

export default Tree;
