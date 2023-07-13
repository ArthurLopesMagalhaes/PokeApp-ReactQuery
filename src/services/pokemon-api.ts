import { api } from "./api";
import { GetPokemonsResponse } from "./models/getPokemons";

export const PokemonAPI = {
  getPokemons: async () => {
    const response = await api.get<GetPokemonsResponse>(
      "https://pokeapi.co/api/v2/"
    );
  },
};
