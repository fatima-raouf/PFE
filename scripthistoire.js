// Fonction pour vérifier les réponses et afficher les feedbacks
function checkAnswers(event) {
    event.preventDefault();
  
    const answers = {
      question1: 'Vasco de Gama',
      question2: '1815',
      question3: 'Louis-Napoléon Bonaparte'
    };
  
    let score = 0;
  
    // Vérifier chaque réponse et mettre à jour le score
    for (const [question, answer] of Object.entries(answers)) {
      const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
  
      if (selectedAnswer) {
        if (selectedAnswer.value === answer) {
          selectedAnswer.parentElement.classList.add('correct');
          score++;
        } else {
          selectedAnswer.parentElement.classList.add('incorrect');
        }
      }
    }
  
    // Afficher le score
    const scoreMessage = `Vous avez obtenu un score de ${score} sur ${Object.keys(answers).length} questions.`;
    document.getElementById('score').textContent = scoreMessage;
  }
  
  // Ajouter un écouteur d'événement sur le formulaire pour vérifier les réponses
  document.querySelector('form').addEventListener('submit', checkAnswers);
  