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

Animal.prototype.eat = function() {
    console.log(this.name,'is sleeping.');
};


Animal.prototype.play = function() {
    console.log(this.name,'is playing.');
};



var leo = Animal('Leo', 7);
var sparky = Animal('Sparky', 10);
