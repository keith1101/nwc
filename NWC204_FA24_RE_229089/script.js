// ==================== GLOBAL STATE ====================
let currentData = [];
let userProgress = JSON.parse(localStorage.getItem('nwc204_progress')) || {};
let currentFilters = {
    category: 'all',
    type: 'all',
    search: ''
};

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions-container');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');
    const typeFilter = document.getElementById('type-filter');

    // Initialize
    currentData = [...examData];
    initializeCategoryFilter();
    renderQuestions(currentData);
    updateStatistics();

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase();
        applyFilters();
    });

    // Category filter
    categoryFilter.addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        applyFilters();
    });

    // Type filter
    typeFilter.addEventListener('change', (e) => {
        currentFilters.type = e.target.value;
        applyFilters();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.activeElement === searchBar) {
            searchBar.value = '';
            currentFilters.search = '';
            applyFilters();
            searchBar.blur();
        }
        if (e.key.toLowerCase() === 'r' && document.activeElement !== searchBar) {
            randomizeQuestions();
        }
    });

});

// ==================== FILTER FUNCTIONS ====================
function initializeCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    const categories = [...new Set(examData.map(item => item.category || 'General'))];
    
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function applyFilters() {
    let filtered = [...examData];

    // Apply search filter
    if (currentFilters.search) {
        filtered = filtered.filter(item => {
            return (
                item.question.toLowerCase().includes(currentFilters.search) ||
                (item.category && item.category.toLowerCase().includes(currentFilters.search)) ||
                (item.explanation && item.explanation.toLowerCase().includes(currentFilters.search)) ||
                (item.options && item.options.some(opt => opt.toLowerCase().includes(currentFilters.search)))
            );
        });
    }

    // Apply category filter
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(item => (item.category || 'General') === currentFilters.category);
    }

    // Apply type filter
    if (currentFilters.type !== 'all') {
        filtered = filtered.filter(item => (item.type || 'single') === currentFilters.type);
    }

    currentData = filtered;
    renderQuestions(currentData);
    updateStatistics();
}

// ==================== RENDER FUNCTIONS ====================
function renderQuestions(data) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';

    if (data.length === 0) {
        questionsContainer.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px;">
                <h3 style="color: var(--warning-color); margin-bottom: 15px;">😔 No Questions Found</h3>
                <p style="font-size: 1.2em;">Try adjusting your filters or search terms.</p>
            </div>`;
        return;
    }

    // Use a document fragment for better performance
    const fragment = document.createDocumentFragment();

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.id = item.id;
        card.dataset.type = item.type || 'single';
        
        const correctIndices = Array.isArray(item.correct) ? item.correct : [item.correct];
        card.dataset.correct = JSON.stringify(correctIndices);
        
        // Check if answered
        const isAnswered = userProgress[item.id] !== undefined;
        const isCorrect = userProgress[item.id] === true;
        
        // Generate answer text
        let answerText = '';
        if (item.options && item.options.length > 0) {
            const correctLetters = correctIndices.map(idx => {
                const option = item.options[idx];
                return option ? option.split('.')[0].trim() : '';
            }).filter(l => l).join(', ');
            answerText = correctLetters;
        }
        
        // Progress indicator
        let progressBadge = '';
        if (isAnswered) {
            progressBadge = isCorrect 
                ? '<span style="color: #7fb069; font-size: 1.2em;">✅ Answered Correctly</span>'
                : '<span style="color: #d45e5e; font-size: 1.2em;">❌ Answered Incorrectly</span>';
        }
        
        // Create Options HTML
        let optionsHtml = '';
        if (item.options && item.options.length > 0) {
            optionsHtml = `<ul class="options-list">
                ${item.options.map(opt => {
                    return `<li class="option-item" onclick="selectOption(this)">${escapeHtml(opt)}</li>`;
                }).join('')}
            </ul>`;
        }

        card.innerHTML = `
            <div class="card-header">
                <span>📌 ID: ${item.id}</span>
                <span>📂 ${escapeHtml(item.category || 'General')}</span>
                <span>🔖 ${item.type === 'multiple' ? 'Multiple Choice' : 'Single Choice'}</span>
                ${progressBadge}
            </div>
            <div class="question-text">${escapeHtml(item.question)}</div>
            ${optionsHtml}
            <button class="toggle-btn" onclick="toggleAnswer(this)">📖 Show Answer</button>
            <div class="answer-section">
                <div class="answer-text">✅ Correct Answer: ${answerText}</div>
                ${item.explanation ? `<div class="explanation-text"><strong>💡 Explanation:</strong> ${escapeHtml(item.explanation)}</div>` : ''}
            </div>
        `;
        fragment.appendChild(card);
    });

    questionsContainer.appendChild(fragment);
    updateStatistics();
}

// Handle Option Selection
function selectOption(optionElement) {
    const card = optionElement.closest('.question-card');
    const questionType = card.dataset.type || 'single';
    const options = card.querySelectorAll('.option-item');
    
    if (questionType === 'multiple') {
        // Multiple choice: toggle selection
        optionElement.classList.toggle('selected');
    } else {
        // Single choice: remove all selections, then select clicked
        options.forEach(opt => opt.classList.remove('selected'));
        optionElement.classList.add('selected');
    }
}

// ==================== STATISTICS FUNCTIONS ====================
function updateStatistics() {
    const totalQuestions = examData.length;
    const showingCount = currentData.length;
    const answeredCount = Object.keys(userProgress).length;
    const correctCount = Object.values(userProgress).filter(v => v === true).length;
    const correctRate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('showing-count').textContent = showingCount;
    document.getElementById('answered-count').textContent = answeredCount;
    document.getElementById('correct-rate').textContent = correctRate + '%';
}

function saveProgress(questionId, isCorrect) {
    userProgress[questionId] = isCorrect;
    localStorage.setItem('nwc204_progress', JSON.stringify(userProgress));
    updateStatistics();
}

// ==================== INTERACTION FUNCTIONS ====================
function toggleAnswer(button) {
    const card = button.closest('.question-card');
    const answerSection = button.nextElementSibling;
    const isVisible = answerSection.classList.contains('visible');
    const questionType = card.dataset.type || 'single';
    const correctIndices = JSON.parse(card.dataset.correct || '[]');
    const options = card.querySelectorAll('.option-item');
    const questionId = card.dataset.id;
    
    if (isVisible) {
        answerSection.classList.remove('visible');
        button.textContent = '📖 Show Answer';
        
        // Reset option colors when hiding
        options.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
        
        // Remove feedback message
        const feedbackDiv = answerSection.querySelector('.feedback-message');
        if (feedbackDiv) {
            feedbackDiv.remove();
        }
    } else {
        answerSection.classList.add('visible');
        button.textContent = '🔍 Hide Answer';
        
        // Get selected options
        const selectedIndices = Array.from(options)
            .map((opt, idx) => opt.classList.contains('selected') ? idx : -1)
            .filter(idx => idx !== -1);
        
        // Check if answer is correct
        let isCorrect = false;
        if (questionType === 'multiple') {
            isCorrect = selectedIndices.length === correctIndices.length &&
                       selectedIndices.every(idx => correctIndices.includes(idx));
        } else {
            isCorrect = selectedIndices.length === 1 && correctIndices.includes(selectedIndices[0]);
        }
        
        // Mark options
        options.forEach((opt, index) => {
            const isCorrectOption = correctIndices.includes(index);
            const isSelected = opt.classList.contains('selected');
            
            if (isCorrectOption) {
                opt.classList.add('correct');
            }
            
            if (isSelected && !isCorrectOption) {
                opt.classList.add('incorrect');
            }
        });
        
        // Show feedback message
        if (selectedIndices.length > 0) {
            let feedbackDiv = answerSection.querySelector('.feedback-message');
            if (!feedbackDiv) {
                feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'feedback-message';
                answerSection.insertBefore(feedbackDiv, answerSection.firstChild);
            }
            
            if (isCorrect) {
                feedbackDiv.textContent = '🎉 Perfect! You got it right!';
                feedbackDiv.className = 'feedback-message success';
                saveProgress(questionId, true);
            } else {
                feedbackDiv.textContent = '❌ Not quite right. Review the correct answer below.';
                feedbackDiv.className = 'feedback-message error';
                saveProgress(questionId, false);
            }
        } else if (questionType === 'multiple') {
            let feedbackDiv = answerSection.querySelector('.feedback-message');
            if (!feedbackDiv) {
                feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'feedback-message';
                answerSection.insertBefore(feedbackDiv, answerSection.firstChild);
            }
            feedbackDiv.textContent = '⚠️ No answers selected. Select your answer(s) first!';
            feedbackDiv.className = 'feedback-message neutral';
        }
        
        // Update card header with progress
        renderQuestions(currentData);
    }
}

// ==================== ACTION BUTTON FUNCTIONS ====================
function randomizeQuestions() {
    // Fisher-Yates shuffle
    for (let i = currentData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentData[i], currentData[j]] = [currentData[j], currentData[i]];
    }
    renderQuestions(currentData);
    showNotification('🎲 Questions randomized!', 'success');
    scrollToTop();
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        userProgress = {};
        localStorage.removeItem('nwc204_progress');
        updateStatistics();
        renderQuestions(currentData);
        showNotification('🔄 Progress reset successfully!', 'success');
    }
}

function showOnlyUnanswered() {
    const answeredIds = Object.keys(userProgress);
    currentData = examData.filter(item => !answeredIds.includes(String(item.id)));
    
    if (currentData.length === 0) {
        showNotification('🎉 Great! You\'ve answered all questions!', 'success');
        currentData = [...examData];
    } else {
        showNotification(`📝 Showing ${currentData.length} unanswered questions`, 'info');
    }
    
    renderQuestions(currentData);
    scrollToTop();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#7fb069' : type === 'error' ? '#d45e5e' : '#d4793c'};
        color: #f4e4c1;
        padding: 15px 25px;
        border: 3px solid #3e2731;
        border-radius: 10px;
        box-shadow: 4px 4px 0px #3e2731;
        z-index: 1000;
        font-size: 1.2em;
        font-family: 'VT323', monospace;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ==================== HELPER FUNCTIONS ====================
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
