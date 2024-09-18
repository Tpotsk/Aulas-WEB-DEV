const questions = [
    {
        question: "What is the default port for FTP servers?",
        answers: ["21",'32','124','8080'],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: ["Django", "React", "Flask", "Ruby on Rails"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the <div> tag in HTML?",
        answers: [
            "To create a hyperlink",
            "To embed multimedia content",
            "To display a list of items",
            "To define a division or section in a document"
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following is used to style a webpage?",
        answers: [ "HTML", "SQL", 'CSS', 'XML'],
        correctAnswer: 2
    },
    {
        question: "If you want to scan for services and ports, what tool you would use?",
        answers: ["Metasploit", "Wireshark", "Nmap", "Burp Suite"],
        correctAnswer: 2
    },
    {
        question: "What the 'mov' instruction do in Assembly?",
        answers: ["Add a value to a register", "Subtract a value from a register", "Print a caracter on the terminal", "Move a value to a register"],
        correctAnswer: 3
    },
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ``
    document.getElementById('result').innerHTML = ``
    questions.forEach((q, index) => {
        const div = document.createElement('div')
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
            selectedAnswer.style.color = 'red'
        }
        else {
            
        }
        
        
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length} <br><button onclick='loadQuestions()'>Reset</button>`;
}

window.onload = loadQuestions;