var dict = {
    "cat":"s",
    "mouse":"s",
    "tac":"s",
    "mice":"S",
    "ecim":"s",
    "str":"da"
}
var new_arr=[]
for(var key in dict){
    var checking=""
    for(var i=key.length-1;i>=0;i--){
        checking+=key[i]
    }
    for(var key2 in dict){
        if(key2==checking){
            new_arr.push(key)
            new_arr.push(key2)
            delete dict[key]
            delete dict[key2]
        }
    }
}
console.log(new_arr)
