const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "white";

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });
/// draw fixex graph

let rectBars = [
  { x: 70, y: 45, w: 13, idx: 0, h: 108 },
  { x: 98, y: 20, w: 13, idx: 1, h: 120 },
  { x: 126, y: 39, w: 13, idx: 2, h: 90 },
  { x: 154, y: 50, w: 13, idx: 3, h: 95 },
  { x: 180, y: 30, w: 13, idx: 4, h: 110 },
];

function newBars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  rectBars.map((item) => ctx.fillRect(item.x, item.y, item.w, item.h));

  // rectBars.map((item) => ctx.fillRect(10,10, 50, 150))

  /////////
  // for (j = 0; j < rectBars.length; j++) {
  //   let x = rectBars[j].x,
  //     y = rectBars[j].y,
  //     w = rectBars[j].w,
  //     h = rectBars[j].h;

  //   ctx.fillRect(x, y, w, h);
  // }
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
    // console.log(rectBars[i].x, rectBars[i].y, rectBars[i].w, rectBars[i].h);
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
  // let rect = canvas.getBoundingClientRect();
  let x = event.clientX - canvas.offsetLeft;
  let y = event.clientY - canvas.offsetTop;
  console.log("Coordinate x: " + x, "Coordinate y: " + y);
  // console.log(canvas.offsetLeft);

  // finding index here ///

  for (k = 0; k < rectBars.length; k++) {
    if (x >= (rectBars[k].x) && x <= (rectBars[k].x + 28) ) {
      console.log(rectBars[k].idx);
      test(rectBars[k].idx)
    }
  }



  ///////
}

// let canvasElem = document.querySelector("canvas");

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
const testBtn = document.getElementById("test");

testBtn.addEventListener("click", () => {
  test(2);
});

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
console.log(ctx);
