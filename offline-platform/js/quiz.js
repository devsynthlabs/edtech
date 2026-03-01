/* ============================================
   Offline Programming Learning Platform
   Quiz System
   ============================================ */

// Quiz questions database
const quizQuestions = {
    html: [
        {
            question: 'Which tag is used to define the main heading in HTML?',
            options: ['<header>', '<h1>', '<heading>', '<main>'],
            correct: 1,
            explanation: 'The <h1> tag defines the main/largest heading in HTML'
        },
        {
            question: 'What does HTML stand for?',
            options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
            correct: 0,
            explanation: 'HTML stands for HyperText Markup Language'
        },
        {
            question: 'Which attribute is used to provide a unique identifier to an element?',
            options: ['class', 'id', 'name', 'unique'],
            correct: 1,
            explanation: 'The id attribute provides a unique identifier for HTML elements'
        },
        {
            question: 'What is the correct syntax for creating a line break in HTML?',
            options: ['<break>', '<lb>', '<br>', '<line>'],
            correct: 2,
            explanation: 'The <br> tag is used to create a line break in HTML'
        },
        {
            question: 'Which tag is used to create a hyperlink in HTML?',
            options: ['<link>', '<a>', '<href>', '<url>'],
            correct: 1,
            explanation: 'The <a> tag is used to create hyperlinks in HTML'
        }
    ],
    css: [
        {
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'font-color', 'color', 'text-style'],
            correct: 2,
            explanation: 'The color property is used to change text color in CSS'
        },
        {
            question: 'What does the box model in CSS consist of?',
            options: ['Border only', 'Margin, Border, Padding, Content', 'Width and Height', 'Background only'],
            correct: 1,
            explanation: 'The box model consists of Content, Padding, Border, and Margin'
        },
        {
            question: 'Which CSS selector selects elements by id?',
            options: ['.selector', '#selector', '*selector', '[selector]'],
            correct: 1,
            explanation: 'The # symbol is used to select elements by id in CSS'
        },
        {
            question: 'How do you apply CSS to an HTML element inline?',
            options: ['<style>', '<css>', 'style attribute', '<link>'],
            correct: 2,
            explanation: 'Use the style attribute to apply CSS inline to HTML elements'
        },
        {
            question: 'What CSS property controls the space outside an element?',
            options: ['padding', 'margin', 'border', 'spacing'],
            correct: 1,
            explanation: 'The margin property controls the space outside an element'
        }
    ],
    javascript: [
        {
            question: 'How do you declare a variable in JavaScript?',
            options: ['var x = 5', 'x = 5', 'variable x = 5', 'v x = 5'],
            correct: 0,
            explanation: 'Variables in JavaScript can be declared using var, let, or const'
        },
        {
            question: 'Which method is used to display output in JavaScript?',
            options: ['print()', 'output()', 'console.log()', 'display()'],
            correct: 2,
            explanation: 'console.log() is used to display output in JavaScript'
        },
        {
            question: 'What is the correct way to create a function in JavaScript?',
            options: ['function myFunc() {}', 'def myFunc() {}', 'func myFunc() {}', 'function: myFunc {}'],
            correct: 0,
            explanation: 'Functions are created using the function keyword in JavaScript'
        },
        {
            question: 'How do you check if a variable is equal to a specific value?',
            options: ['x = 5', 'x == 5', 'x === 5', 'Both x == 5 and x === 5'],
            correct: 3,
            explanation: 'Both == and === can be used, but === is preferred for strict equality'
        },
        {
            question: 'Which loop structure repeats a block while a condition is true?',
            options: ['for loop', 'if loop', 'while loop', 'do loop'],
            correct: 2,
            explanation: 'The while loop repeats a block of code while a condition is true'
        }
    ],
    python: [
        {
            question: 'What is the correct syntax to print in Python?',
            options: ['print "Hello"', 'console.log("Hello")', 'print("Hello")', 'output("Hello")'],
            correct: 2,
            explanation: 'In Python, use print() function with parentheses'
        },
        {
            question: 'Which keyword is used to create a function in Python?',
            options: ['function', 'func', 'def', 'define'],
            correct: 2,
            explanation: 'The def keyword is used to define functions in Python'
        },
        {
            question: 'How do you create a list in Python?',
            options: ['list[1,2,3]', '[1,2,3]', '(1,2,3)', '{1,2,3}'],
            correct: 1,
            explanation: 'Lists in Python are created using square brackets [1,2,3]'
        },
        {
            question: 'What is the correct way to create an if statement in Python?',
            options: ['if x > 5 {', 'if (x > 5)', 'if x > 5:', 'if x > 5 then:'],
            correct: 2,
            explanation: 'Python uses if x > 5: syntax for conditional statements'
        },
        {
            question: 'Which loop structure is commonly used for iterating over a sequence?',
            options: ['while loop', 'for loop', 'do-while loop', 'switch loop'],
            correct: 1,
            explanation: 'The for loop is used to iterate over sequences in Python'
        }
    ],
    c: [
        {
            question: 'Which function is the entry point of a C program?',
            options: ['start()', 'main()', 'init()', 'run()'],
            correct: 1,
            explanation: 'The main() function is the entry point of a C program'
        },
        {
            question: 'What is the correct syntax for printing in C?',
            options: ['print()', 'echo()', 'printf()', 'output()'],
            correct: 2,
            explanation: 'The printf() function is used to print output in C'
        },
        {
            question: 'How do you declare an integer variable in C?',
            options: ['int x;', 'integer x;', 'i x;', 'num x;'],
            correct: 0,
            explanation: 'Integer variables in C are declared using the int keyword'
        },
        {
            question: 'What header file is required to use printf()?',
            options: ['<output.h>', '<stdio.h>', '<print.h>', '<io.h>'],
            correct: 1,
            explanation: 'The stdio.h header provides input/output functions in C'
        },
        {
            question: 'What is the return type of the main function in C?',
            options: ['void', 'int', 'char', 'bool'],
            correct: 1,
            explanation: 'The main() function in C returns an integer status code'
        }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizSubmitted = false;

/**
 * Initialize quiz
 */
function initializeQuiz() {
    // Get course from sessionStorage or URL parameter
    const course = sessionStorage.getItem('quizCourse') || 'html';
    currentQuiz = quizQuestions[course] || quizQuestions.html;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.length).fill(null);
    quizSubmitted = false;
    
    renderQuiz();
}

/**
 * Render current quiz question
 */
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    
    if (quizSubmitted) {
        renderResults();
        return;
    }
    
    // Render all questions
    currentQuiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        
        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            const checked = userAnswers[index] === optIndex ? 'checked' : '';
            optionsHTML += `
                <div class="option">
                    <label>
                        <input type="radio" name="question-${index}" value="${optIndex}" ${checked} onchange="selectAnswer(${index}, ${optIndex})">
                        ${option}
                    </label>
                </div>
            `;
        });
        
        questionDiv.innerHTML = `
            <div class="question-number">Question ${index + 1} of ${currentQuiz.length}</div>
            <div class="question-text">${q.question}</div>
            <div class="options">${optionsHTML}</div>
        `;
        
        quizContainer.appendChild(questionDiv);
    });
}

/**
 * Select answer for a question
 * @param {number} questionIndex - Index of the question
 * @param {number} optionIndex - Index of selected option
 */
function selectAnswer(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
}

/**
 * Submit quiz
 */
function submitQuiz() {
    // Check if all questions are answered
    if (userAnswers.includes(null)) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    quizSubmitted = true;
    renderQuiz();
}

/**
 * Render quiz results
 */
function renderResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    
    // Calculate score
    let score = 0;
    currentQuiz.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });
    
    const percentage = Math.round((score / currentQuiz.length) * 100);
    const resultMessage = percentage >= 80 ? 
        'Excellent! You have a great understanding!' :
        percentage >= 60 ?
        'Good job! Keep practicing to improve!' :
        'Keep learning! Review the material and try again!';
    
    // Render all questions with results
    currentQuiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        
        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            const isCorrect = optIndex === q.correct;
            const isUserAnswer = optIndex === userAnswers[index];
            let optionClass = '';
            
            if (isCorrect) {
                optionClass = 'correct';
            } else if (isUserAnswer && !isCorrect) {
                optionClass = 'incorrect';
            }
            optionClass += ' disabled';
            
            optionsHTML += `
                <div class="option ${optionClass}">
                    <label>
                        <input type="radio" name="question-${index}" value="${optIndex}" disabled ${isUserAnswer ? 'checked' : ''}>
                        ${option}
                        ${isCorrect ? ' ✓' : ''}
                        ${isUserAnswer && !isCorrect ? ' ✗' : ''}
                    </label>
                </div>
            `;
        });
        
        questionDiv.innerHTML = `
            <div class="question-number">Question ${index + 1} of ${currentQuiz.length}</div>
            <div class="question-text">${q.question}</div>
            <div class="options">${optionsHTML}</div>
            ${userAnswers[index] !== q.correct ? `<div style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 5px; color: #333;"><strong>Explanation:</strong> ${q.explanation}</div>` : ''}
        `;
        
        quizContainer.appendChild(questionDiv);
    });
    
    // Add result summary
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result-section';
    resultDiv.innerHTML = `
        <h2>Quiz Results</h2>
        <div class="score">${score} / ${currentQuiz.length}</div>
        <div style="font-size: 1.3rem; margin-bottom: 15px;">${percentage}%</div>
        <div class="result-message">${resultMessage}</div>
        <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 20px;">Retake Quiz</button>
        <button class="btn btn-secondary" onclick="goToDashboard()" style="margin-top: 20px; margin-left: 10px;">Back to Dashboard</button>
    `;
    
    quizContainer.appendChild(resultDiv);
    
    // Hide submit button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.style.display = 'none';
    }
}

/**
 * Reset quiz
 */
function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.length).fill(null);
    quizSubmitted = false;
    document.getElementById('submit-btn').style.display = 'block';
    renderQuiz();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
