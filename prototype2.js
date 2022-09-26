function Person(name){
    this.name=name;
}
Person.prototype.siblings=["Haim","David"];
var elie=new Person("Elie");
elie.siblings.push("Elie");
console.log(elie.siblings);

var anotherPerson=new Person("Mary");
anotherPerson.siblings.push("Leslie");
console.log(elie.siblings)