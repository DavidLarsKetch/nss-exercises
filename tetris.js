"use strict";

const canvas = document.getElementById("canvas");

const black = "#000";

const ctx = canvas.getContext('2d');

const oShape = () => {
  ctx.fillStyle = "#37FF9A";
  ctx.fillRect(0, 50, 50, 50);
  ctx.fillStyle = black;
  ctx.fillRect(24.5, 50, 2, 50);
  ctx.fillRect(0, 74, 50, 2);
};

const iShape = () => {
  ctx.translate(70, 0)
  ctx.fillStyle = "#FF4D37";
  ctx.fillRect(0, 0, 25, 100);
  ctx.fillStyle = black;
  ctx.fillRect(0, 74, 25, 2);
  ctx.fillRect(0, 50, 25, 2);
  ctx.fillRect(0, 25, 25, 2);
};

const sShape = () => {
  ctx.translate(115, 50);
  ctx.fillStyle = "#FF6451";
  ctx.fillRect(0, 25, 25, 25);
  ctx.fillRect(25, 0, 25, 50);
  ctx.fillRect(50, 0, 25, 25);
  ctx.fillStyle = black;
  ctx.fillRect(24, 25, 2, 25);
  ctx.fillRect(25, 24, 25, 2);
  ctx.fillRect(49, 0, 2, 25);
};

const zShape = () => {
  ctx.translate(210, 50);
  ctx.fillStyle = "#B22615";
  ctx.fillRect(0, 0, 25, 25);
  ctx.fillRect(25, 0, 25, 50);
  ctx.fillRect(50, 25, 25, 25);
  ctx.fillStyle = black;
  ctx.fillRect(24, 0, 2, 25);
  ctx.fillRect(25, 25, 25, 2);
  ctx.fillRect(49, 25, 2, 25);
};

const lShape = () => {
  ctx.translate(305, 0);
  ctx.fillStyle = "#03B25A";
  ctx.fillRect(0, 0, 25, 100);
  ctx.fillRect(25, 75, 25, 25);

  ctx.fillStyle = black;
  ctx.fillRect(0, 74, 25, 2);
  ctx.fillRect(0, 50, 25, 2);
  ctx.fillRect(0, 25, 25, 2);
  ctx.fillRect(24, 75, 2, 25);
};

const jShape = () => {
  ctx.translate(375, 0);
  ctx.fillStyle = "#FFA396";
  ctx.fillRect(0, 75, 25, 25);
  ctx.fillRect(25, 0, 25, 100);

  ctx.fillStyle = black;
  ctx.fillRect(24, 75, 2, 25);
  ctx.fillRect(25, 74, 25, 2);
  ctx.fillRect(25, 50, 25, 2);
  ctx.fillRect(25, 25, 25, 2);
};

const tShape = () => {
  ctx.translate(445, 50);
  ctx.fillStyle = "#96FFCD";
  ctx.fillRect(0, 25, 75, 25);
  ctx.fillRect(25, 0, 25, 25);

  ctx.fillStyle = black;
  ctx.fillRect(24, 25, 2, 25);
  ctx.fillRect(25, 24, 25, 2);
  ctx.fillRect(49, 25, 2, 25);

};

const tetrisShapes = [oShape, iShape, sShape, zShape, lShape, jShape, tShape];

const draw = shape => {
  ctx.save();
  ctx.tran
}

if (canvas.getContext) {
  //Staging Area
  ctx.fillStyle = "#bbb";
  ctx.fillRect(canvas.width * .1, 130, canvas.width * .8, 1);
  tetrisShapes.forEach(shape => {
    ctx.save();
    shape();
    ctx.restore();
  });

  //Game Area
}
