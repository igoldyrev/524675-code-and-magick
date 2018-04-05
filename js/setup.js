'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
for (var i = 0; i < 4; i++) {
  var randName = Math.floor(Math.random() * WIZARD_NAMES.length);
  var randSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var randColors = Math.floor(Math.random() * WIZARD_COLORS.length);
  var randColorsEyes = Math.floor(Math.random() * WIZARD_COLORS_EYES.length);

  var wizardItem = {
    name: WIZARD_NAMES[randName] + ' ' + WIZARD_SURNAMES[randSurname],
    coatColor: WIZARD_COLORS[randColors],
    eyesColor: WIZARD_COLORS_EYES[randColorsEyes],
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
