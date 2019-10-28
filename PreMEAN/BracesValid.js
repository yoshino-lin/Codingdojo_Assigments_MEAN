function bracesValid(strIn){
    var symb={"}":"{","]":"[",")":"("};
    var newstr = ""
    for(var i=0;i<strIn.length;i++){
        for(var key in symb){
            if(strIn[i]===key){
                if(newstr[newstr.length-1]===symb[key]){
                    newstr = newstr.substr(0, newstr.length - 1);
                }
            }else if(strIn[i]===symb[key]){
               newstr+=strIn[i];
            }
        }
    }
    if(newstr.length===0){
        return true;
    }else{
        return false;
    }
}
console.log(bracesValid("{{()}}[]"));
