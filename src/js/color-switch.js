import colors from './colorSwichArray.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let colorIntervaId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBackgroundColorStart() {
  colorIntervaId = setInterval(() => {
    let randomNumber = randomIntegerFromInterval(0, colors.length);
    let randomColor = colors[`${randomNumber}`];
    refs.body.style.backgroundColor = randomColor;
  }, 1000);
}

function randomBackgroundColorStop() {
  clearInterval(colorIntervaId);
}

refs.startBtn.addEventListener('click', randomBackgroundColorStart);
refs.stopBtn.addEventListener('click', randomBackgroundColorStop);
