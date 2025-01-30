<script setup>
import MenuLateral from './components/MenuLateral.vue';
import Encabezado from './components/Encabezado.vue';
import Principal from './components/Principal.vue';
</script>

<template>
  <div id="app">

    <div class="menu-lateral">
      <MenuLateral />
    </div>


    <div class="main-content">
   
      <div class="encabezado">
        <Encabezado />
      </div>

      <div class="contenido-principal">
        <Principal />
      </div>
    </div>
  </div>
</template>

  
<script>
export default {};
</script>
  
  <style lang="scss">
  @import "bootstrap/scss/bootstrap";
  @import "../src/styles/App.scss"; 
  </style>
  

