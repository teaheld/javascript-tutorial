function myF(x, y) {
	if(y === undefined) {
		y = 0;
	}

	return x * y;
}

document.getElementById("demo").innerHTML = myF(5);
