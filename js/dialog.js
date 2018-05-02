'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var dialogSetup = setup.querySelector('.setup-user-pic');
  var dragged = false;

  dialogSetup.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      dragged = true;
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

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
