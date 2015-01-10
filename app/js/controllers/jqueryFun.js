function changeClass (el) {
	$(el)
		.parent()
		.children()
		.removeClass('hoverAdselected')
		.addClass('hoverAd');
	$(el)
		.removeClass('hoverAd')
		.addClass('hoverAdselected');
}