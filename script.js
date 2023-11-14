let isFirstRoll = true;

// Fonction pour générer les points de chaque nombre
function generateDots(number) {
    const dotsPatterns = {
        1: '<span class="dot center"></span>',
        2: '<span class="dot top-left"></span><span class="dot bottom-right"></span>',
        3: '<span class="dot top-left"></span><span class="dot center"></span><span class="dot bottom-right"></span>',
        4: '<span class="dot top-left"></span><span class="dot top-right"></span><span class="dot bottom-left"></span><span class="dot bottom-right"></span>',
        5: '<span class="dot top-left"></span><span class="dot top-right"></span><span class="dot center"></span><span class="dot bottom-left"></span><span class="dot bottom-right"></span>',
        6: '<span class="dot top-left"></span><span class="dot top-right"></span><span class="dot middle-left"></span><span class="dot middle-right"></span><span class="dot bottom-left"></span><span class="dot bottom-right"></span>'
    };
    return dotsPatterns[number];
}

document.getElementById('rollButton').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var currentRoll = Math.floor(Math.random() * 6) + 1;
    var exercises = ['squat', 'pompe sur les genoux', 'planche toucher épaule', 'échange de passe en appuis unipodal', 'fente latérale',];
    var selectedExercise = exercises[Math.floor(Math.random() * exercises.length)];

    dice.style.animation = 'rollDice 2s infinite linear';

    setTimeout(function() {
        dice.style.animation = 'none';

        dice.querySelector('.front').innerHTML = generateDots(currentRoll);
        dice.querySelector('.back').innerHTML = generateDots(7 - currentRoll);
        dice.querySelector('.right').innerHTML = generateDots(currentRoll === 6 ? 3 : currentRoll === 5 ? 2 : 4);
        dice.querySelector('.left').innerHTML = generateDots(7 - (currentRoll === 6 ? 3 : currentRoll === 5 ? 2 : 4));
        dice.querySelector('.top').innerHTML = generateDots(currentRoll === 6 ? 4 : currentRoll === 5 ? 3 : 2);
        dice.querySelector('.bottom').innerHTML = generateDots(7 - (currentRoll === 6 ? 4 : currentRoll === 5 ? 3 : 2));

        if (!isFirstRoll) {
            document.getElementById('exercise-instruction').innerHTML = `Exercice: <span>${selectedExercise}</span>, répétez ${currentRoll} fois.`;
        } else {
            document.getElementById('exercise-instruction').innerHTML = `Premier lancer: <span>${currentRoll}</span>.`;
            isFirstRoll = false;
        }
    }, 2000);
});