function Dog(name,age){
    this.name=name;
    this.age=age;
    this.bark=function(){
        console.log(this.name +" just barked!")
    }
}

var rusty=new Dog("Rusty",2);
var fido=new Dog("Fido",3);
console.log(rusty.bark());
console.log(rusty.age);
console.log(fido.bark());
 var a=rusty.__proto__===Dog.prototype;
 console.log(a)