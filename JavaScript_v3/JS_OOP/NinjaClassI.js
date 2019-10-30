function Ninja(name){
    this.name = name
    this.health = 100
    this.speed = 3
    this.strength = 3
    this.sayName = function() {
        console.log("My ninja name is "+this.name+"!");
    }
    this.showStats = function() {
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength)
    }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
