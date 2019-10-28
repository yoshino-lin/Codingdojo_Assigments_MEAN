var tigger={
    character: "Tigger",
    greet: function(){console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")}
};
var pooh={
    character: "Winnie the Pooh",
    greet: function(){console.log("Hi friend, I am looking for more honey!")}
};
var piglet={
    character: "Piglet",
    greet: function(){console.log("Oh d-d-d-d-dear! I wasn't expecting company!")}
};
var bees={
    character: "Bees",
    greet: function(){console.log("Bzzzzzzz! Do you see my honey?")}
};
var owl={
    character: "Owl",
    greet: function(){console.log("I am so tired... I need more sleep.")}
};
var robin={
    character: "Christopher Robin",
    greet: function(){console.log("Welcome to my house! Do you want to have dinner with me?")}
};
var rabbit={
    character: "Rabbit",
    greet: function(){console.log("Guess what do I find today? A egg!")}
};
var gopher={
    character: "Gopher",
    greet: function(){console.log("Well, you know everyone cannot live without water!")}
};
var kanga={
    character: "Kanga",
    greet: function(){console.log("Check my baby! Is him cute?")}
};
var eeyore={
    character: "Eeyore",
    greet: function(){console.log("Hello...And...what is your name again?")}
};
var heffalumps={
    character: "Heffalumps",
    greet: function(){console.log("I do not know why you are here. But, nice to see you!")}
};
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
    location: tigger,
    carry_honey: false,
    where_to_drop:""
}
function move(direction){
    if(direction === "north"){
        if(player["location"].north!=null){
            player["location"]=player["location"].north
            console.log("Now you are at "+player["location"]["character"]+"'s house")
            player["location"].greet()
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "south"){
        if(player["location"].south!=null){
            player["location"]=player["location"].south
            console.log("Now you are at "+player["location"]["character"]+"'s house")
            player["location"].greet()
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "east"){
        if(player["location"].east!=null){
            player["location"]=player["location"].east
            console.log("Now you are at "+player["location"]["character"]+"'s house")
            player["location"].greet()
        }else{
            console.log("You may not go that way")
        }
    }else if(direction === "west"){
        if(player["location"].west!=null){
            player["location"]=player["location"].west
            console.log("Now you are at "+player["location"]["character"]+"'s house")
            player["location"].greet()
        }else{
            console.log("You may not go that way")
        }
    }else{
        console.log("Nope,please try again")
    }
}
function pickUp(){
    if(player["location"] == bees){
        player["carry_honey"] = true;
        console.log("You've gathered some honey!")
    }else{
        console.log("There is no honey at this location.")
    }
}
function mission(){
    if(player["where_to_drop"]==""){
        let name_list = ["Tigger","Winnie the Pooh","Piglet","Owl","Christopher Robin","Rabbit","Gopher","Kanga","Eeyore","Heffalumps"]
        let index = Math.floor(Math.random()*name_list.length)
        player["where_to_drop"] = name_list[index]
    }
    console.log(player["where_to_drop"]+" is looking for honey! Can you help?")
}
function drop(){
    if(player["carry_honey"] == true){
        if(player["location"]["character"] === player["where_to_drop"]){
            console.log("Congratulations! You delivered the honey to "+player["where_to_drop"]+"!")
            player["carry_honey"] = false
        }else{
            console.log("Whoops! This isn't the place that needs the honey!")
        }
    }else{
        console.log("You do not carry honey!")
    }
}
mission()
//上n下s左w右e
