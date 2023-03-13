<template>
<div>
  <b-modal id="modal-editar-pokemon" centered title="Editar Pokemon">
    <p class="my-4">
    <b-row>Nombre:{{nombre}}
        <input v-model="nombre" type="text">
    </b-row>
    <b-row>Peso:
        <input v-model.number="peso" type="number">
    </b-row> 
    <b-row>Altura:
        <input v-model.number="altura" type="number">
    </b-row> 
    <b-row>Tipo:
        <input v-model="tipo"  type="text">
    </b-row> 
    <b-row>Imagen:
        <input v-model="imagen"  type="text">
    </b-row> 
    </p>
        <template #modal-footer>
      <b-button size="sm" variant="success" @click="aceptar">
        Aceptar
      </b-button>
      <b-button size="sm" variant="danger" @click="cancelar">
        Cancelar
      </b-button>
    </template>
  </b-modal>
</div>
</template>

<script>

export default {
name: "editPokemonModal",
props:{
    nombre: String,
    imagen: String,
    peso: Number,
    altura: Number,
    tipo: String,
  },
data(){
    return{
       
    }
},
methods: {
    aceptar(){
        // this.$store.commit("pokemon/createNewPokemon", this.editPokemon);
        const pokemonEditado = {
            nombre: this.nombre,
            imagen: this.imagen,
            peso: this.peso,
            altura: this.altura,
            tipo: this.tipo,
        }
        this.$store.commit("pokemon/editPokemon", pokemonEditado);
        this.$bvModal.hide('modal-editar-pokemon')
    },
    cancelar(){
        this.$bvModal.hide('modal-editar-pokemon')
    }
},

}
</script>

<style scoped>
h1{
  color:  rgb(8, 38, 84);
  margin-top: 1.5em;
  margin-bottom: 1em;
}

</style>