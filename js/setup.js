'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var setupFireballInput = document.getElementsByName('fireball-color');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FAERBOLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomNumberArray = function (array) {
  return getRandom(0, array.length);
};
var randomIndexFaerballColor = getRandomNumberArray(WIZARDS_FAERBOLS_COLORS);
var randomIndexEyesColor = getRandomNumberArray(WIZARD_COLORS_EYES);

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var randomColorFaerball = function () {
  setupFireballWrap.style.background = WIZARDS_FAERBOLS_COLORS[randomIndexFaerballColor];
};

console.log(setupFireballInput.value)

var randomColorEyes = function () {
  setupWizardEyes.style.fill = WIZARD_COLORS_EYES[randomIndexEyesColor];
};

setupFireballWrap.addEventListener('click', randomColorFaerball);
setupWizardEyes.addEventListener('click', randomColorEyes);

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupClose.addEventListener('click', closePopup);

var wizards = [];

var getRandomNumber = function (array) {
  var randomItem = Math.floor(Math.random() * array.length);
  return randomItem;
};

for (var i = 0; i < 4; i++) {
  var wizardItem = {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES)],
    coatColor: WIZARD_COLORS[getRandomNumber(WIZARD_COLORS)],
    eyesColor: WIZARD_COLORS_EYES[getRandomNumber(WIZARD_COLORS_EYES)],
  };
  wizards.push(wizardItem);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
