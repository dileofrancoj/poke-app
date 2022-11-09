import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    isLoading: false,
    page: 0,
  },
  reducers: {
    increment: (state /*actions*/) => {},
  },
});

export const {} = pokemonSlice.actions;
