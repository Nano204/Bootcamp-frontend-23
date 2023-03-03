export type Reference = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Reference;
};

export type Ability = {
  ability: Reference;
  is_hidden: boolean;
  slot: number;
};

export type Type = {
  slot: number;
  type: Reference;
};

export type PokemonResponse = {
  name: string;
  id: number;
  species: Reference;
  height: number;
  weight: number;
  sprites: { other: { ['official-artwork']: { front_default: string } } };
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
};

export type SpecieRequest = {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: Reference;
    version: Reference;
  }[];
};
