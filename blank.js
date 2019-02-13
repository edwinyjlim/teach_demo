// Hello! My name is Edwin.


/**
**/

var personMethods = {
    sayHello: function () {
	console.log('Hello!');
    },
    sayGoodBye: function() {
	console.log('sayGoogbye'); 
    },
    sayName: function() {
	console.log('My name is', this.name);
    }
};

function Person (name, age) {

    let person = Object.create(personMethods);
    
    person.name = name;
    person.age = age;
    
    return person;
};


var katie = Person('Katie', 24);
var erica = Person('Erica', 30);
