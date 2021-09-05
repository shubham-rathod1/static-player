const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.fillStyle = "white";


/// draw fixex graph

let rectBars = [
  { x: 120, y: 160, w: 10, idx: 0, h: 108 },
  { x: 135, y: 135, w: 10, idx: 1, h: 120 },
  { x: 150, y: 150, w: 10, idx: 2, h: 90 },
  { x: 165, y: 160, w: 10, idx: 3, h: 95 },
  { x: 180, y: 140, w: 10, idx: 4, h: 70 },
  { x: 195, y: 140, w: 10, idx: 5, h: 70 },
  { x: 210, y: 185, w: 10, idx: 6, h: 108 },
  { x: 225, y: 185, w: 10, idx: 7, h: 120 },
  { x: 240, y: 185, w: 10, idx: 8, h: 90 },
  { x: 255, y: 185, w: 10, idx: 9, h: 95 },
  { x: 270, y: 185, w: 10, idx: 10, h: 70 },
  { x: 285, y: 185, w: 10, idx: 11, h: 70 },
  { x: 300, y: 140, w: 10, idx: 12, h: 108 },
  { x: 315, y: 140, w: 10, idx: 13, h: 120 },
  { x: 330, y: 140, w: 10, idx: 14, h: 90 },
  { x: 345, y: 140, w: 10, idx: 15, h: 45 },
  { x: 360, y: 140, w: 10, idx: 16, h: 45 },
  { x: 375, y: 135, w: 10, idx: 17, h: 50 },
  { x: 390, y: 160, w: 10, idx: 18, h: 108 },
  { x: 405, y: 155, w: 10, idx: 19, h: 120 },
  { x: 420, y: 170, w: 10, idx: 20, h: 90 },
  { x: 435, y: 140, w: 10, idx: 21, h: 95 },
  { x: 450, y: 155, w: 10, idx: 22, h: 70 },
  { x: 465, y: 130, w: 10, idx: 23, h: 70 },
  { x: 480, y: 160, w: 10, idx: 24, h: 108 },
  { x: 495, y: 166, w: 10, idx: 25, h: 120 },
  { x: 510, y: 154, w: 10, idx: 26, h: 90 },
  { x: 525, y: 138, w: 10, idx: 27, h: 95 },
  { x: 540, y: 120, w: 10, idx: 28, h: 70 },
  { x: 555, y: 140, w: 10, idx: 29, h: 70 },
  { x: 570, y: 162, w: 10, idx: 30, h: 108 },
  { x: 585, y: 153, w: 10, idx: 31, h: 120 },
  { x: 600, y: 162, w: 10, idx: 32, h: 90 },
  { x: 615, y: 170, w: 10, idx: 33, h: 95 },
  { x: 630, y: 140, w: 10, idx: 34, h: 50 },
  { x: 645, y: 140, w: 10, idx: 35, h: 50 },
];

function newBars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  rectBars.map((item) => ctx.fillRect(item.x, item.y, item.w, item.h));
}
newBars();

/// red bars starting here

let barsInterval;
let i = 0;
function startBars() {
  ctx.fillStyle = "red";
  barsInterval = setInterval(() => {
    console.log(i);
    if (i == rectBars.length) {
      clearInterval(barsInterval);
    }
    let x = rectBars[i].x,
      y = rectBars[i].y,
      w = rectBars[i].w,
      h = rectBars[i].h;

    ctx.fillRect(x, y, w, h);
    i++;
  }, 1000);
}

function test(index) {
  newBars();
  i = index;
  ctx.fillStyle = "red";

  for (j = 0; j <= index; j++) {
    let x = rectBars[j].x,
      y = rectBars[j].y,
      w = rectBars[j].w,
      h = rectBars[j].h;
    ctx.fillRect(x, y, w, h);
  }
  i = index + 1;
}
function getMousePosition(canvas, event) {
  let x = event.clientX - canvas.offsetLeft;
  let y = event.clientY - canvas.offsetTop;
  console.log("Coordinate x: " + x, "Coordinate y: " + y);

  // finding index here ///

  for (k = 0; k < rectBars.length; k++) {
    if (x >= rectBars[k].x && x <= rectBars[k].x + 28) {
      console.log(rectBars[k].idx);
      test(rectBars[k].idx);
    }
  }
}

canvas.addEventListener("click", function (e) {
  getMousePosition(canvas, e);
});

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
const resetBtn = document.getElementById("reset");

stopBtn.addEventListener("click", () => {
  stop();
});
btn.addEventListener("click", () => {
  startBars();
});
resetBtn.addEventListener("click", () => {
  newBars();
  i = 0;
  clearInterval(barsInterval);
});
