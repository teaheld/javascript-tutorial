class Car {
	constructor(brand) {
		this.carname = brand;
	}

	static hello(x) {
		return "Hello " + x.carname;
	}
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = Car.hello(myCar);
