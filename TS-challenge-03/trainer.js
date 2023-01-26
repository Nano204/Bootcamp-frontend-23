"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
var pokemon_1 = require("./pokemon");
function getRandomPokemonIds(target) {
    var ammountOfPokemon = Math.ceil(Math.random() * 6);
    var pokemonsInBagIds = [];
    for (var index = 0; index < ammountOfPokemon; index++) {
        var randonPokemonId = Math.ceil(Math.random() * 151);
        pokemonsInBagIds.push(randonPokemonId);
    }
    target.prototype.pokemonsInBagIds = pokemonsInBagIds;
}
var Trainer = /** @class */ (function () {
    function Trainer(name, pokemonsInBagIds) {
        this.name = name;
        if (pokemonsInBagIds)
            this.pokemonsInBagIds = pokemonsInBagIds;
    }
    Trainer.prototype.getPokemon = function (id) {
        var url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
        var pokemon = fetch(url)
            .then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
            .then(function (response) {
            var pokemon = new pokemon_1.Pokemon(response.name, 10);
            return pokemon;
        });
        return pokemon;
    };
    Trainer.prototype.screenPokemonTeam = function () {
        var _this = this;
        var pokemonTeam = this.pokemonsInBagIds.map(function (id) { return _this.getPokemon(id); });
        Promise.all(pokemonTeam).then(function (response) { return console.log(response); });
    };
    Trainer = __decorate([
        getRandomPokemonIds
    ], Trainer);
    return Trainer;
}());
exports.Trainer = Trainer;
var trainer = new Trainer("Ash");
trainer.screenPokemonTeam();
