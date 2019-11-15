var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var i, len, text;
for(i = 0, len = cars.length, text = ""; i < len; i++) {
	text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
