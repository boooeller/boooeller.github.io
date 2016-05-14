$(function() {

	var $link1 = $('.link1');
	var $link2 = $('.link2');
	var $link3 = $('.link3');
	var $tab1 = $('.text1');
	var $tab3 = $('.text3');
	var $tab2 = $('.text2');

	$link1.on('click', function(e) {
		$tab1.slideDown(500);
		$tab2.hide();
		$tab3.hide();
	});

	$link2.on('click', function(e) {
		$tab2.slideDown(500);
		$tab1.hide();
		$tab3.hide();
	});

	$link3.on('click', function(e) {
		$tab3.slideDown(500);
		$tab1.hide();
		$tab2.hide();
	});
});
