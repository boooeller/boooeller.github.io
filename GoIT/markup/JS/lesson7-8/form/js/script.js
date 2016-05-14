$(function() {

	var $input1 = $('#firstname');
	var $input2 = $('#lastname');
	var $input3 = $('#address');
	var $help1 = $('.help1');
	var $help2 = $('.help2');
	var $help3 = $('.help3');
	var $button = $('button')
	var $help = $('.help')

	$input1.hover(
 		function() {
			$help1.fadeIn(500);
 		},
 		function() {
			$help1.fadeOut(500);
		}
	);

	$input2.hover(
 		function() {
			$help2.fadeIn(500);
 		},
 		function() {
			$help2.fadeOut(500);
		}
	);

	$input3.hover(
 		function() {
			$help3.fadeIn(500);
 		},
 		function() {
			$help3.fadeOut(500);
		}
	);

	$button.on('click', function() {
		$help.fadeIn(500);
	})
});