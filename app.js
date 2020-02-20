//  toglogchiin eelj
var activePlayer = 0;

// toglogchiin tugluulsan onoo

var scores = [0, 0];

// toglogchiin eeljiin onoo

var roundScore = 0;

// togloomiin beltgel

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;


document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// shoonii zurag heseg

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

// shoog shideh event
document.querySelector('.btn-roll').addEventListener('click', function () {
    // shoonii ali talaaraa buusan eseh
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shoonii zurag heseg
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';

    // toglogchiin eeljiin onoog gargah
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        switchToNextPlayer()
    }
});

// hold tovchnii event
document.querySelector('.btn-hold').addEventListener('click', function () {

    scores[activePlayer] = scores[activePlayer] + roundScore;

    if (scores[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
    } else {
        switchToNextPlayer();
    }

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


    switchToNextPlayer()
});

// new game event
// document.querySelector('.btn-new').addEventListener('click', function(){

// })