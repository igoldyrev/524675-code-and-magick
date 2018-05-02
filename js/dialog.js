'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var dialogSetup = setup.querySelector('.setup-user-pic');
  var dragged = false;

  var Coordinate = function (x, y) {
    this.x = x;
    this.y = y;
  };

  // Coordinate.prototype ={
  //   shift: function (shiftX, shiftY) {
  //     this.x = startCoords.x - shiftX;
  //     this.y = startCoords.y - shiftY;
  //   }
  // };


  dialogSetup.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = new Coordinate(evt.clientX, evt.clientY);

    var onMouseMove = function (moveEvt) {
      dragged = true;
      moveEvt.preventDefault();

      // var shift = new Coordinate(moveEvt.clientX, moveEvt.clientY);
      // shift.shift();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = new Coordinate(moveEvt.clientX, moveEvt.clientY);

      var currentCoords = {
        x: setup.offsetLeft - shift.x,
        y: setup.offsetTop - shift.y
      };

      setup.style.top = currentCoords.y + 'px';
      setup.style.left = currentCoords.x + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  dialogSetup.addEventListener('click', function (evt) {
    if (dragged) {
      evt.preventDefault();
      dragged = false;
    }
  });

  dialogSetup.style.zIndex = '1';
})();
