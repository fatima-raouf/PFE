// Jeu d'addition et de soustraction
const formAddSub = document.querySelector('#form-add-sub');
formAddSub.addEventListener('submit', function(e) {
	e.preventDefault(); // Empêche l'envoi du formulaire

	const answers = [5, 6, 13, 11]; // Réponses aux questions
	let score = 0;
	
	  
// Vérifie chaque réponse et ajoute un point pour chaque réponse correcte
	for (let i = 1; i <= 4; i++) {
		const answer = parseInt(document.querySelector(`#form-add-sub input[name="q${i}"]`).value);
		if (answer === answers[i-1]) {
			score++;
		}
	}

	alert(`Votre score : ${score}/4`);
});

// Jeu de multiplication et de division
const formMultDiv = document.querySelector('#form-mult-div');
formMultDiv.addEventListener('submit', function(e) {
	e.preventDefault(); // Empêche l'envoi du formulaire

	const answers = [20, 5, 54, 5]; // Réponses aux questions
	let score = 0;

	// Vérifie chaque réponse et ajoute un point pour chaque réponse correcte
	for (let i = 1; i <= 4; i++) {
		const answer = parseInt(document.querySelector(`#form-mult-div input[name="q${i}"]`).value);
		if (answer === answers[i-1]) {
			score++;
		}
	}

	alert(`Votre score : ${score}/4`);
});

// Jeu de géométrie
const formGeo = document.querySelector('#form-geo');
formGeo.addEventListener('submit', function(e) {
	e.preventDefault(); // Empêche l'envoi du formulaire

	const answers = [4, 0, 3, 5]; // Réponses aux questions
	let score = 0;

	// Vérifie chaque réponse et ajoute un point pour chaque réponse correcte
	for (let i = 1; i <= 4; i++) {
		const answer = parseInt(document.querySelector(`#form-geo input[name="q${i}"]`).value);
		if (answer === answers[i-1]) {
			score++;
		}
	}

	alert(`Votre score : ${score}/4`);
});
