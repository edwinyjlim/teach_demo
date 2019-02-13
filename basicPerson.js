/***** function and object examples *****/

function sayHello () {
    console.log('Hello!');
};

var person = {
    name: 'Edwin',
    age: 27
};

/**** make multiple objects of the same type ****/

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


// can anyone tell me what is inconvenient about this?
// - repetitive
// - you don't really know if they are of the same type
// - Katie could be a robot, Erica could be a person, a ghost, a




/********* we have a singular function   **********/

var sayHello = function () {
    console.log('Hello!');
};

var sayGoodbye = function () {
    console.log('Goodbye!');
};

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


// what two lines of code can we write to make a katie and erica object like before? Pair up?
// what is still inconvenient about this?
// - adding another method means writing in two places





/****** using Object.create to delegate lookups to one personMethods object  ********/

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


//Inheritance for the first time with Object.Create
//It creates a new object and tells the Javascript engine where to lookup missing properties. In this case, personMethods object.


/**
 Transition into what prototype literally is and why use it instead of personMethods.
 **/

var parent = {
    name: 'Edwin',
    age: 27,
    heritage: 'Korean'
};

var child = Object.create(parent);
child.name = 'Jimbo';
child.age = 2;

console.log(child.heritage);

function foo () { };
foo.prototype; //spits out an object


/***
 STEP 1 in The Agenda

 Key definition: prototype is just the property of a function, pointing to an object

 So why don't we put all our personMethods into the prorotype of our Person function?
 ***/




/***** using Person.prototype instead of personMethods *****/

//this is called a Constructor function because it's constructing an object for us
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

//we are now creating instances of a Person prototype
// katie instanceof Person
// erica insatnceof Person

var katie = Person('Katie', 24);
var erica = Person('Erica', 30);





/***** using New contrsuctor and this  *****/

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


/***
 STEP 2 in The Agenda

 we use prototypes as an efficient and expressive way to share properties to instances.
 **/




/**** SUB CLASS PROTOTYPE ****/

//how protoypes chain together

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

//NewYorker.prototype.constructor = NewYorker;

NewYorker.prototype.sayThePhrase = function() {
    console.log("I'm walkin' here!");
};
NewYorker.prototype.repTheirRegion = function() {
    console.log(this.borough, 'is the place to be!');
};

var katie = new NewYorker('Katie', 24, 'Brooklyn');
var erica = new NewYorker('Erica', 30, 'Queens');


//katie instanceof NewYorker
//katie instanceof Person
//katie instanceof Object


/***
 STEP 3 in The Agenda

 How protoypes chain together and thus enable inheritance across multiple prototpyes

 **/



/******  ES6  ******/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello!');
    }
    sayGoodbye() {
        console.log('Goodbye!');
    }
}

class NewYorker extends Person {
    constructor(name, age, borough) {

        super(name, age);

        this.borough = borough;
        this.isRudeude = true;

    }
    sayThePhrase() {
        console.log("I'm walkin' here");
    }
    repTheirRegion() {
        console.log(this.borough, 'is the place to be!');
    }
}

var katie = new NewYorker('Katie', 24, 'Brooklyn');
var erica = new NewYorker('Erica', 30, 'Queens');
