	$(function() {
		var offsetPixels = $('.sidebarBox').outerHeight() + 30;

		$(window).scroll(function() {
			if ( $(window).scrollTop() > offsetPixels ) {
				$('.scrollingBox').css({
					'position': 'fixed',
					'top': '50px'
				});
			} else {
				$('.scrollingBox').css({
					'position': 'static'
				});
			}
		});
	});
