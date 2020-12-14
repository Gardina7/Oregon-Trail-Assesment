


class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    // Increases the traveler's food by 2.
    hunt() {
        this.food = this.food + 2
    }
    eat() {
        

        if (this.food === 0) {
            this.isHealthy = false;

        }else {
            this.food = this.food - 1
        }

    } 
}



class Wagon {
    constructor(max) {
        this.capacity = max
        this.passengers = []
    }

    getAvailableSeatCount() {
        let emptySeats = this.capacity - this.passengers.length;
        return emptySeats
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)

        }
    }
    shouldQuarantine() {
        let unhealthy = 0;
        for (let i = 0; i < this.passengers.length; i++) {

            console.log(this.passengers[i].isHealthy)
            if (this.passengers[i].isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood() {
        let foods = 0
        for (let i = 0; i < this.passengers.length; i++) {
            console.log(this.passengers[i].food)
foods=foods + this.passengers[i].food
        }
        return foods
    }

}





//create a travler  have the traveler eat  have the traveler hunt  display how much food traveler has
// let sarah = new Traveler ("sarah")
// console.log(sarah)
// sarah.hunt()
// console.log(sarah)
//     sarah.eat()
//     console.log(sarah)
// let yellowBus = new Wagon (1)
// console.log(yellowBus)
// let blueBus = new Wagon (6)
// console.log(blueBus)
// yellowBus.join(sarah)
// console.log(yellowBus)


