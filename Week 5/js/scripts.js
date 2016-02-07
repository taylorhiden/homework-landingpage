/* User types in name of city
Get value of city name
User presses submit
Show background of new city */

$(document).ready(function() {

$('form').submit(changeCity);

//when the user pushes the submit button
//the background of the document will change

function changeCity() {
	event.preventDefault();

	var city = $('#city-type').val();

	//if the city is NYC, change to nyc.jpg
	//if the city is SF, chance to sf.jpg
	//if the city is LA, change to la.jpg
	//if the city is Austin, change to austin.jpg
	//if the city is Sydney, change to sydney.jpg

	if (city == 'NYC'|| city == 'New York City'|| city == 'New York') { 
		$('body').removeClass().addClass('nyc');
	} else if (city == 'San Francisco'|| city == 'SF'|| city == 'Bay Area') {
		$('body').removeClass().addClass('sf');
	} else if (city == 'Los Angeles'|| city == 'LA'|| city == 'LAX') {
		$('body').removeClass().addClass('la');
	} else if (city == 'Austin'|| city == 'ATX') {
		$('body').removeClass().addClass('austin');
	} else if (city == 'Sydney'|| city == 'SYD') {
		$('body').removeClass().addClass('sydney');
	} else {
		$('body').removeClass();
	}



}



});