function Automobile(make,model,year){
    this.make=make;
    this.model=model;
    if(year!==undefined){
        this.year=year;
    }
}
Automobile.prototype.year=2016

/* Notice that year is set on the prototype to 2016. Also, if no year is passed into the constructor, 
an assignment to year will not be made.*/

var newCar=new Automobile("Ferrari","488 Spider");
// In this case, we did not pass in a year,
// so it was never set in the constructor function
 var a=newCar.hasOwnProperty("year"); //Return false
console.log(a)
 console.log(newCar.year);

 /* Now, if we create a car with a year, the property on the car object will be seen first in the property lookup:*/

 var probe=new Automobile("Ford","Probe",1993)
 var b=probe.hasOwnProperty("year");
 console.log(b)
 console.log(probe.year)