'use strict';

//Переменные облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_CURVE = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;

//Переменные гистограммы
var GAP = 10;
var FONT_HEIGHT = 15;
var HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_HEIGHT = HEIGHT - FONT_HEIGHT - GAP;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y + CLOUD_CURVE);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_CURVE);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_CURVE, y);
  ctx.lineTo(x + CLOUD_CURVE, y);
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
};
