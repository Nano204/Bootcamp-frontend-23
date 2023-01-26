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
    constructor(name: string, pokemonsInBagIds?: number[]) {
        this.name = name;
        if (pokemonsInBagIds) this.pokemonsInBagIds = pokemonsInBagIds;
    }

    async getPokemon(id: number): Promise<Pokemon> {
        return new Pokemon("Pikachu", 10);
    }

    getPokemonTeam() {
        console.log(this.pokemonsInBagIds);
        const pokemonTeam = this.pokemonsInBagIds.map((id) => this.getPokemon(id));
    }
}

const trainer = new Trainer("Ash");
trainer.getPokemonTeam();
