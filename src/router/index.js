import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/DetallesPokemon",
    name: "DetallesPokemon",
    props:({params})=>{
     return{
       ...params
     } 
    },
    
    component: () =>
      import("./../views/DetallesPokemon.vue"),
  },
  {
    path: "/Favoritos",
    name: "Favoritos",
    component: () =>
      import("./../views/Favoritos.vue"),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
