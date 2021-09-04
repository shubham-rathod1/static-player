const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "white";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
/// draw fixex graph

let rectBars = [
  { x: 50, y: 45, w: 10, h: 88 },
  { x: 65, y: 20, w: 10, h: 100 },
  { x: 80, y: 39, w: 10, h: 70 },
  { x: 95, y: 50, w: 10, h: 75 },
  { x: 110, y: 30, w: 10, h: 90 },
];

function newBars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  rectBars.map((item) => ctx.fillRect(item.x, item.y, item.w, item.h));
}
newBars();
let barsInterval;

/// red bars starting here

function startBars() {
  ctx.fillStyle = "red";
  let i = 0;
  barsInterval = setInterval(() => {
    if (i == 5) {
      clearInterval(barsInterval);
    }
    let x = rectBars[i].x,
      y = rectBars[i].y,
      w = rectBars[i].w,
      h = rectBars[i].h;
    ctx.fillRect(x, y, w, h);
    console.log(rectBars[i].x, rectBars[i].y, rectBars[i].w, rectBars[i].h);
    i++;
  }, 1000);
}

function stop() {
  clearInterval(barsInterval);
}

/// draw graphs

let arry = [50, 65, 80, 95, 110, 125, 140, 155, 170, 185];
function drawRect() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  for (i = 0; i < arry.length; i++) {
    const min = 60,
      max = 110;
    let x = arry[i];
    (y = Math.floor(Math.random() * 51)),
      (h = Math.floor(Math.random() * (max - min) + min));
    ctx.fillRect(x, y, w, h);
    // console.log(x, y, w, h);
  }
  // requestAnimationFrame(drawRect);
}
// drawRect();
const btn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", () => {
  stop();
});
btn.addEventListener("click", () => {
  startBars();
});
console.log(ctx);
