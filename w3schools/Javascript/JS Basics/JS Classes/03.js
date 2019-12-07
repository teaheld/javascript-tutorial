class Car {
	constructor(brand) {
		this.carname = brand;
	}

	static hello() {
		return "Hello";
	}
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = Car.hello();
