const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024px
canvas.height = 64 * 9; // 576px

class Sprite {
  constructor({ position }) {
    console.log(position);
    this.position = position;
    this.image = new Image();
  }
}

const player = new Player();

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.velocity.x = 0;
  if (keys.d.pressed) {
    player.velocity.x = 5;
  } else if (keys.a.pressed) {
    player.velocity.x = -5;
  }
  player.draw();
  player.update();

  //console.log("animation running");
}

animate();
