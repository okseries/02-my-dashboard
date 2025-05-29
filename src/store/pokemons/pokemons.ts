"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/src/pokemons";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonState = {
  ...getInitialState(),
  // "1": {
  //   id: "1",
  //   name: "Bulbasaur",
  // },
};

const PokemonsSlice = createSlice({
  name: "PokemonState",
  initialState,
  reducers: {
    toogleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        // es lo mimso que state[id] !== undefined
        // If the pokemon is already in the state, remove it
        delete state[id];
        // return;
      } else {
        // If the pokemon is not in the state, add it
        state[id] = pokemon;
      }
      // TODO: Esta parte no se deberia hacer aqui ya que es una mala practica, lo hago para probar
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toogleFavorite } = PokemonsSlice.actions;

export default PokemonsSlice.reducer;
