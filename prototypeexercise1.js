function Vehcile(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isRunning=false;
}

Vehcile.prototype.trunOn=function(){
    this.isRunning=true;
}
Vehcile.prototype.trunOff=function(){
    this.isRunning=false;
}
Vehcile.prototype.honk=function(){
    if(this.isRunning=true){
        return "beep!"
    };
}