function findMax() {
	var i;
	var max = -Infinity;
	for(i = 0; i < arguments.length; i++) {
		if(arguments[i] > max) {
			max = arguments[i];
		}
	}

	return max;
}

document.getElementById("demo").innerHTML = findMax(4, 5, 2, 1, 4, 2);
