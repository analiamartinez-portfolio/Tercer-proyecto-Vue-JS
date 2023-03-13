<template>
  <div class="home">
    <img alt="logo pokemon" src="./../assets/logoPokemonImagen.jpeg" />
    <!-- {{$store.state.pokemon.pokemonList}} -->
    <CompPokemonList :listaPokemon="$store.state.pokemon.pokemonList"/>
  </div> 
</template>

<script>
// import {mapActions} from 'vuex'
import CompPokemonList from "../components/CompPokemonList.vue";


export default {
  name: "Home",
  components: {
    CompPokemonList,
  },
  data(){
    return{
    }
  },
  methods: {
  // ...mapActions(['pokemon/traerPokemonList'])
},
  mounted() {
    if(!this.$store.state.pokemon.pokemonList.length){
      this.$store.dispatch("pokemon/traerPokemonList");
      // El nombre pokemon viene de la carpeta module que tengo en la columna de la izq 
      // y mi archivo se llama module
    }
    // this['pokemon/traerPokemonList']();
  },
};
</script>
