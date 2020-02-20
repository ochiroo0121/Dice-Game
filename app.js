var activePlayer;

// toglogchiin tugluulsan onoo

var scores;

// toglogchiin eeljiin onoo

var roundScore;

var NewGame;
// shoonii zurag heseg

var diceDom = document.querySelector('.dice');

function resetGame() {
    NewGame = true;

    activePlayer = 0;

    scores = [0, 0];

    roundScore = 0;

    // togloomiin beltgel

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')

    document.getElementById('name-0').textContent = 'ТОГЛОГЧ 1'
    document.getElementById('name-1').textContent = 'ТОГЛОГЧ 2'

    diceDom.style.display = "none";
};

resetGame();

function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

// shoog shideh event
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (NewGame === true) {
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
            scores[activePlayer] = roundScore = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            switchToNextPlayer()
        }
    } else {
        alert('Тоглоом дууссан байна.. "Шинээр эхлэх" товчийг дарж дахин эхлүүлнэ үү!!!')
    }
});

// hold tovchnii event
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (NewGame === true) {
        scores[activePlayer] = scores[activePlayer] + roundScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            NewGame = false;
            document.getElementById('name-' + activePlayer).textContent = 'ЯЛАГЧ!!!';
        } else {
            switchToNextPlayer()
        }
    } else {
        alert('Тоглоом дууссан байна.. "Шинээр эхлэх" товчийг дарж дахин эхлүүлнэ үү!!!')
    }
});

// new game event
document.querySelector('.btn-new').addEventListener('click', resetGame);