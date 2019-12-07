class Car {
	constructor(brand) {
		this._carname = brand;
	}

	set carname(x) {
		this._carname = x;
	}

	get carname() {
		return this._carname;
	}
}

myCar = new Car("Ford");
myCar.carname = "Volvo";

document.getElementById("demo").innerHTML = myCar.carname;
