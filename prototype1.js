function Person(name){
    this.name=name;
}
var tim=new Person("Tim");
console.log(Person.prototype);  //{}

Person.prototype.sayHello=function(){
    return "Hello, " +this.name
};

var moxie=new Person("Moxie");
console.log(moxie.sayHello());
console.log(tim.sayHello());