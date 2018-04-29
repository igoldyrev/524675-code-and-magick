'use strict';
(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var userDialog = document.querySelector('.setup');
  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat = coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes = eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {}
    return 0
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 10; margin: 0 auto; background-color: red;';
    node.style.position = 'absolute';
    node.style.display = 'flex';
    node.style.left = 0;
    node.style.right = 0;
    node.style.top = '20%';
    node.style.alignItems = 'center';
    node.style.justifyContent = 'center';
    node.style.width = '50%';
    node.style.height = '100px';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var URL = 'https://js.dump.academy/code-and-magick/data';
  window.load(URL, successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
