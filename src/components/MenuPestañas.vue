<template>
    <div class="menu-pestanas">
      <button @click="cambiarPestana('empresas')">Empresas</button>
      <button @click="cambiarPestana('nombreEmpresa')">Nombre Empresa</button>
      
      <div v-if="pestana === 'empresas'">
        <h2>Empresas</h2>
      </div>
      
      <div v-if="pestana === 'nombreEmpresa'">
        <h2>{{ empresaInfo.nombre }}</h2>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pestana: 'empresas', 
        empresaInfo: {
          nombre: 'Quipux S.A.S'
        }
      };
    },
    methods: {
      cambiarPestana(pestana) {
        this.pestana = pestana;
      }
    }
  };
  </script>
  
  <style scoped>
  .menu-pestanas {
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #007bff;
    color: white;
  }
  </style>
  