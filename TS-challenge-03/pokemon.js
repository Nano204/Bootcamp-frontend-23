"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
function checkPowerPoint(target, propertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function (move) {
        if (this.ppAvailable === 0) {
            console.log("".concat(this.name, " has no PP enough to use ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        }
        else {
            method.apply(this, [move]);
        }
    };
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
exports.Pokemon = Pokemon;
// const move = { name: "thunderbolt", power: 90 };
// const pikachu = new Pokemon("pikachu", 1);
// pikachu.figth(move);
// pikachu.figth(move);
