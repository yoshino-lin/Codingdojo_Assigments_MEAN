var users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(user_dic){
    var long_str = ""
    for(var i=0;i<user_dic.length;i++){
        long_str += user_dic[i]["fname"]+" "+user_dic[i]["lname"]+" knows "
        for(var a=0;a<user_dic[i]["languages"].length;a++){
            long_str += user_dic[i]["languages"][a] +", "
        }
        long_str=long_str.substring(0, long_str.length-2)
        long_str+=".\r\n"+user_dic[i]["fname"]+" is also interested in "
        for(var inter in user_dic[i]["interests"]){
            for(var wtf in user_dic[i]["interests"][inter])
            long_str+=user_dic[i]["interests"][inter][wtf]+", "
        }
        long_str=long_str.substring(0, long_str.length-2)
        long_str+=".\r\n"
    }
    console.log(long_str);
}
userLanguages(users)
