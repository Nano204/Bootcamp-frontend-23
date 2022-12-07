class Pokemon {
  constructor(name, types, evolutionChain, evolutionStage, attacks, generation) {
    this._name = name;
    this._types = types;
    this._evolutionChain = evolutionChain;
    this._evolutionStage = evolutionStage;
    this._attacks = attacks;
    this._generation = generation;
  }

  attack(attackNumber) {
    if (_this.attacks[attackNumber]) {
      return console.log(`${this._name} is using ${_this.attack[1]}`);
    } else {
      return console.log("Invalid option");
    }
  }

  evolve() {
    ++this._evolutionStage;
    this._name = this._evolutionChain[this._evolutionStage];
  }

  get info() {
    console.log("Pokemon name:", this._name);
    console.log("Pokemon types:", this._types);
    console.log("Pokemon Evolution Chain:", this._evolutionChain);
    console.log("Pokemon Evolution Stage:", this._evolutionStage);
    console.log("Pokemon Attacks:", this._attacks);
    console.log("Pokemon Generation:", this._generation);
  }

  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
  get evolutionChain() {
    return this._evolutionChain;
  }
  get evolutionStage() {
    return this._evolutionStage;
  }
  get attacks() {
    return this._attacks;
  }
  get generation() {
    return this._generation;
  }

  set name(name) {
    this._name = name;
  }
  set type(type) {
    this._type = type;
  }
  set evolutionChain(evolutionChain) {
    this._evolutionChain = evolutionChain;
  }
  set evolutionStage(evolutionStage) {
    this._evolutionStage = evolutionStage;
  }
  set attacks(attacks) {
    this._attacks = attacks;
  }
  set generation(generation) {
    this._generation = generation;
  }
}

const pokemon1 = new Pokemon(
  "Gastly",
  ["Poison", "Ghost"],
  ["Gastly", "Haunter", "Gengar"],
  1,
  ["Lick", "Dark Pulse"],
  1
);

// console.log(pokemon1.info())
// console.log(pokemon1.attacks())
// console.log(pokemon1.attacks()= [...pokemon1.attacks(), "Shadow ball"])
// console.log(pokemon1.evolve())