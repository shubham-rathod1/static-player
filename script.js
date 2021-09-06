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
function labels() {
  ctx.fillStyle = "green";
  ctx.fillRect(140, 50, 100, 20); // first green label
  ctx.fillRect(168, 50, 2.5, 120); // line
  ctx.beginPath(); // circle point
  ctx.arc(170, 170, 5, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "teal";
  ctx.fillRect(280, 50, 80, 20); // second teal label
  ctx.fillRect(303, 50, 2.5, 120); // line
  ctx.beginPath(); // circle point
  ctx.arc(305, 170, 5, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "blue"; // third blue label
  ctx.fillRect(460, 70, 80, 20);
  ctx.fillRect(484, 70, 2.5, 120); // line
  ctx.beginPath(); // circle point
  ctx.arc(485, 190, 5, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "brown"; // fourth brown label
  ctx.fillRect(385, 20, 210, 20);
  ctx.fillRect(589, 40, 2.5, 130); // line
  ctx.beginPath(); // circle point
  ctx.arc(590, 170, 5, 0, 2 * Math.PI);
  ctx.fill();

  // text here first label
  ctx.fillStyle = "white";
  ctx.font = "12pt sans-serif";
  ctx.fillText("introduction", 148, 65);

  // text here second label
  ctx.fillStyle = "white";
  ctx.font = "12pt sans-serif";
  ctx.fillText("one_six", 288, 65);

  // text here third label
  ctx.fillStyle = "white";
  ctx.font = "12pt sans-serif";
  ctx.fillText("polite", 475, 85);

  // text here fourth label
  ctx.fillStyle = "white";
  ctx.font = "12pt sans-serif";
  ctx.fillText("Rapport Building - Empathy", 389, 35);
}

labels();

/// red bars starting here

let barsInterval;
let i = 0;
function startBars() {
  ctx.fillStyle = "red";
  barsInterval = setInterval(() => {
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
/// function to get player at desired point

function test(index) {
  newBars();
  labels();
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
  // finding index here ///

  for (k = 0; k < rectBars.length; k++) {
    if (x >= rectBars[k].x && x <= rectBars[k].x + 28) {
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

/// Event listeners here
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
  labels();
});
