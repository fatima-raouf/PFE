const form = document.querySelector('form');
const scoreDisplay = document.createElement('p');
let score = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  score = 0;
  const answers = [
    'réception',
    'gros',
    'sera'
  ];
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  inputs.forEach((input, index) => {
    if (input.value === answers[index]) {
      score++;
    }
  });
  scoreDisplay.textContent = `Votre score : ${score} / ${answers.length}`;
  form.appendChild(scoreDisplay);
});
