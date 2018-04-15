'use strict';
(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var artifatsCells = document.querySelectorAll('.setup-artifacts .setup-artifacts-cell');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
    showEmptyCells();
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  var isArtifactsCellEmpty = function (element) {
    return !element.hasChildNodes();
  };

  artifactsElement.addEventListener('drop', function (evt) {
    if (isArtifactsCellEmpty(evt.target)) {
      evt.target.style.backgroundColor = '';
      var draggedItemCopy = draggedItem.cloneNode(true);
      evt.target.appendChild(draggedItemCopy);
    }
    evt.preventDefault();
    hideEmptyCells();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  var showEmptyCells = function () {
    [].forEach.call(artifatsCells, function (cell) {
      if (!cell.hasChildNodes()) {
        cell.style.outline = '2px dashed red';
      }
    });
  };

  var hideEmptyCells = function () {
    [].forEach.call(artifatsCells, function (cell) {
      cell.style.outline = '';
    });
  };
})();
