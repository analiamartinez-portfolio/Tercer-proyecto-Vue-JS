<template>
  <div>
      <b-container>
<b-row class="justify-content-center margenes-card">
  <b-card no-body class="overflow-hidden prueba" style="max-width: 540px">
    <b-row  no-gutters>
      <b-col md="6">
        <b-card-img :src="imagen"
        alt="Image" 
        class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-row ><b-card-body :title="validateName(nombre)"><hr class="line"/></b-card-body></b-row>

        <b-row><b-card-text>
          <h5 class="text-card">Peso: {{peso}} </h5>
          <hr class="line"/>
          </b-card-text></b-row>

          <b-row><b-card-text>
           <h5 class="text-card">Altura: {{altura}}</h5>
          <hr class="line"/>
          <br>
          <b-row>
            
             <h5 class="text-card">Tipo: {{validateName(tipo)}}</h5>
          </b-row>
           
    <div  class="icon-delete"   style="font-size: 2.5rem;">
      <b-row>
        <b-col>
          <b-icon @click="deletePokemon" icon="x" class="rounded-circle bg-danger p-2" variant="light" shift-v = "-1" style="cursor:pointer"></b-icon>
        </b-col>
        <b-col>
          <b-icon @click="editPokemon" icon="pencil-fill" class="rounded-circle bg-info p-2" variant="light" style="cursor:pointer " ></b-icon>
        </b-col>
      </b-row>
    
    </div>

          </b-card-text></b-row>
      </b-col>
    </b-row>
  </b-card>
</b-row>
  </b-container>
  </div>
</template>

<script>
import validateName from "../utils/mixins";

export default {
name: "CardFavourites",
props:{
    nombre: String,
    imagen: String,
    peso: Number,
    altura: Number,
    tipo: String,
  },
  methods: {
    deletePokemon(){
      console.log(this.nombre);
      this.$store.commit("pokemon/deletePokemon", this.nombre);
    },
    editPokemon(){
        const editarPokemon = {
            nombre: this.nombre,
            imagen: this.imagen,
            peso: this.peso,
            altura: this.altura,
            tipo: this.tipo,
        }
        this.$emit('pokemonEdit', editarPokemon)
    }
  },
  mixins: [validateName],
}
</script>

<style scoped>

.line{
  height: 3px;
  background-color:  rgb(95, 151, 233);
  border: none;
}

.text-card{
  color: rgb(8, 38, 84);
  margin-bottom: 21px;
}
.card-title{
  color: rgb(8, 38, 84);
}
.prueba{
  padding: 3%;
  border-color:  rgb(95, 151, 233);
}
.icon-delete{
  margin-left: 3.5em;
}
.margenes-card{
  margin-top: 12%;
}

</style>