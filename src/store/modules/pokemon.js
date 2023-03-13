import axios from "axios";

const state = {
  pokemonList: [],
  limitTable: 20,
  favourites: [],
};
const mutations = {
  createNewPokemon(state, newPokemon){
    // console.log(newPokemon)
    state.favourites.push(newPokemon);
  },
  deletePokemon(state, pokemon){
    state.favourites.forEach(elm => {
      // console.log(elm)
      if (elm.nombre === pokemon) state.favourites.splice(state.favourites.indexOf(elm),1)
    })
  },
  editPokemon(state, pokemon){
    state.favourites.forEach(elm => {
      console.log(elm)
      if (elm.nombre === pokemon.nombre) state.favourites.splice(state.favourites.indexOf(elm), 1, pokemon)
    })
    console.log(pokemon)
  },

  guardarPokemonList(state, lista) {
    state.pokemonList = lista;
  },
  saveToFavourites(state, pokemon){
    state.favourites.push(pokemon);
    console.log(state.favourites);
  },

};
const actions = {
    traerPokemonList({ commit }, nextList) {
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${nextList}&limit=${this.limitTable}`)
        .then((request) => {
          // console.log(request);
      commit("guardarPokemonList", request.data.results);
    });
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
