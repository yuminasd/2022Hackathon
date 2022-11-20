import Sprite from "./Sprite";

class Cloud extends Sprite {
  constructor(params, imageRepo, game) {
    super(params);
    this.imageRepo = imageRepo;
    this.game = game;

    this.image =
      this.imageRepo[Math.floor(Math.random() * this.imageRepo.length)];

    this.velocity = { x: Math.random() * 2 + 0.01, y: 0 };
    this.alpha = Math.random() * 0.8 + 0.2;
  }

  tick(ctx, tickCount) {
    this.pos.x += this.velocity.x;
    this.pos.x %= 2000;

    const tempAlpha = ctx.globalAlpha;
    ctx.globalAlpha = this.alpha;

    ctx.drawImage(
      this.image,
      this.pos.x - 300,
      this.pos.y
      // this.width,
      // this.height
    );

    ctx.globalAlpha = tempAlpha;
  }
}

export default Cloud;
