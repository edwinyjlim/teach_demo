
function Animal (name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function() {
    console.log(this.name,'is sleeping.');
};


Animal.prototype.play = function() {
    console.log(this.name,'is playing.');
};

function Mammal (name, energy, gender) {

    //inherit here
    Animal.call(this, name, energy);
    this.gender = gender;
}

//inherit here
Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.constructor = Mammal;

Mammal.prototype.giveBirth = function() {
    console.log(this.name, 'gives birth!');
};

function Dog (name, energy, gender, breed) {

    //inherit here
    Mammal.call(this, name, gender, energy);
    
    this.breed = breed;
}

//inherit here
Dog.prototype = Object.create(Mammal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name, 'says WOOF!');
};


var max = new Dog('Max', 10, 'female', 'golden');
