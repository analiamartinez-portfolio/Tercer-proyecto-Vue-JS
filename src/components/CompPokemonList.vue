<template>
  <div>
    <b-table striped :table-variant="tableVariant" :items="listaPokemon" :fields="fields">
      <template #cell(name)="data">
        <h4 @click="vistaDetallesPokemon(data.item.url)" style="cursor:pointer">{{validateName(data.item.name)}}</h4>
      </template>
    </b-table>
    <div class="position">
      <b-button class="change" v-if="nextList >= 20" @click="getPreviusPage">Previus</b-button>
      <input type="number" v-model="currentPage" class="page">
      <b-button class="change" @click="getNextPage">Next</b-button>
    </div>
      
  </div>
</template>

<script>
import validateName from "../utils/mixins";

export default {
  name: "CompPokemonList",
  props: {
        listaPokemon: Array,
    },
  data() {
    return {
      fields: ["name"],
      tableVariant: 'info',
      nextList: 20,
      currentPage: 1
    };
  },
  methods: {
    vistaDetallesPokemon(url){
      this.$router.push({
        name: "DetallesPokemon",
        params:{
          url:url,
          //Si la clave es igual al valor se puede poner solo url cada vez que se define un objeto
        }
        })
      // console.log(url);
    },
    async getNextPage(){
      this.nextList += 20;
      this.currentPage++;
      this.$store.dispatch("pokemon/traerPokemonList", this.nextList);
    },
    async getPreviusPage(){
      this.nextList -= 20;
      this.currentPage--;
      this.$store.dispatch("pokemon/traerPokemonList", this.nextList);
    }
  },
  mixins: [validateName]
};

</script>

<style scoped>
h4{
  color: rgb(8, 38, 84);
}

.page{
text-align: center;
border: none;
pointer-events:none;
font-weight: bolder;
}

.change{
  background-color:  rgb(95, 151, 233);
  font-weight: bold;
  border:none;
  letter-spacing: 0.7px;
}
.position{
  margin-top: 4em;
  padding-bottom: 4em;
}
.table {
  --bs-table-accent-bg:  rgb(95, 151, 233);
}
</style>