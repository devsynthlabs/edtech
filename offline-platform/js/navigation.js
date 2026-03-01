/* ============================================
   Offline Programming Learning Platform
   Navigation Script
   ============================================ */

/**
 * Navigate to a specific course page
 * @param {string} course - Course name (html, css, js, python, c)
 */
function goToCourse(course) {
    const courseMap = {
        'html': 'html-course.html',
        'css': 'css-course.html',
        'javascript': 'js-course.html',
        'python': 'python-course.html',
        'c': 'c-course.html'
    };
    
    if (courseMap[course]) {
        window.location.href = courseMap[course];
    }
}

/**
 * Navigate to quiz page
 * @param {string} course - Course name for context
 */
function goToQuiz(course) {
    // Store course in sessionStorage for quiz context
    sessionStorage.setItem('quizCourse', course);
    window.location.href = 'quiz.html';
}

/**
 * Navigate back to dashboard
 */
function goToDashboard() {
    window.location.href = 'index.html';
}

/**
 * Navigate to compiler
 */
function goToCompiler() {
    window.location.href = 'compiler.html';
}

/**
 * Initialize page based on current location
 */
function initPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Add active class to current nav item if needed
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPage);
