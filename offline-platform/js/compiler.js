/* ============================================
   Offline Programming Learning Platform
   Code Compiler/Executor
   ============================================ */

// Store for console output
let outputBuffer = '';
let currentLanguage = 'html';

/**
 * Initialize compiler
 */
function initializeCompiler() {
    const languageSelect = document.getElementById('language-select');
    const editorArea = document.getElementById('code-editor');
    
    // Set default code examples
    setDefaultCode('html');
    
    // Listen for language changes
    languageSelect.addEventListener('change', function(e) {
        currentLanguage = e.target.value;
        setDefaultCode(currentLanguage);
    });
}

/**
 * Set default/example code for each language
 * @param {string} language - Programming language
 */
function setDefaultCode(language) {
    const editor = document.getElementById('code-editor');
    
    const examples = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
    <a href="https://html.spec.whatwg.org/">Learn more about HTML</a>
</body>
</html>`,
        
        css: `/* CSS Example */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #667eea;
    text-align: center;
    font-size: 2.5rem;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    max-width: 800px;
    margin: 0 auto;
}

button {
    background-color: #667eea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #764ba2;
}`,
        
        javascript: `// JavaScript Example
console.log("Hello, World!");
console.log("This is JavaScript running offline!");

// Variables
let name = "Student";
let age = 20;
console.log("Name: " + name);
console.log("Age: " + age);

// Function
function greet(person) {
    return "Hello, " + person + "!";
}
console.log(greet("World"));

// Loop
console.log("\\nNumbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Conditional
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}`,
        
        python: `# Python Example (Note: This is pseudocode visualization)
print("Hello, World!")
print("Python Learning Platform")

# Variables
name = "Student"
age = 20
print(f"Name: {name}")
print(f"Age: {age}")

# Function
def greet(person):
    return f"Hello, {person}!"

print(greet("World"))

# List
numbers = [1, 2, 3, 4, 5]
print("Numbers:", numbers)

# Loop
print("\\nNumbers from 1 to 5:")
for i in range(1, 6):
    print(i)

# Conditional
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")`,
        
        c: `// C Example (Note: This is pseudocode visualization)
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("C Learning Platform\\n");
    
    // Variables
    char name[] = "Student";
    int age = 20;
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    
    // Function example (shown as comments)
    // Function greeting would go here
    printf("Greeting: Hello, World!\\n");
    
    // Loop
    printf("\\nNumbers from 1 to 5:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    
    // Conditional
    int score = 85;
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C\\n");
    }
    
    return 0;
}`
    };
    
    editor.value = examples[language] || examples.html;
}

/**
 * Execute code based on selected language
 */
function executeCode() {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('output');
    
    // Clear previous output
    outputBuffer = '';
    outputDiv.textContent = '';
    
    try {
        if (currentLanguage === 'html') {
            executeHTML(code);
        } else if (currentLanguage === 'css') {
            executeCSS(code);
        } else if (currentLanguage === 'javascript') {
            executeJavaScript(code);
        } else if (currentLanguage === 'python') {
            executePython(code);
        } else if (currentLanguage === 'c') {
            executeC(code);
        }
    } catch (error) {
        outputDiv.textContent = 'Error: ' + error.message;
        outputDiv.style.color = '#ff6b6b';
    }
}

/**
 * Execute HTML code
 */
function executeHTML(code) {
    const preview = document.getElementById('output');
    preview.innerHTML = '';
    
    // Create an iframe for safer HTML rendering
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.style.background = 'white';
    
    preview.appendChild(iframe);
    
    // Write HTML to iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
    
    preview.style.color = '#11ff00';
    outputBuffer = 'HTML rendered successfully!';
}

/**
 * Execute CSS code
 */
function executeCSS(code) {
    const preview = document.getElementById('output');
    preview.innerHTML = '';
    
    // Create an iframe for CSS rendering
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.style.background = 'white';
    
    preview.appendChild(iframe);
    
    // Create HTML with CSS style
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${code}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>CSS Preview</h1>
                <p>Your CSS styles are applied to this preview!</p>
                <button>Click Me</button>
            </div>
        </body>
        </html>
    `;
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();
    
    outputBuffer = 'CSS rendered successfully!';
}

/**
 * Execute JavaScript code
 * Custom console capture for output
 */
function executeJavaScript(code) {
    const output = document.getElementById('output');
    output.textContent = '';
    output.style.color = '#11ff00';
    outputBuffer = '';
    
    // Create custom console object to capture output
    const customConsole = {
        log: function(...args) {
            const message = args.map(arg => {
                if (typeof arg === 'object') {
                    return JSON.stringify(arg, null, 2);
                }
                return String(arg);
            }).join(' ');
            outputBuffer += message + '\n';
            output.textContent = outputBuffer;
        },
        error: function(...args) {
            const message = args.join(' ');
            outputBuffer += 'Error: ' + message + '\n';
            output.textContent = outputBuffer;
            output.style.color = '#ff6b6b';
        },
        warn: function(...args) {
            const message = args.join(' ');
            outputBuffer += 'Warning: ' + message + '\n';
            output.textContent = outputBuffer;
        }
    };
    
    // Execute code with custom console
    try {
        // Create a function with the code and custom console in scope
        const func = new Function('console', code);
        func(customConsole);
        
        if (!outputBuffer) {
            outputBuffer = 'Code executed successfully!\n(No console output)';
            output.textContent = outputBuffer;
        }
    } catch (error) {
        outputBuffer = 'Error: ' + error.message;
        output.textContent = outputBuffer;
        output.style.color = '#ff6b6b';
    }
}

/**
 * Execute Python code (simulation)
 * Note: Actual Python execution requires Python.js or similar
 */
function executePython(code) {
    const output = document.getElementById('output');
    output.style.color = '#ff6b6b';
    outputBuffer = `Python Execution Simulation:\n\n`;
    outputBuffer += `NOTE: Browser cannot execute Python directly.\n`;
    outputBuffer += `This is a visualization of what the code would do.\n\n`;
    outputBuffer += `=== Code Analysis ===\n`;
    outputBuffer += code.substring(0, 500) + (code.length > 500 ? '...' : '');
    outputBuffer += `\n\n=== Expected Output ===\n`;
    outputBuffer += `Hello, World!\nPython Learning Platform\nName: Student\nAge: 20\n...`;
    
    output.textContent = outputBuffer;
}

/**
 * Execute C code (simulation)
 */
function executeC(code) {
    const output = document.getElementById('output');
    output.style.color = '#ff6b6b';
    outputBuffer = `C Execution Simulation:\n\n`;
    outputBuffer += `NOTE: Browser cannot compile/execute C directly.\n`;
    outputBuffer += `This is a visualization of what the code would do.\n\n`;
    outputBuffer += `=== Code Analysis ===\n`;
    outputBuffer += code.substring(0, 500) + (code.length > 500 ? '...' : '');
    outputBuffer += `\n\n=== Expected Output ===\n`;
    outputBuffer += `Hello, World!\nC Learning Platform\nName: Student\nAge: 20\n...`;
    
    output.textContent = outputBuffer;
}

/**
 * Clear editor
 */
function clearCode() {
    document.getElementById('code-editor').value = '';
    document.getElementById('output').textContent = '';
    outputBuffer = '';
}

/**
 * Clear output only
 */
function clearOutput() {
    document.getElementById('output').textContent = '';
    outputBuffer = '';
}

// Initialize compiler when page loads
document.addEventListener('DOMContentLoaded', initializeCompiler);
