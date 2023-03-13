<template>
<div>
  <b-modal id="modal-center" centered title="Crear Nuevo Pokemon">
    <p class="my-4">
    <b-row>Nombre:
        <input v-model="newPokemon.nombre" type="text">
    </b-row>
    <b-row>Peso:
        <input v-model.number="newPokemon.peso" type="number">
    </b-row> 
    <b-row>Altura:
        <input v-model.number="newPokemon.altura" type="number">
    </b-row> 
    <b-row>Tipo:
        <input v-model="newPokemon.tipo"  type="text">
    </b-row> 
    <b-row>Imagen:
        <input v-model="newPokemon.imagen"  type="text">
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
name: "ModalNewPokemon",
props:{
    nombre: String,
    imagen: String,
    peso: Number,
    altura: Number,
    tipo: String,
  },
data(){
    return{
        newPokemon: {
        }
// nombre: "",
// peso: 0,
// altura: 0,
// tipo: "",
// imagen: "",
    }
},
methods: {
    aceptar(){
        this.$store.commit("pokemon/createNewPokemon", this.newPokemon);
        this.$bvModal.hide('modal-center')
        this.newPokemon = {}
        // // console.log(this.newPokemon);
    },
    cancelar(){
        this.$bvModal.hide('modal-center')
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