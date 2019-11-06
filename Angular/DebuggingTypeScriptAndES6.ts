var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// myString's type is string, 9 is int, "9" is str
myString = "9";

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// name's type is string, 9 is int, "9" is str
console.log(sayHello("9"));

function fullName(firstName: string, lastName: string, middleName?: string) {
    //if middleName exist, return name with midddlename
    if(middleName){return `${firstName} ${middleName} ${lastName}`;}
    //if middleName not exist, return name without midddlename
    else {
       return `${firstName} ${lastName}`;
   }
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   //forget s here
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja(turing.firstName,turing.lastName);
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(shane));

var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x: number,y: number) => x * y;
// Nor is this working:
console.log(multiply(3,4))
var math = (x: number,y: number) =>{
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
console.log(math(3,4))

class Elephant {
   constructor(public age: number){}
   birthday = () => {
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
