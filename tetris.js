"use strict";

const canvas = document.getElementById("canvas");

const black = "#000";

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  //Staging Area
  ctx.fillStyle = "#bbb";
  ctx.fillRect(canvas.width * .1, 150, canvas.width * .8, 1);

  // O shape
  ctx.fillStyle = "#37FF9A";
  ctx.fillRect(0, 50, 50, 50);
  ctx.fillStyle = black;
  ctx.fillRect(24, 50, 2, 50);
  ctx.fillRect(0, 74, 50, 2);

  // I shape
  ctx.fillStyle = "#FF4D37";
  ctx.fillRect(70, 0, 25, 100);
  ctx.fillStyle = black;
  ctx.fillRect(70, 74, 25, 2);
  ctx.fillRect(70, 50, 25, 2);
  ctx.fillRect(70, 25, 25, 2);

  // S shape
  ctx.fillStyle = "#FF6451";
  ctx.fillRect(115, 75, 25, 25);
  ctx.fillRect(140, 50, 25, 50);
  ctx.fillRect(165, 50, 25, 25);
  ctx.fillStyle = black;
  ctx.fillRect(139, 75, 2, 25);
  ctx.fillRect(140, 75, 25, 2);
  ctx.fillRect(164, 50, 2, 25);

  // Z shape
  ctx.fillStyle = "#B22615";
  ctx.fillRect(210, 50, 25, 25);
  ctx.fillRect(235, 50, 25, 50);
  ctx.fillRect(260, 75, 25, 25);
  ctx.fillStyle = black;
  ctx.fillRect(234, 50, 2, 25);
  ctx.fillRect(235, 75, 25, 2);
  ctx.fillRect(259, 75, 2, 25);

  // L shape
  ctx.fillStyle = "#03B25A";
  ctx.fillRect(305, 0, 25, 100);
  ctx.fillRect(330, 75, 25, 25);

  ctx.fillStyle = black;
  ctx.fillRect(305, 74, 25, 2);
  ctx.fillRect(305, 50, 25, 2);
  ctx.fillRect(305, 25, 25, 2);
  ctx.fillRect(329, 75, 2, 25);


  // J shape
  ctx.fillStyle = "#FFA396";
  ctx.fillRect(375, 75, 25, 25);
  ctx.fillRect(400, 0, 25, 100);

  ctx.fillStyle = black;
  ctx.fillRect(399, 75, 2, 25);
  ctx.fillRect(400, 74, 25, 2);
  ctx.fillRect(400, 50, 25, 2);
  ctx.fillRect(400, 25, 25, 2);

  // T shape
  ctx.fillStyle = "#96FFCD";
  ctx.fillRect(445, 75, 75, 25);
  ctx.fillRect(470, 50, 25, 25);

  ctx.fillStyle = black;
  ctx.fillRect(469, 75, 2, 25);
  ctx.fillRect(470, 74, 25, 2);
  ctx.fillRect(494, 75, 2, 25);

  //Game Area
}
