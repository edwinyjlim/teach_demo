# Objects & The Prototype Chain

## The Agenda 
What prototypes are

When prototypes might be used and how

How prototypes chain together and thus enable inheritance



## The Big Picture
Prototypes are a powerful way to organize, re-use, and express code.

In other words, we can build a lot of things with it.



## Glossary

**Function**
```markdown
*definition:* a set of statements.
*benefit:* it executes those statements. 
```

```javascript
//an example
function sayHello () {
    console.log('Hello!');
};
```

**Object**
```markdown
*definition:* a map of properties, where each property has
a name/key and a value.
*benefit:* it can store and represent things.
```

```javascript
//an example
var person = {
    name: 'Ms. Jackson',
    age: 32
}
```

<!-- **this** -->
<!-- ```markdown -->
<!-- *definition:* a keyword that is bound to an object -->
<!-- when a function is envoked. -->
<!-- *benefit:* it enables contextual assignemnt.  -->
<!-- ``` -->

<!-- ```javascript -->
	
<!-- ``` -->


**Prototype**
```markdown
*definition:* is a property on a function that points to an object.
*benefit:* it allows us to share properties across instances of a function.
```

```javascript
//an example
function foo () { };

console.log(typeof foo.prototype === 'object');
//prints true

```

**Constructor**
```markdown
*definition:* a function that constructs an object, conventionally
capitalized and typically called with the keyword new.
*benefit:* it constructs and returns an object.
```

```javascript
//an example
//this is the constructor function 
function Person = (name, age) {
	this.name = name;
	this.age = age;
}

msJackson = new Person('Ms. Jackson', 32);
```


**Instance**
```markdown
*definition:* a distinct object that was constructed.
*benefit:* it is an individual object.
```

```javascript
//an example
//one instance
var msJackson = new Person('Ms. Jackson', 32);
//another instance
var mrLee = new Person('Mr. Lee', 40);

```
