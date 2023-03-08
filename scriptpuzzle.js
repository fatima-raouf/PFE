let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedCards = 0; // variable pour suivre le nombre de cartes correspondantes

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // Premier clic sur une carte
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // Deuxième clic sur une carte
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // les cartes sont correspondantes
    disableCards();
  } else {
    // les cartes ne correspondent pas
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');
  matchedCards += 2; // incrémenter le nombre de cartes correspondantes
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  // si le nombre de cartes correspondantes est égal à la quantité totale de cartes, le jeu est terminé
  if (matchedCards === cards.length) {
    setTimeout(() => {
      alert('Félicitations, vous avez gagné !');
    }, 500);
  }
}

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

