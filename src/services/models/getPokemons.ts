export interface GetPokemonsResponse {
  pokemon: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
