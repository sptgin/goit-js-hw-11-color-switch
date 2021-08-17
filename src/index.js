const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let colorSwitchId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = document.querySelector('body');

const startButtonElement =
  '<button type="button" data-action="start">Start</button> ';
const stopButtonElement =
  '<button type="button" data-action="stop">Stop</button> ';

colorSwitch.insertAdjacentHTML('beforeend', startButtonElement);
colorSwitch.insertAdjacentHTML('beforeend', stopButtonElement);

const colorSwitchStartButton = document.querySelector(
  'button[data-action="start"]',
);
const colorSwitchStopButton = document.querySelector(
  'button[data-action="stop"]',
);

colorSwitchStartButton.addEventListener('click', event => {
  if (colorSwitchId === null) {
    colorSwitchStartButton.disabled = true;
    colorSwitchId = setInterval(() => {
      colorSwitch.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  }
});
colorSwitchStopButton.addEventListener('click', event => {
  clearInterval(colorSwitchId);
  colorSwitchId = null;
  colorSwitchStartButton.disabled = false;
});
