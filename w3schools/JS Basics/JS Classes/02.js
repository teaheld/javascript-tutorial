class Car {
	constructor(brand) {
		this.carname = brand;
	}

	present() {
		return "I have a " + this.carname;
	}
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.present();
