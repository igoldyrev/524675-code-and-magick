'use strict';

// Переменные облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_CURVE = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;

// Переменные гистограммы
var GAP = 10;
var FONT_HEIGHT = 10;
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

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.baseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_CURVE * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_CURVE * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 3 - FONT_HEIGHT - GAP - BAR_HEIGHT * times[i] / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(230,' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - FONT_HEIGHT - GAP - BAR_HEIGHT * times[i] / maxTime, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
