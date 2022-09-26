function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
//We can also ser properties on the keyword this
//that are present values
this.numberWheels=4;
}

function Motorcycle(make,model,year){
    // using call
    Car.call(this,make,model,year)
    this.numberWheels=2;

}

function Motorcycle(make,model,year){
    //using apply
    Car.apply(this,[make,model,year]);
    this.numberWheels=2;
}

function Motorcycle(make,model,year){
    //even better using apply with arguments
    Car.apply(this,arguments);
    this.numberWheels=2;
}


