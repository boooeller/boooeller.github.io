$(function() {

	$('a.fancybox').fancybox({
		overlayColor: 'red',
		fontSize: '30px'
	});

});





































// $(function() {

// 	var $links = $('.menu a')

	
// 	$links.hover(
// 	  function() {
// 		var $submenu = $(this).siblings('.submenu');
// 	    $submenu.show();
// 	  }, 
// 	  function() {
// 		// var $submenu = $(this).siblings('.submenu');
// 	    $submenu.hide();
// 	  }
// 	);

// 	});







// $(function() {
//         $( '.dropdown' ).hover(
//             function(){
//                 $(this).children('.submenu').slideDown(300);
//                 // $(this).children('.submenu').css('background', 'black');

//             },
//             function(){
//                 $(this).children('.submenu').slideUp(300);
//             }
//         );

// 		$( 'nav, .submenu li' ).mouseenter(
// 			function () {
// 				$(this).animate({
// 					backgroundColor:"#e09494",
// 			}, 500 );
// 		});

// 		$( 'nav, .submenu li' ).mouseleave(
// 			function() {
// 				$(this).animate({
// 					backgroundColor: "#ff6464",
// 			}, 500 );
// 		});

// });


// $("select").selectbox();






























// function slideLeft(el, duration, slideLength) {
// 	var leftPosition = parseInt(el.style.left) || 0;
// 	var time = 0;
// 	var fps = 50;

// 	var interval = setInterval(function() {

// 		if (time > duration) {
// 			clearInterval(interval);
// 		}

// 		leftPosition += slideLength/(duration/fps);
// 		time += duration/fps;
// 		el.style.left = leftPosition + 'px';

// 	}, duration/fps);
// };


// var box = document.querySelector('.js-box');

// box.addEventListener('click', function() {
// 	slideLeft(box, 1000, 200);
// });



// $('.jquery-box').on('click', function() {
// 	$(this).animate({
// 		left: '+=300'
// 	}, 1000, 'easeInOutElastic');
// });

// $('.css-box').on('click', function() {
// 	$(this).toggleClass('css-box-animated');
// })






































// $(function() {

// 	var $input1 = $('#firstname');
// 	var $input2 = $('#lastname');
// 	var $input3 = $('#address');
// 	var $help1 = $('.help1');
// 	var $help2 = $('.help2');
// 	var $help3 = $('.help3');
// 	var $button = $('button')
// 	var $help = $('.help')

// 	$input1.hover(
//  		function() {
// 			$help1.fadeIn(500);
//  		},
//  		function() {
// 			$help1.fadeOut(500);
// 		}
// 	);

// 	$input2.hover(
//  		function() {
// 			$help2.fadeIn(500);
//  		},
//  		function() {
// 			$help2.fadeOut(500);
// 		}
// 	);

// 	$input3.hover(
//  		function() {
// 			$help3.fadeIn(500);
//  		},
//  		function() {
// 			$help3.fadeOut(500);
// 		}
// 	);

// 	$button.on('click', function() {
// 		$help.fadeIn(500);
// 	})
// });
















































// console.log(jQuery);



// $(function () {
	
// 	var $element = $('.wrapper');

// 	// $element.removeClass('wrapper');

// 	var $inputs = $('a'); 

// 	// console.log($element);

// 	$inputs.addClass('red');

// 	$inputs
// 		.css({
// 			color: 'white',
// 			background: 'black'
// 		})
// 		.attr({
// 			href: 'http://google.com',
// 			target: '_blank'
// 		})
		
// 	$inputs.remove();

// 	$('.wrapper').append($inputs);

// 	// $inputs.hover(
// 	// 	function() {
// 	// 	$(this).css('color', 'red');
// 	// 	},
// 	// 	function() {
// 	// 	$(this).css('color', 'green');
// 	// 	}
// 	// );

// 	$inputs.on('click', function(event) {
// 		$(this).animate({
// 			opacity: 0
// 		}, 2000, function() {
// 			alert('animation comleted');	
// 		})
// 	});

// });













































// var startButton = document.getElementById('start');
// var clearButton = document.getElementById('clear');
// var mainboard = document.querySelector('.mainboard');
// var miliboard = document.querySelector('.miliboard');




// var t = 0;

// function a(){
//     document.getElementById('clock').innerHTML = t;
//     t++;
//     setTimeout("a()", 10);
// };

// a();







// var i = 0

// setTimeout("i", 10);
// return i++;
// console.log(i);








// function createCounter() {

// 	var	count = 1;

// 	eval(count+5); 

// 	console.log(count);	
// }

// createCounter();

// var newCounter = createCounter();	

// console.log(newCounter);

// newCounter();
// newCounter();
// var result = newCounter();	

// console.log	(result);














// function calculateLength(r) {
// 	// length = 2 * PI * r
// 	var PI = 3.14;
// 	var length = 2 * PI * r;
// 	console.log(length);
// }

// calculateLength(5);












// var double = new Function('a', 'console.log(a*2)');

// double(2);

// var element = document.getElementById('text');

// console.log(element);

// element.addEventListener('click', function() {
// 	alert('test');
// }); 










// //function expression
// var double = function (a) {
// 	console.log(a * 2);
// }	

// double(3);

// triple(11);

// // function declaration
// function triple (a) {
// 	console.log(a*3);
// }

// triple(10);


// var userFunction;

// if (+prompt('Введите число:')) {
// 	userFunction = function	() {
// 		alert(1);	
// 	}		
// } else {
// 	userFunction = function	() {
// 		alert(0);
// 	}
// }

// userFunction(0);

































// call/apply
// calculate.call(context, argl, ...);

// function calculateMoney(a, b) {
// 	console.log("I am " + this.firstName + ' ' + this.lastName + ' have ' + (a + b) + ' dollars')
// }


// var context = {
// 	firstName: 'Vasya',
// 	lastName: 'Pupkin'
// };

// calculateMoney.call(context, 5, 3);
// calculateMoney.apply(context, [5, 3]);

// function printArguments() {
// 	var args = [].slice.call(arguments);

// 	args.push('test');

// 	console.log(args);

// }

// printArguments(1, 2, 3);


// var a = {};
// var b = [];

// var c = new Object();
// var d = new Array(1, 2, 3, 'test');
// var str = new String('test123');

// console.log(c);
// console.log(d);
// console.log(str);

// function Animal (newName, newColor) {
// 	var self = this;

// 	console.log("I'm constructimg an animal!");
// 	alert('test');

// 	newName = newName.toUpperCase();

// 	self.name = newName;
// 	self.color = newColor;
// 	self.noise = function () {
// 		alert("Hello, I'm " + self.name);
// 	}
// }

// var dog = new Animal('Rex', 'white');

// console.log(dog);
// dog.noise();

// var f = $(":disabled");
// console.log(f);