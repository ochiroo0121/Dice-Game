//  toglogchiin eelj

var activePlayer = 1;

// toglogchiin tugluulsan onoo

var scores = [0, 0];

// toglogchiin eeljiin onoo

var roundScore = 0;

// shoonii ali talaaraa buusan eseh

var dice = Math.floor(Math.random() * 6) + 1;

// togloomiin beltgel
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

