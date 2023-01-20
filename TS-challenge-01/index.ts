let PI: number;
let age: number;
let PersonName: string;
let maybe: number | string;
let rol: role;
type role = "Admin" | "User";

rol = "User";
maybe = 25;
PI = Math.PI;
PersonName = "Alexander";
age = 24;
maybe = "something else";
rol = "Admin";

type person = {
    name: string;
    age: number;
    rol: role;
};

const person: any = {
    name: PersonName,
    age,
    rol, // can be Admin or User
};

type pokemonType = { name: string; url: string };
type typesList = { slot: number; type: pokemonType }[];

type pokemonMove = { name: string; url: string };
type movesList = { move: pokemonMove }[];

type spritesList = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience?: number;
    types: typesList;
    moves: movesList;
    sprites: spritesList;
}

const pikachu: Pokemon = {
    id: 25,
    name: "pikachu",
    height: 4,
    weight: 60,
    base_experience: 112, // this can be optional value
    types: [
        {
            slot: 1,
            type: {
                name: "electric",
                url: "https://pokeapi.co/api/v2/type/13/",
            },
        },
    ],
    moves: [
        {
            move: {
                name: "thunderbolt",
                url: "https://pokeapi.co/api/v2/move/85/",
            },
        },
        {
            move: {
                name: "thunder",
                url: "https://pokeapi.co/api/v2/move/87/",
            },
        },
        {
            move: {
                name: "iron-tail",
                url: "https://pokeapi.co/api/v2/move/231/",
            },
        },
    ],
    sprites: {
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        back_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        front_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
    },
};

console.log(person);
