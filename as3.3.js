//Typescript class using extend/inheritance function//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = (function () {
    function animal(theName, theSound) {
        this.theName = theName;
        this.theSound = theSound;
        this.name = theName;
        this.sound = theSound;
    }
    animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + "moved" + distanceInMeters + "m.");
    };
    return animal;
}());
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Monkey.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Monkey: ");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Monkey;
}(animal));
var Cow = (function (_super) {
    __extends(Cow, _super);
    function Cow(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Cow.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 2; }
        console.log("Cow: ");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Cow;
}(animal));
var myCow = new animal("Moomoo", +" " + "MooMoo");
var myMonkey = new animal("ChiChi", +" " + "Oooh-aahahaha");
myCow.move(22);
myMonkey.move(34);
