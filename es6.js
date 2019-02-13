class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat() {
        console.log(this.name, 'is eating...');
    }
    play() {
        console.log(this.name, 'is playing...');
    }
}

class Dog extends Animal {
    constructor(name, energy, breed) {
	super(name, energy);
	this.breed = breed;
    }
    bark() {
	console.log(this.name, 'woof woof');
    }
}

var max = new Dog('Max', 10, 'female', 'golden');
