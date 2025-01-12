// Glitch Animation Control
window.addEventListener('load', () => {
    const glitchAnimation = document.querySelector('#glitch-animation');
    glitchAnimation.classList.add('start-glitch');

    setTimeout(() => {
        glitchAnimation.classList.remove('start-glitch');
    }, 5000);
});

// Quiz Interaction
const startQuizButton = document.querySelector('#start-quiz-button');
startQuizButton.addEventListener('click', () => {
    const quizSection = document.querySelector('#quiz-section');
    quizSection.style.display = 'block';
    startQuizButton.style.display = 'none';
});

// Quiz Questions
const quizQuestions = [
    {
        question: "What if the world is a simulation?",
        options: ["It's possible", "Highly unlikely", "No way to know", "Only in theory"],
        correctAnswer: 0
    },
    {
        question: "Do you believe in parallel universes?",
        options: ["Yes", "No", "Maybe", "Not sure"],
        correctAnswer: 1
    },
    {
        question: "Can memory be manipulated?",
        options: ["Yes", "No", "Depends on the situation", "Maybe"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.querySelector('#quiz-container');
const quizResult = document.querySelector('#quiz-result');
const nextQuestionButton = document.querySelector('#next-question-button');

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.createElement('h3');
    questionText.textContent = currentQuestion.question;

    const optionsList = document.createElement('ul');
    currentQuestion.options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option;
        optionItem.addEventListener('click', () => {
            if (index === currentQuestion.correctAnswer) {
                quizResult.textContent = "Correct!";
            } else {
                quizResult.textContent = "Wrong! Try again.";
            }
        });
        optionsList.appendChild(optionItem);
    });

    quizContainer.innerHTML = ''; // Clear previous question
    quizContainer.appendChild(questionText);
    quizContainer.appendChild(optionsList);
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        quizResult.textContent = "Congratulations! You've completed the quiz.";
        nextQuestionButton.style.display = 'none';
    }
});

loadQuestion(); // Load the first question

// Interactive Story Simulation
const startStoryButton = document.querySelector('#start-story-button');
startStoryButton.addEventListener('click', () => {
    const storySection = document.querySelector('#story-section');
    storySection.style.display = 'block';
    startStoryButton.style.display = 'none';
});

const storyChoices = [
    {
        text: "You wake up in a world that feels strangely familiar, but something is off.",
        options: [
            { text: "Explore the surroundings", next: 1 },
            { text: "Stay where you are and analyze the situation", next: 2 }
        ]
    },
    {
        text: "As you explore, you notice a strange glitch in the environment. What will you do?",
        options: [
            { text: "Investigate the glitch", next: 3 },
            { text: "Ignore it and continue walking", next: 4 }
        ]
    },
    {
        text: "You start to feel like you're being watched. You hear faint whispers around you.",
        options: [
            { text: "Look for the source of the whispers", next: 5 },
            { text: "Run away from the voices", next: 6 }
        ]
    },
    // More story choices can be added here...
];

let currentStoryIndex = 0;
const storyContainer = document.querySelector('#story-container');
const storyResult = document.querySelector('#story-result');

function loadStory() {
    const currentStory = storyChoices[currentStoryIndex];
    const storyText = document.createElement('p');
    storyText.textContent = currentStory.text;

    const optionsList = document.createElement('ul');
    currentStory.options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option.text;
        optionItem.addEventListener('click', () => {
            currentStoryIndex = option.next;
            if (currentStoryIndex < storyChoices.length) {
                loadStory();
            } else {
                storyResult.textContent = "You've reached the end of the story. Well done!";
            }
        });
        optionsList.appendChild(optionItem);
    });

    storyContainer.innerHTML = ''; // Clear previous story
    storyContainer.appendChild(storyText);
    storyContainer.appendChild(optionsList);
}

loadStory(); // Load the first story choice
