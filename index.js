const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

c.fillStyle = "#fff";
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = "red";
c.fillRect(100, 100, 100, 100);

function animate() {
  window.requestAnimationFrame(animate);
}

animate();
