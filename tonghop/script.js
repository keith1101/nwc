document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions-container');
    const searchBar = document.getElementById('search-bar');
    const countDisplay = document.getElementById('count');

    // Initial render
    renderQuestions(examData);

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredData = examData.filter(item => {
            return (
                item.question.toLowerCase().includes(keyword) ||
                item.category.toLowerCase().includes(keyword) ||
                (item.explanation && item.explanation.toLowerCase().includes(keyword))
            );
        });
        renderQuestions(filteredData);
    });

    function renderQuestions(data) {
        questionsContainer.innerHTML = '';
        countDisplay.textContent = data.length;

        if (data.length === 0) {
            questionsContainer.innerHTML = '<p style="text-align:center; color: #888;">No questions found.</p>';
            return;
        }

        // Use a document fragment for better performance with large lists
        const fragment = document.createDocumentFragment();

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.dataset.id = item.id;
            card.dataset.type = item.type || 'single'; // Store question type
            
            // Normalize correct to always be an array for consistent handling
            const correctIndices = Array.isArray(item.correct) ? item.correct : [item.correct];
            card.dataset.correct = JSON.stringify(correctIndices);
            
            // Generate answer text from correct indices
            let answerText = '';
            if (item.options && item.options.length > 0) {
                const correctLetters = correctIndices.map(idx => {
                    const option = item.options[idx];
                    return option ? option.split('.')[0].trim() : '';
                }).filter(l => l).join(', ');
                answerText = correctLetters;
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
                    <span>ID: ${item.id}</span>
                    <span>${escapeHtml(item.category || 'General')}</span>
                </div>
                <div class="question-text">${escapeHtml(item.question)}</div>
                ${optionsHtml}
                <button class="toggle-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="answer-section">
                    <div class="answer-text">Correct Answer: ${answerText}</div>
                    ${item.explanation ? `<div class="explanation-text"><strong>Explanation:</strong> ${escapeHtml(item.explanation)}</div>` : ''}
                </div>
            `;
            fragment.appendChild(card);
        });

        questionsContainer.appendChild(fragment);
    }
});

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

// Global function for the onclick handler
function toggleAnswer(button) {
    const card = button.closest('.question-card');
    const answerSection = button.nextElementSibling;
    const isVisible = answerSection.classList.contains('visible');
    const correctAnswerText = card.dataset.correctAnswer;
    const questionType = card.dataset.type || 'single';
    const correctIndices = JSON.parse(card.dataset.correct || '[]');
    const options = card.querySelectorAll('.option-item');
    
    if (isVisible) {
        answerSection.classList.remove('visible');
        button.textContent = 'Show Answer';
        
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
        button.textContent = 'Hide Answer';
        
        // Check answers using correct indices
        options.forEach((opt, index) => {
            const isCorrect = correctIndices.includes(index);
            const isSelected = opt.classList.contains('selected');
            
            if (isCorrect) {
                opt.classList.add('correct');
            }
            
            if (isSelected && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
        
        // Show result message for multiple choice
        if (questionType === 'multiple') {
            const selectedIndices = Array.from(options)
                .map((opt, idx) => opt.classList.contains('selected') ? idx : -1)
                .filter(idx => idx !== -1);
            
            const isFullyCorrect = 
                selectedIndices.length === correctIndices.length &&
                selectedIndices.every(idx => correctIndices.includes(idx));
            
            // Add feedback message if not already present
            let feedbackDiv = answerSection.querySelector('.feedback-message');
            if (!feedbackDiv) {
                feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'feedback-message';
                answerSection.insertBefore(feedbackDiv, answerSection.firstChild);
            }
            
            if (selectedIndices.length === 0) {
                feedbackDiv.textContent = '⚠️ No answers selected';
                feedbackDiv.className = 'feedback-message neutral';
            } else if (isFullyCorrect) {
                feedbackDiv.textContent = '✓ Correct! All answers selected.';
                feedbackDiv.className = 'feedback-message success';
            } else {
                feedbackDiv.textContent = '✗ Incomplete or incorrect selection';
                feedbackDiv.className = 'feedback-message error';
            }
        }
    }
}

// Helper to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
