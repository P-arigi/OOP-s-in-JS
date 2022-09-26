function Vehcile(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
function Motorcycle(make,model,year,motorcycleType){
    Vehcile.call(this,make,model,year)
    this.motorcycleType=motorcycleType;
}
var moto=new Motorcycle("Kawasaki","Ninja 500",2006,"sports")
console.log(moto.make);
console.log(moto.model);
console.log(moto.year);
console.log(moto.motorcycleType);