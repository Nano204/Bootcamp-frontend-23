var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkPowerPoint(target, propertyKey, descriptor) {
    descriptor.value = function () {
        if (this.ppAvailable == 0) {
            console.log("".concat(this.name, " has no PP enough to use ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        }
    };
    return descriptor;
}
var Pokemon = /** @class */ (function () {
    function Pokemon(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    Pokemon.prototype.figth = function (move) {
        console.log("".concat(this.name, " used ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        this.ppAvailable -= 1;
    };
    __decorate([
        checkPowerPoint
    ], Pokemon.prototype, "figth", null);
    return Pokemon;
}());
var move = { name: "thunderbolt", power: 90 };
var pikachu = new Pokemon("pikachu", 1);
pikachu.figth(move);
pikachu.figth(move);