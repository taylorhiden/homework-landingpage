$('.readmore').click(readMore);
$('.readless').click(readLess);
$('.learnmore').click(learnMore);

function readMore() {
	$('#show_this_on_click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
}

function readLess() {
	$('#show_this_on_click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

function learnMore() {
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
}