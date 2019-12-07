function myFunction() {
	var hour = new Date().getHours();
	var greeting;
	if(hour < 18) {
		greeting = "Good Day!";
	} else {
		greeting = "Good Evening!";
	}

	document.getElementById("demo").innerHTML = greeting;
}
