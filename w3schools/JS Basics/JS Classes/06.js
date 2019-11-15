class Car {
	constructor(brand) {
		this.carname = brand;
	}

	get cname() {
		return this.carname;
	}

	set cname(x) {
		this.carname = x;
	}
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cname;
