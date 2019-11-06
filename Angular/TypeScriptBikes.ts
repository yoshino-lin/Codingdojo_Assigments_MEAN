class Bike  {
    price: number;
    max_speed: number;
    miles: number;
	constructor(price: number, max_speed:number){
        this.price = price;
        this.max_speed = max_speed
        this.miles = 0
	}
    displayInfo = () => {
        console.log("price: "+this.price+", max speed: "+this.max_speed+", miles: "+this.miles)
        return this
    }
    ride = () => {
        console.log("Riding")
        this.miles += 10
        return this
    }
    reverse = () => {
        if (this.miles > 5) {
            console.log("Reversing")
            this.miles -= 5
            return this
        } else {
            console.log("You cannot reverse!")
            return this
        }

    }
}
const bike1 = new Bike(100, 200)
bike1.ride().ride().ride().reverse().displayInfo()

const bike2 = new Bike(500, 10)
bike2.ride().ride().reverse().reverse().displayInfo()

const bike3 = new Bike(50, 1000)
bike3.reverse().reverse().reverse().displayInfo()
