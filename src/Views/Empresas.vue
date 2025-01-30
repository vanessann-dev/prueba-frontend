<template>
  <div class="empresas">
    <MenuLateral />
    <div class="contenido-principal">
      <MenuPestañas />
      <InfoEmpresa />
    </div>
  </div>
</template>

<script>
import MenuLateral from '../components/MenuLateral.vue';
import MenuPestañas from '../components/MenuPestañas.vue';
import InfoEmpresa from '../components/InfoEmpresas.vue';

export default {
  name: 'Empresas',
  components: {
    MenuLateral,
    MenuPestañas,
    InfoEmpresa
  },
  mounted() {
    console.log('prueba mensaje');
  }
};
</script>

<style scoped>
.empresas {
  display: block;
}

.contenido-principal {
  flex-grow: 1;
  padding: 20px;
}
</style>
