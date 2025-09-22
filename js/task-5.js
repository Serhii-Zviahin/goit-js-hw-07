function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');

const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', function () {
  body.style.backgroundColor = getRandomHexColor();
  const spanColor = document.querySelector('.widget .color');
  spanColor.textContent = `${body.style.backgroundColor}`;
});
