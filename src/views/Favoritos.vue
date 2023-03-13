<template>
  <div>
     <h1>Mis Pokemon Favoritos</h1>
     <!-- {{$store.state.pokemon.favourites}} -->
    <b-container>
      <div class="margenes-card">
        <b-button @click="$bvModal.show('modal-center')" variant="info" v-b-tooltip title="Crear Pokemon">
        <b-icon icon="plus"></b-icon>
        </b-button>
      </div>

      <b-row>
          <b-col v-for="pokemon in $store.state.pokemon.favourites" :key="pokemon.index" md="6">
          <cardFavourites :nombre="pokemon.nombre" :peso="pokemon.peso" :altura="pokemon.altura"
          :tipo="pokemon.tipo" :imagen="pokemon.imagen" @pokemonEdit="editarPokemon"/>
          </b-col>
      </b-row>

      <modalNewPokemon />
       <editPokemonModal :nombre="pokemonParaEditar.nombre" :peso="pokemonParaEditar.peso" :altura="pokemonParaEditar.altura"
          :tipo="pokemonParaEditar.tipo" :imagen="pokemonParaEditar.imagen" />
  </b-container>
  
  </div>
  
</template>

<script>
import cardFavourites from "../components/CardFavourites.vue";
import modalNewPokemon from "../components/ModalNewPokemon.vue";
import editPokemonModal from "../components/EditPokemonModal.vue";

export default {
name: "Favoritos",
 components: {
    cardFavourites,
    editPokemonModal,
    modalNewPokemon,
  },
  data(){
    return{
      pokemonParaEditar:{},
    }
  },
  methods: {
    pokemonCreate(){
     console.log("nuevo pokemon")
    },
    editarPokemon(value){
      console.log(value, 'value')
      this.pokemonParaEditar = value;
      this.$bvModal.show('modal-editar-pokemon')
    }
}
}
</script>

<style>
h1{
  color:  rgb(8, 38, 84);
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.margenes-card{
  margin-top: 1%
}

</style>