class Car {
	constructor(brand) {
		this.carname = brand;
	}
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;
