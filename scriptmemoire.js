let grid = document.querySelector('.grid');
let cards = [
  'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
  'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
  'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L',
  'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P'
];
let shuffledCards = shuffle(cards);
let selectedCards = [];
let matchedCards = [];
let restartButton = document.getElementById('restart-button');
let timer = document.querySelector('#timer');
let startTime = null;

// mélanger les cartes
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// inverser la carte
function flipCard() {
  if (selectedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
    this.classList.add('flipped');
    selectedCards.push(this);

    if (selectedCards.length === 2) {
      if (selectedCards[0].dataset.card === selectedCards[1].dataset.card) {
        selectedCards.forEach(function(card) {
          card.classList.add('matched');
          matchedCards.push(card);
        });

        selectedCards = [];

        if (matchedCards.length === cards.length) {
          endGame();
        }
      } else {
        setTimeout(function() {
          selectedCards.forEach(function(card) {
            card.classList.remove('flipped');
          });

          selectedCards = [];
        }, 1000);
      }
    }
  }
}

// terminer le jeu
function endGame() {
  alert('Félicitations ! Vous avez terminé le jeu de mémoire!');
  restartGame();
}

// redémarrer le jeu
function restartGame() {
  grid.innerHTML = '';
  shuffledCards = shuffle(cards);
  selectedCards = [];
  matchedCards = [];
  restartButton.style.display = 'none';
  createBoard();
}

// créer le plateau de jeu
function createBoard() {
  for (let i = 0; i < shuffledCards.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.card = shuffledCards[i];
    card.addEventListener('click', flipCard);

    let front = document.createElement('div');
    front.classList.add('front');
    front.textContent = shuffledCards[i];

    let back = document.createElement('div');
    back.classList.add('back');

    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);
  }
}

createBoard();
// démarrer le chronomètre
function startTimer() {
  startTime = new Date().getTime();
  setInterval(updateTimer, 1000);
}

// mettre à jour le chronomètre toutes les secondes
function updateTimer() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;

  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  timer.innerHTML = 'Temps écoulé : ' + minutes + ' min ' + seconds + ' s';
}

// démarrer le chronomètre lorsque la page est chargée
window.addEventListener('load', startTimer);
