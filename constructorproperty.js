/*  The constructor property
Every single .prototype object has a property called constructor that points back to the original 
function. Let's look at an example:*/

function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
 var a=Person.prototype.constructor===Person;
 console.log(a)