const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024px
canvas.height = 64 * 9; // 576px

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

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;

      break;
    // move player to the left
    case "a":
      keys.a.pressed = true;
      break;
    // move player to the right
    case "d":
      keys.d.pressed = true;
      break;
    case "s":
      player.velocity.x = 0;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // move player to the left
    case "a":
      keys.a.pressed = false;
      break;
    // move player to the right
    case "d":
      keys.d.pressed = false;
      break;
  }
});
