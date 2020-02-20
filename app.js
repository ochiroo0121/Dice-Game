//  toglogchiin eelj

var activePlayer = 1;

// toglogchiin tugluulsan onoo

var scores = [0, 0];

// toglogchiin eeljiin onoo

var roundScore = 0;

// togloomiin beltgel

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;


document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector('.dice');

diceDom.style.display = "none";

// shoonii event
document.querySelector('.btn-roll').addEventListener('click', function () {
    // shoonii ali talaaraa buusan eseh
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shoonii zurag heseg
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
});