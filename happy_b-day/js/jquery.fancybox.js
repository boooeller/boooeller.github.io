



(function($) {

	$.fn.fancybox = function(options) {
		
		var defaults = {
			overlayColor: 'black',
			fontSize: '13px'
		};

		var settings = $.extend(defaults, options);

		console.log('defaults', defaults);
		console.log('options', options);
		console.log('settings', settings);


		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;

		function showModal(e) {
			var href = $link.attr('href');
			
			$modal = $('<div class="fancybox-modal"><img src="' + href + '"><p style="font-size:' + settings.fontSize + ';">some text</p></div>');
			$overlay= $('<div class="fancybox-overlay">');
			$overlay.css({
				'background-color': settings.overlayColor
			});

			e.preventDefault();

			$overlay.one('click', hideModal);
			$body.append($overlay);
			$body.append($modal);
		}

		function hideModal() {
			$modal.remove();
			$overlay.remove();
		}	


		$link.on('click', showModal);

		return this;
	}

})(jQuery);