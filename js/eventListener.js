window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -25;

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
