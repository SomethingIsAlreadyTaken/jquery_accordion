$(document).ready(function(){
	'use strict';

	$('.accordion__item:gt(0)').addClass('closed');
	$('.accordion__content:gt(0)').slideUp();

	$('.accordion__toggler').on('click', function(e) {
		e.preventDefault();

		$('.accordion__toggler')
				.not($(this))
				.next('.accordion__content')
				.slideUp()
				.parent()
				.addClass('closed');

		$(this).next('.accordion__content')
			   .slideToggle()
			   .parent()
			   .toggleClass('closed');
	})
});