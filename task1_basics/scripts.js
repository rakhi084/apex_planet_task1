// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleIngredientsBtn = document.querySelector('.toggle-ingredients');
    const ingredientsList = document.querySelector('.ingredients-list');
    const toggleStepsBtn = document.querySelector('.toggle-steps');
    const stepsList = document.querySelector('.steps-list');
    const startCookingBtn = document.querySelector('.start-cooking');
    const progressBar = document.querySelector('.progress-bar');

    toggleIngredientsBtn.addEventListener('click', function() {
        ingredientsList.classList.toggle('hidden');
        toggleIngredientsBtn.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
    });

    toggleStepsBtn.addEventListener('click', function() {
        stepsList.classList.toggle('hidden');
        toggleStepsBtn.textContent = stepsList.classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
    });

    startCookingBtn.addEventListener('click', function() {
        let currentStep = 0;
        const steps = document.querySelectorAll('.steps-list li');

        function highlightStep(index) {
            steps.forEach(step => step.style.backgroundColor = '');
            if (index < steps.length) {
                steps[index].style.backgroundColor = '#ffefef';
                currentStep = index;
            } else {
                progressBar.classList.add('active');
            }
        }

        highlightStep(currentStep);

        steps.forEach((step, index) => {
            step.addEventListener('click', () => highlightStep(index + 1));
        });
    });
});





document.querySelector('.print-recipe').addEventListener('click', function() {
    window.print();
});