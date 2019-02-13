var katie = {
    name: 'Katie',
    age: 24,
    sayName: function() {
        console.log('My name is', katie.name);
    }
};

var erica = {
    name: 'Erica',
    age: 30,
    sayName: function() {
        console.log('My name is', erica.name);
    }
};


/*****************/
//explain context and this
var katie = {
    name: 'Katie',
    age: 24,
    sayName: function() {
        console.log('My name is', this.name);
    }
};

var erica = {
    name: 'Erica',
    age: 30,
    sayName: function() {
        console.log('My name is', this.name);
    }
};

/*******************/

//instances but repeated methods
function Person (name, age) {

    let person = {};

    //property
    person.name = name;
    person.age = age;

    //method
    person.sayName = function() {
        console.log('My name is', person.name);
    };

    return person;
}

var katie = Person('Katie', 24);
var erica = Person('Erica', 30);


/**************/

//Inheritance for the first time

var personMethods = {
    //method
    sayName:function() {
        console.log('My name is', this.name);
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


var parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
};

var child = Object.create(parent);

child.name = 'John';
child.age = 5;


/**********/

//NEW CONSTRUCTOR
//PROTOTYPE FOR REAL

function Person (name, age) {
    //property

    //let this = Object.create(this.prototype);

    this.name = name;
    this.age = age;

    //return this
}

//inheritance
Person.prototype.sayName = function() {
    console.log('My name is', this.name);
};

var katie = new Person('Katie', 24);
var erica = new Person('Erica', 30);


/********/

//SUB CLASS PROTOTYPE

function Person (name, age) {
    //property
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
    console.log('My name is', this.name);
};

function NewYorker(name, age, borough) {
    Person.call(this, name, age);
    this.borough = borough;
    this.isRude = true;
    this.sayThePhrase = function() {
        console.log("I'm walkin' here!");
    };
};

NewYorker.prototype = Object.create(Person.prototype);
NewYorker.prototype.constructor = NewYorker;
NewYorker.prototype.represents = function() {
    console.log(this.borough, 'is the best borough in NYC!');
};

var katie = new NewYorker('Katie', 24, 'Brooklyn');
var erica = new NewYorker('Erica', 30, 'Queens');
