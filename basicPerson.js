/***** function and object examples *****/

function sayHello () {
    console.log('Hello!');
};

var person = {
    name: 'Edwin',
    age: 27
};

/**** make multiple objects of the same type ****/

// what is inconvenient about this?
// - repetivie
// - you don't really know if they are of the same type
// - Katie could be a robot, Erica could be a person, a ghost, a

var katie = {
    name: 'Katie',
    age: 24,
    sayHello: sayHello
};

var erica = {
    name: 'Erica',
    age: 03,
    sayHello: sayHello
};

/********* we have a singular function   **********/

// what is inconvenient about this?
// - adding another method means writing in two places


var sayHello = function () {
    console.log('Hello!');
};

var sayGoodbye = function () {
    console.log('Goodbye!');
};

//instances but repeated methods
function Person (name, age) {

    let person = {};

    //property
    person.name = name;
    person.age = age;

    //method
    person.sayHello = sayHello;
    person.sayGoodbye = sayGoodbye;

    return person;
}

var katie = Person('Katie', 24);
var erica = Person('Erica', 30);


/****** using Object.create to delegate lookups to one personMethods object  ********/

//Inheritance for the first time

var personMethods = {
    //method
    sayHello: function () {
        console.log('Hello!');
    },
    sayGoodbye: function() {
        console.log('Goodbye!');
    }
};

function Person (name, age) {

    var person = Object.create(personMethods);
    //property
    person.name = name;
    person.age = age;

    return person;
}

var katie = Person('Katie', 24);
var erica = Person('Erica', 30);


//a smaller example
var parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
};

var child = Object.create(parent);
child.name = 'John';
child.age = 5;

function foo () { };
foo.prototype; //spits out an object

/***
KEY DEFINITION: prototype is just the property of a function, pointing to an object

So why don't we put all our personMethods into the prorotype of our Person function?
***/


/***** using Person.prototype instead of personMethods *****/

function Person (name, age) {

    var person = Object.create(Person.prototype);
    //property
    person.name = name;
    person.age = age;

    return person;
}

Person.prototype.sayHello = function() {
    console.log('Hello!');
};

Person.prototype.sayGoodbye = function() {
    console.log('Goodbye!');
};

var katie = Person('Katie', 24);
var erica = Person('Erica', 30);


/***** using New contrsuctor and this  *****/

//NEW CONSTRUCTOR
//PROTOTYPE FOR REAL

function Person (name, age) {
    //this = Object.create(this.prototype);
    this.name = name;
    this.age = age;
    //return this
}

Person.prototype.sayHello = function() {
    console.log('Hello!');
};

Person.prototype.sayGoodbye = function() {
    console.log('Goodbye!');
};

var katie = new Person('Katie', 24);
var erica = new Person('Erica', 30);


/**** SUB CLASS PROTOTYPE ****/

function Person (name, age) {
    //property
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log('Hello!');
};

Person.prototype.sayGoodbye = function() {
    console.log('Goodbye!');
};

function NewYorker(name, age, borough) {
    //attach th Person attributes with *this* context
    //inheritance
    Person.call(this, name, age);

    this.borough = borough;
    this.isRude = true;

};

NewYorker.prototype = Object.create(Person.prototype);
NewYorker.prototype.constructor = NewYorker;

NewYorker.prototype.sayThePhrase = function() {
    console.log("I'm walkin' here!");
};
NewYorker.prototype.repTheirRegion = function() {
    console.log(this.borough, 'is the place to be!');
};

var katie = new NewYorker('Katie', 24, 'Brooklyn');
var erica = new NewYorker('Erica', 30, 'Queens');





/******  ES6  ******/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log('My name is', this.name);
    }
}

class NewYorker extends Person {
    constructor(name, age, borough) {
        super(name, age);
        this.borough = borough;
        this.rude = true;
    }
    sayThePhrase() {
        console.log(this.name, "I'm walkin' here");
        console.log('I\'m walkin\' here');
    }
    repTheirRegion() {
        console.log(this.borough, 'is the place to be!');
    }
}

var katie = new NewYorker('Katie', 24, 'Brooklyn');
var erica = new NewYorker('Erica', 30, 'Queens');
