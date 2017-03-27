//Typescript class using extend/inheritance function//

class animal{
    name: string;
    sound: string;
    constructor (public theName: string, public theSound: string){
        this.name = theName;
        this.sound = theSound;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name}moved${distanceInMeters}m.`);
    }
}

class Monkey extends animal{
    constructor(name: string, sound:string) {super(name, sound);}
    move(distanceInMeters = 5){
        console.log("Monkey: ");
        super.move(distanceInMeters);
        }
}
class Cow extends animal{
    constructor(name: string, sound:string) {super(name, sound);}
    move(distanceInMeters = 2){
        console.log("Cow: ");
        super.move(distanceInMeters);
    }
}

let myCow = new animal("Moomoo", + " " + "MooMoo");
let myMonkey = new animal("ChiChi", + " " +  "Oooh-aahahaha");

myCow.move(22);
myMonkey.move(34);
