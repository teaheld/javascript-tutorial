function myFunction() {
	var str = document.getElementById("demo").innerHTML;
	var txt = str.replace("Microsoft", "W3Schools");
	
	document.getElementById("demo").innerHTML = txt;
}
