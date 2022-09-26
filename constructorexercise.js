/*1.What is the purpose of a constructor function?
1.A constructor is a special function that creates and initializes an object instance
of a class.
2. In JS, a constructora gets called when an object is created using the new keyword.
3.The purpose of a constructor is to create a new object and set values for any existing object properties */

/* 2.What does the new keyword do?
When new is used, the following happens:

An empty object is created,
The keyword this inside of the constructor function refers to the empty object that was just created,
A return this is added to the constructor function (this is why you don't need to explicitly return any value),
An internal link is created between the object and the .prototype property on the constructor function. We can actually access this link on the object that is created: it is called __proto__, sometimes pronounced "dunder" (double underscore) proto.
*/

/* 3. What does the keyword this refers to inside of a constructor?
The JavaScript “this” keyword has a special meaning inside of that object: it refers to itself. In other
 words, when you create your constructor function, you can use the “this” keyword to reference the object
  that WILL be created when the constructor is instantiated. */


/* 4.What is instance?
An instance is an object containing data and behavior described by the class.

what is class?
Classes are a template for creating objects. They encapsulate data with code to work on that data. 
Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

5.Create a constructor function for a Person, each person should have a firstName, lastName, 
favoriteColor and favoriteNumber. */

function Person(firstName,lastName,favoriteColor,favoriteNumber){
    this.firstName=firstName;
    this.lastName=lastName;
    this.favoriteColor=favoriteColor;
    this.favoriteNumber=favoriteNumber;
}

/*6.Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the 
number and the Person's favorite number*/

function Person(firstName,lastName,favoriteColor,favoriteNumber){
    this.firstName=firstName;
    this.lastName=lastName;
    this.favoriteColor=favoriteColor;
    this.favoriteNumber=favoriteNumber;
    this.multiplyFavoriteNumber=function(){
        console.log(this.multiplyFavoriteNumber*this.multiplyFavoriteNumber + this.favoriteNumber)
        //this line is not getting.
    }
}
var number=new Person('Parigi','Akhila','Violet',5,9);
console.log(number.multiplyFavoriteNumber());
console.log(number.firstName);

// 7.Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.call(this,firstName,lastName,favoriteColor,favoriteFood)
}