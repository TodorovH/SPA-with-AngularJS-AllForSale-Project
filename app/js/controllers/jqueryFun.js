(function() {
	$(document).ready(function changeClass (el) {
		$(el)
			.parent()
			.children()
			.removeClass('hoverAdselected')
			.addClass('hoverAd');
		$(el)
			.removeClass('hoverAd')
			.addClass('hoverAdselected');
	});

	//$(document).change(function() {
	//	$( ".container" ).scrollTop();
	//});
})();