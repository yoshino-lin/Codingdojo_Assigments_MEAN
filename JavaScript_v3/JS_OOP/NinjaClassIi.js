function Ninja(name){
    this.name = name
    this.health = 100
    this.speed = 3
    this.strength = 1
    this.sayName = function() {
        console.log("My ninja name is "+this.name+"!");
    }
    this.showStats = function() {
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength)
    }
    this.punch = function(obj_get_punch){
        if(obj_get_punch instanceof Ninja){
            console.log(obj_get_punch.name+" was punched by "+this.name+" and lost 5 Health!")
            obj_get_punch.health-=5
            console.log(obj_get_punch.health)
        }else{
            console.log(obj_get_punch+" is not a Ninja")
        }
    }
    this.kick = function(obj_get_punch){
        if(obj_get_punch instanceof Ninja){
            console.log(obj_get_punch.name+" was punched by "+this.name+" and lost "+this.strength*15+" Health!")
            obj_get_punch.health-=this.strength*15
            console.log(obj_get_punch.health)
        }else{
            console.log(obj_get_punch+" is not a Ninja")
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
var yellowNinja = "Fake ninja"
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
blueNinja.kick(yellowNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
