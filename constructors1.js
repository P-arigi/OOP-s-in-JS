function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}

/*So how do constructor functions actually "construct" these objects? Through the new keyword 
that we saw before. To construct a new Car, use new:*/

var probe=new Car("Ford","Probe",1993);
var cmax=new Car("Ford","C-Max",2014);
console.log(probe.make);
console.log(cmax.year);