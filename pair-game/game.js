var game_array = ['red', 'red', 'blue', 'blue', 'green', 'green', 'tomato', 'tomato', 'yellow', 'yellow', 'magenta', 'magenta', 'indigo', 'indigo', 'brown', 'brown', 'lime', 'lime' ];

var howHard = prompt('введите сложность (easy, medium, hard)', '');
var delay;
if (howHard == 'easy') {
	game_array.splice(0, 12);
	delay = 2000;
}  else if (howHard == 'medium') {
	game_array.splice(0, 6);
	delay = 5000;
} else if (howHard == 'hard') {
	alert('ну удачи :)')
	delay = 10000;
}

function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var blockItem = Shuffle(game_array); 
var container = document.querySelector('.jsgame');

var makeItem = function(type) {
	var card = document.createElement( 'div' );
	//console.log(type);
	//card.setAttribute( 'class', 'item ' +type);
	card.classList.add('item', type)	
	card.innerHTML = '<div  class = "flip-container"><div class = "flipper"><div class = "front"></div><div class = "back"></div></div></div>';
	container.appendChild( card );
};

blockItem.forEach(function(type) {
	makeItem(type);
});

// colorGame
var itemCards = [];
var card = document.querySelectorAll('.item');

function pickCard(card) {
	card.classList.add('open');
	itemCards.push(card);
};

var score = 0;

function closeCards() {
	itemCards.forEach(function(card) {
            card.classList.remove('open');
	});
	itemCards.length = 0;
	if (score > 0) {
		score = score - 1;
	}
	console.log('score = ' + score);
	scoreContainer.innerHTML = 'Ваши очки: ' + score;
	
	
};
function hideItemCards(type) {
	itemCards.forEach(function(card) {
            card.setAttribute("style", "visibility: hidden;");
	});
	itemCards.length = 0;
	//var score = 1;
	//alert('+ 1 score');
	score = score + 1;
	console.log('score = ' + score);
	scoreContainer.innerHTML = 'Ваши очки: ' + score;
};

function getType(card) {
	return card.getAttribute("class");
}; 

var scoreContainer =  document.getElementById('score');


		
function handler() {
		if (itemCards.length === 0) {
		pickCard(this);
	} else if (itemCards.length === 1) {
		pickCard(this); 
		console.log(itemCards[0]);
		console.log(itemCards[1]);
		//score = 2;
		//console.log(score);
		if (itemCards[0] === itemCards[1]) {
			//var score = 1;
			//score = score + 1;
			//console.log(score);
			closeCards();
			//alert('yes');
		} else if ( getType(itemCards[0]) === getType(itemCards[1]) && itemCards[0] !== itemCards[1]) {
			setTimeout(hideItemCards, 500);
		} else {
			setTimeout(closeCards, 500);
		}
	}
}



function openItemCardsTest() {
	card.forEach(function(card , i) {
		setTimeout(function() {
			card.classList.add('open');
		}, i * 300);
		
	});
};

function removeItemCardsTest() {
	card.forEach(function(card , i) {
		setTimeout(function() {
			card.classList.remove('open');
		}, i * 300);
		
	});
};


openItemCardsTest()

setTimeout(removeItemCardsTest, delay);


card.forEach(function(card) {
	card.addEventListener('click', handler);
});

