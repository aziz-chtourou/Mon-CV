// Questions du quiz
const questions = [
    {
        question: "Pourquoi pensez-vous que j'ai choisi la filière informatique ?",
        options: [
            "Par intérêt pour l'argent.",
            "Parce qu'il s'agit d'une filière dynamique avec de nombreuses opportunités.",
            "Je ne l'ai pas choisie."
        ],
        answer: "Parce qu'il s'agit d'une filière dynamique avec de nombreuses opportunités."
    },
    {
        question: "Pourquoi ai-je voulu terminer mes études en ingénierie ?",
        options: [
            "Pour garantir une opportunité d'immigration.",
            "Pour assurer une position de prestige sur le marché du travail.",
            "Pour obtenir des connaissances approfondies et de qualité.",
            "Toutes les réponses ci-dessus."
        ],
        answer: "Toutes les réponses ci-dessus."
    },
    {
        question: "Quel domaine pensez-vous que je préfère ?",
        options: [
            "Intelligence Artificielle (IA)",
            "DevOps",
            "Développement Web"
        ],
        answer: "DevOps"
    },
    {
        question: "Pensez-vous que j'aimerais devenir enseignant universitaire un jour ?",
        options: [
            "Oui",
            "Non"
        ],
        answer: "Oui"
    },
    {
        question: "Selon vous, est-ce que je préfère travailler dans le développement backend ou frontend ?",
        options: [
            "Backend",
            "Frontend",
            "Les deux"
        ],
        answer: "Les deux"
    },
    {
        question: "Pensez-vous que je préfère davantage le développement mobile ou web ?",
        options: [
            "Mobile",
            "Web",
            "Les deux"
        ],
        answer: "Les deux"
    },
    {
        question: "Quelle langue de programmation pensez-vous que je préfère ?",
        options: [
            "C++",
            "C",
            "Java",
            "Python",
            "JavaScript"
        ],
        answer: "Python"
    },
    {
        question: "À quel moment de la journée pensez-vous que je préfère travailler sur mes études et mes projets ?",
        options: [
            "Le matin, tôt",
            "Tard dans la nuit",
            "Je n'ai pas d'heure fixe"
        ],
        answer: "Tard dans la nuit"
    },
    {
        question: "Selon vous, est-ce que je préfère travailler seul ou en groupe ?",
        options: [
            "Travailler seul",
            "Travailler en groupe",
            "Cela dépend du type de travail"
        ],
        answer: "Cela dépend du type de travail"
    },
    {
        question: "Pensez-vous que je respecte mes horaires de repas ?",
        options: [
            "Oui",
            "Non",
            "Cela dépend des circonstances"
        ],
        answer: "Cela dépend des circonstances"
    },
    {
        question: "Selon vous, est-ce que je suis régulier dans mes horaires de prière ?",
        options: [
            "Oui",
            "Non"
        ],
        answer: "Oui"
    },
    {
        question: "Quand je travaille, quel environnement de travail pensez-vous que je préfère ?",
        options: [
            "Le calme total",
            "Écouter de la musique douce",
            "Le bruit ne me dérange pas"
        ],
        answer: "Le calme total"
    },
    {
        question: "Quelles couleurs pensez-vous renforcent ma confiance et me procurent du confort ?",
        options: [
            "Les couleurs sombres",
            "Les couleurs froides",
            "Les couleurs terre et le noir",
            "Je n'y prête pas attention"
        ],
        answer: "Les couleurs terre et le noir"
    },
    {
        question: "Est-ce que vous pensez que je me sens plus à l'aise avec des vêtements sportifs ou des vêtements élégants et formels ?",
        options: [
            "Vêtements sportifs",
            "Vêtements élégants et formels",
            "Cela dépend du lieu et du type de travail"
        ],
        answer: "Cela dépend du lieu et du type de travail"
    },
    {
        question: "Quel type de musique pensez-vous que je préfère ?",
        options: [
            "Musique classique",
            "Musique moderne",
            "El Mezwed",
            "Tous les genres mentionnés"
        ],
        answer: "El Mezwed"
    },
    {
        question: "Quel type de repas pensez-vous que je préfère ?",
        options: [
            "Rouz Jerbi",
            "Pizza",
            "Plats légers"
        ],
        answer: "Rouz Jerbi"
    }
];

// Variables pour le quiz
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;
let timer;
let timeLeft = 225;

// Fonction pour afficher la question actuelle
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <div class="question">
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    const options = document.getElementsByName('option');
    let selectedOption = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i];
            break;
        }
    }

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Veuillez sélectionner une option avant de continuer.");
    }
}

// Fonction pour afficher le résultat final
function showResult() {
    clearInterval(timer);
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const timerElement = document.getElementById('timer');
    const buttonContainer = document.getElementsByClassName('button-container')[0];
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    const sexeOptions = document.getElementsByName('sexe');
    let sexe = "Homme"; // Valeur par défaut
    for (let i = 0; i < sexeOptions.length; i++) {
        if (sexeOptions[i].checked) {
            sexe = sexeOptions[i].value;
            break;
        }
    }

    const title = sexe === "Homme" ? "Monsieur" : "Madame";

    questionContainer.style.display = 'none';
    timerElement.style.display = 'none';
    buttonContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <h2>Résultat final</h2>
        <p>${title} ${nom} ${prenom}, vous avez obtenu : ${score} sur ${totalQuestions}.</p>
        <button onclick="showCorrections()" class="btn">Voir les corrections</button>
    `;
}

// Fonction pour afficher les corrections
function showCorrections() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <h2>Corrections</h2>
        ${questions.map((question, index) => `
            <div>
                <h3>${question.question}</h3>
                ${question.options.map((option) => `
                    <div>
                        <input type="checkbox" ${option === question.answer ? 'checked' : ''} disabled>
                        <label>${option}</label>
                    </div>
                `).join('')}
            </div>
        `).join('')}
    `;
}

// Fonction pour démarrer le quiz après avoir rempli le formulaire
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startTimer();
    showQuestion();
});

// Fonction pour démarrer le minuteur
function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}


