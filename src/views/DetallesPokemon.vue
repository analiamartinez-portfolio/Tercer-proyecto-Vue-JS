<template>
  <div v-if=loading>
      <h1>Detalles Personajes Pokemon</h1>
<div>
  <b-container>
<b-row class="justify-content-center">
  <b-card no-body class="overflow-hidden prueba" style="max-width: 540px">
    <b-row  no-gutters>
      <b-col md="6">
        <b-card-img :src="pokemon.imagen" 
        alt="Image" 
        class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-row ><b-card-body :title="validateName(pokemon.nombre)"><hr class="lineStyle"/></b-card-body></b-row>

        <b-row><b-card-text>
          <h5 class="card-text">Peso: {{pokemon.peso}}</h5>
          <hr class="lineStyle"/>
          </b-card-text></b-row>

          <b-row><b-card-text>
           <h5 class="card-text">Altura: {{pokemon.altura}}</h5>
          <hr class="lineStyle"/>
          <br>
          <b-row>
            
             <h5 class="card-text">Tipo: {{validateName(pokemon.tipo)}}</h5>
          </b-row>
           
    <div class="icon-heart" style="font-size: 2.5rem; cursor:pointer">
    <b-icon @click="sendFavoritos" icon="heart-fill" class="rounded-circle bg-info p-2" variant="light" shift-v = "-1"></b-icon>
    </div>
   

          </b-card-text></b-row>
      </b-col>
    </b-row>
  </b-card>
</b-row>
  </b-container>
</div>
<div class="positionVolver">
  <b-button class="change-uno" @click="back">Volver</b-button>
</div>
    
  </div>

</template>

<script>
import validateName from "../utils/mixins";

export default {
  name: "DetallesPokemon",
  props:{
    url:{
      type:String,
    }
  },
  computed: {
    // Cuando solo tengo que transformar 1 dato no utilizo un mixin pero si una computada
    // nameValidator(){
    //     return this.pokemon.nombre[0].toUpperCase() + this.pokemon.nombre.substring(1)
    // },
  },
  data() {
  return {
    detallesIndPokemon:[],
    pokemon: {
      nombre: '',
      imagen: '',
      peso: '',
      altura: '',
      tipo: '',
    },
    loading: false,
  };
  },
  methods: {
    back(){
      this.$router.back()
      // Tambien puedes poner this.$router.go(-1) para volver atrás, si pones -2 son 2 pasos atrás
    },
    async getDetallesIndPokemon() {
      try {
        const data = await fetch(this.url);
        this.detallesIndPokemon = await data.json();
        this.pokemon.nombre = this.detallesIndPokemon.name;
        this.pokemon.imagen = this.detallesIndPokemon.sprites.other.dream_world.front_default;
        this.pokemon.peso = this.detallesIndPokemon.weight;
        this.pokemon.altura = this.detallesIndPokemon.height;
        this.pokemon.tipo = this.detallesIndPokemon.types[0].type.name;
        // console.log(this.detallesIndPokemon);
      } catch (error) {
        console.log(error);
      }finally{
        this.loading = true;
      }
    },
    sendFavoritos(){
      this.$store.commit("pokemon/saveToFavourites", this.pokemon);
      this.back();
      // console.log(this.pokemon);
    }
  },
  mixins: [validateName],
  mounted(){
    this.getDetallesIndPokemon();
    // console.log(this.url)
  }

}
</script>

<style scoped>

h1{
  color:  rgb(8, 38, 84);
  margin-top: 1.5em;
  margin-bottom: 1em;
}

.positionVolver{
  margin-top: 4em;
}

.card-title{
  color: rgb(8, 38, 84);
}

.change-uno{
  background-color: rgb(95, 151, 233);
  font-weight: bold;
  border:none;
  letter-spacing: 0.7px;
}
.card-text{
  color: rgb(8, 38, 84);
  margin-bottom: 21px;
}
.lineStyle{
  height: 3px;
  background-color:  rgb(95, 151, 233);
  border: none;
}
.prueba{
  padding: 3%;
  border-color:  rgb(95, 151, 233);
}

.icon-heart{
  margin-left: 5em;
}
.prueba[data-v-1083688d] {
    padding: 2%;
    border-color: rgb(95, 151, 233);
    padding-bottom: 0px;
}

</style>