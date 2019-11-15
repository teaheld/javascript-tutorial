var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var i;
for(i = 0; i < cars.length; i++) {
	text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
