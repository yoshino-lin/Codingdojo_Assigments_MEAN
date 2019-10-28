function coinChange(money){
    var money_dic={
        "dollars":[100,0],
        "quarters":[25,0],
        "dimes":[10,0],
        "nickels":[5,0],
        "pennies":[1,0]
    }
    if(isNaN(money) === false){
        for(var key in money_dic){
            var remain = money%money_dic[key][0];
            money_dic[key][1] = (money-remain)/money_dic[key][0];
            money=remain;
        }
        var new_str = "{"
        for(key in money_dic){
            if(money_dic[key][1]!==0){
                new_str+=key+": "+money_dic[key][1]+", ";
            }
        }
        new_str=new_str.substring(0, new_str.length-2);
        return new_str+"}"
    }else{
        var how_much=0;
        for(var key1 in money){
            for(var key2 in money_dic){
                if(key1===key2){
                    how_much+=money[key1]*money_dic[key2][0];
                }
            }
        }
        return coinChange(how_much)
    }
}

console.log(coinChange(312));
console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}));
