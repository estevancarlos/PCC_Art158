$(document).ready(function() {

	// Initalize the variable
	var i = 0;

	// Create the array that contains the text
    var haiku = ["The idle sword","Dreams of its battles.","I dream of something else."];

	// Print array values to console for reference
	console.log(haiku[0]);

	// Show the first value of the array
	$('#text').hide().html(haiku[0]).fadeIn();

	// Select a button. Create function for click event
    $('#next').on('click', function() {


        i = (i+1)%haiku.length;
        console.log(haiku[i]);
		$('#text').addClass('primary-text').hide().html(haiku[i]).fadeIn();
    });
});
