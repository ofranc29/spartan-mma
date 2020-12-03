// Convert CM to M
function convertHeight(cm) {
	return cm / 100;
}

// Cache Event Elements
var calculate = $('#calculate');
var result = $('#xs-bmi-info');

result.fadeOut();

// RENDER SELECTED UNIT
calculate.on('click', function (e) {
	e.preventDefault();

	var weight = $('#xs-weight').val();
	var height = $('#xs-height').val();
	var height = convertHeight(height);

	if (height !== '' && weight !== '') {
		bmi = parseFloat( weight / (height * height) ).toFixed(2);

		if (bmi > 30) {
			result.html('<div class="xs-icon bg-danger"><span class="icon icon-thumbs-down"></span></div><p> <span class="text-danger"><strong>Oops! You are Obese.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		} else if (bmi > 25) {
			result.html('<div class="xs-icon bg-warning"><span class="icon icon-thumbs-down"></span></div><p> <span class="text-warning"><strong>Oops! You are Overweight.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		} else if (bmi < 18.5) {
			result.html('<div class="xs-icon bg-info"><span class="icon icon-thumbs-down"></span></div><p> <span class="text-info"><strong>Oops! You are Underweight.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		} else {
			result.html('<div class="xs-icon xs-green-bg"><span class="icon icon-thumbs-up"></span></div><p> <span class="xs-green-color"><strong>Nice! You are healthy.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		}
	}
});