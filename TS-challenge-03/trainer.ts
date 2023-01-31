import { Pokemon } from "./pokemon";

function getRandomPokemonIds(target: any) {
    const ammountOfPokemon: number = Math.ceil(Math.random() * 6);
    const pokemonsInBagIds: number[] = [];
    for (let index = 0; index < ammountOfPokemon; index++) {
        const randonPokemonId: number = Math.ceil(Math.random() * 151);
        pokemonsInBagIds.push(randonPokemonId);
    }
    target.prototype.pokemonsInBagIds = pokemonsInBagIds;
}

@getRandomPokemonIds
export class Trainer {
    name: string;
    pokemonsInBagIds: number[];
    pokemonTeam: Pokemon[];
    constructor(name: string, pokemonsInBagIds?: number[]) {
        this.name = name;
        if (pokemonsInBagIds && pokemonsInBagIds.length)
            this.pokemonsInBagIds = pokemonsInBagIds;
    }

    getPokemon(id: number) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = fetch(url)
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then((response) => {
                const pokemon = new Pokemon(response.name, 10);
                return pokemon;
            });
        return pokemon;
    }

    screenPokemonTeam() {
        const pokemonTeam = this.pokemonsInBagIds.map((id) => this.getPokemon(id));
        Promise.all(pokemonTeam).then((response) => {
            console.log(`${this.name}'s team:`);
            console.log(response);
            console.log();
        });
    }
}

const trainer = new Trainer("Ash", [25, 6, 41]);
const randomTrainer = new Trainer("Rival", []);
console.clear();
trainer.screenPokemonTeam();
randomTrainer.screenPokemonTeam();
