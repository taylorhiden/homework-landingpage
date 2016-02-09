/* User clicks on dropdown menu
User chooses city from dropdown menu
User clicks on city name
Background image changes accordingly */


$(document).ready(function() {
	var images = [
		'NYC',
		'SF',
		'LA',
		'ATX',
		'SYD'
	];

	var currentImage= images[0];


//Adds options to dropdown list
for ( var i = 0; i < images.length ; i++ )  {
	$('#city-type').append('<option>' + images[i] + '</option>');
}

//Event for changing background according to dropdown menu choice
$('#city-type').change(function() {

	var city = $('#city-type').val();

	if (city == 'NYC') {
		$('body').removeClass().addClass('nyc');
	} else if (city == 'SF') {
		$('body').removeClass().addClass('sf');
	} else if (city == 'LA') {
		$('body').removeClass().addClass('la');
	} else if (city == 'ATX') {
		$('body').removeClass().addClass('atx');
	} else if (city == 'SYD') {
		$('body').removeClass().addClass('syd');
	}

});





	});


