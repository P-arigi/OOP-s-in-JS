function Person(name){
    this.name=name;
    this.siblings=[ ];
}

var janey=new Person("Janey");
janey.siblings.push("Annie")
console.log(janey.siblings)
var tim=new Person("Tim");
tim.siblings.push("Akhila");
tim.siblings.push("Raju");
tim.siblings.push("Aishwarya");
tim.siblings.push("Balaji");
tim.siblings.push("Sneha");
console.log(tim.siblings)