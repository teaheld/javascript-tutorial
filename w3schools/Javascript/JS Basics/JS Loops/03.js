var txt = "";
var person = {
	fname : "John",
	lname : "Doe",
	age : 25
};
for(x in person) {
	txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
