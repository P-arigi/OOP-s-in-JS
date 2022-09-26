//NOT A GOOD PRACTICE

function Person(name){
    this.name=name;
    this.sayHello=function(){
        return "Hello, "+this.name;
    }
}

/* The problem is that every time you use the new keyword to create a Person, a new object gets created 
in memory that allocates space for the person's name and also for the sayHi function. So if we have 10 
Person objects that we create, there will be 10 copies of the same sayHi function. Since the function
 does not need to be unique per Person instance, it is better to add the function to the prototype*/

 //BEST PRACTICE!
 function Person(name){
    this.name=name;
 }
 Person.prototype.sayHello=function(){
    return "hello, "+this.name;
 }

 var akhila=new Person("Akhila")
 console.log(akhila.sayHello())
