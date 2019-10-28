function fizzbuzz(num){
    if(isNaN(num) === true){
        console.log("Parameter must be a positive number")
    }else{
        var str_return = ""
        for(var i=1;i<num;i++){
            if(i%3===0 && i%5===0){
                console.log("FizzBuzz");
                str_return+="FizzBuzz, "
            }else if(i%3===0){
                console.log("Fizz");
                str_return+="Fizz, "
            }else if(i%5===0){
                console.log("Buzz");
                str_return+="Buzz, "
            }else{
                console.log(i)
                str_return+=i+", "
            }
        }
        if(num%3===0 && num%5===0){
            console.log("FizzBuzz");
            str_return+="and FizzBuzz."
        }else if(i%3===0){
            console.log("Fizz");
            str_return+="and Fizz."
        }else if(i%5===0){
            console.log("Buzz");
            str_return+="and Buzz."
        }else{
            console.log(i)
            str_return+="and "+i+"."
        }
        return(str_return)
    }
}
console.log(fizzbuzz(15))
