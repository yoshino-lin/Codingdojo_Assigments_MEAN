var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var owl = { character: "Owl" };
var robin = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };
tigger.north = pooh;
pooh.south = tigger;
pooh.north = robin;
pooh.west = piglet;
pooh.east = bees;
piglet.east = pooh;
piglet.north = owl;
bees.west = pooh;
bees.north = rabbit;
owl.south = piglet;
owl.east = robin;
robin.north = kanga;
robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
rabbit.west = robin;
rabbit.south = bees;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.south = robin;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;
var player = {
    location: tigger
}

function move(direction){
    if(direction === "north"){
        if(player["location"].north!=null){
            player["location"]=player["location"].north
            console.log("Now you are at "+player["location"]["character"]+"'s house")
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "south"){
        if(player["location"].south!=null){
            player["location"]=player["location"].south
            console.log("Now you are at "+player["location"]["character"]+"'s house")
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "east"){
        if(player["location"].east!=null){
            player["location"]=player["location"].east
            console.log("Now you are at "+player["location"]["character"]+"'s house")
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "west"){
        if(player["location"].west!=null){
            player["location"]=player["location"].west
            console.log("Now you are at "+player["location"]["character"]+"'s house")
        }else{
            console.log("You may not go that way")
        }
    }else{
        console.log("Nope,please try again")
    }

}
move("north")
move("north")
move("east")
move("east")
move("east")
move("west")
//上n下s左w右e
