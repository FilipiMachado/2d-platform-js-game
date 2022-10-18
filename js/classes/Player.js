class Player {
  constructor({ collisionBlocks = [] }) {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;
    console.log(collisionBlocks);
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;
    // check for horizontal collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // if a collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.x < -1) {
          this.position.x =
            collisionBlock.position.x + collisionBlock.width + 0.01;
          break;
        }

        if (this.velocity.x > 1) {
          this.position.x = collisionBlock.position.x - this.width - 0.01;
          break;
        }
      }
    }

    // apply gravity
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    // above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
