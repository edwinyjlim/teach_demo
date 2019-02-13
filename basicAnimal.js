
function Animal (name, age) {

    let animal = {};

    //property
    animal.name = name;
    animal.age = age;

    //method 
    animal.eat = function() {

    }

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
