const animalMethods = {
    eat: function () {
        console.log('eating...');
    },
    play: function() {
        console.log('playing...');
    }
};

function Animal (name, energy) {

    //let animal = {};
    let animal = Object.create(Animal.prototype);
    
    animal.name = name;
    animal.energy = energy;

    //animal.eat = animalMethods.eat;
    //animal.play = animalMethods.play;
    //annoying to have to add this all the time

    return animal;
}

function AnimalWithNew (name, energy) {

    //this = Object.create(this.prototype);

    this.name = name;
    this.energy = energy;

    //return this;
}


Animal.prototype.eat = function() {
    console.log(this.name,'is sleeping.');
};


Animal.prototype.play = function() {
    console.log(this.name,'is playing.');
};

AnimalWithNew.prototype.eat = function() {
    console.log(this.name,'is sleeping.');
};


AnimalWithNew.prototype.play = function() {
    console.log(this.name,'is playing.');
};

/*
const leo = Animal('Leo', 7);
const sparky = Animal('Sparky', 10);
*/
const max = new Animal('Max', 7);
const babe = new Animal('Babe', 7);


//Why do we use classes or prototypes
//constructor is just a function
//prototype is just a property on a function, it points to an object. THATS IT
