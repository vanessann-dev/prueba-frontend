<template>
    <div class="container">
      <div class="column">
        <h2>INFORMACIÓN DE LA EMPRESA</h2>
        <p><strong>Nombre:</strong> {{ empresaInfo.nombre }}</p>
        <p><strong>Fecha de Creación:</strong> {{ empresaInfo.fechaCreacion }}</p>
        <p><strong>Dirección:</strong> {{ empresaInfo.direccion.calle }}, {{ empresaInfo.direccion.edificio }}, {{ empresaInfo.direccion.distrito }} </p>
        <p><strong>Ciudad:</strong> {{ empresaInfo.direccion.ciudad }}</p>
        <p><strong>País:</strong> {{ empresaInfo.direccion.pais }}</p>
        <p><strong>Teléfonos:</strong> {{ empresaInfo.telefonos.fijo }} / {{ empresaInfo.telefonos.fax }}</p>
        <p><strong>Sitio Web:</strong> <a :href="'http://' + empresaInfo.sitioWeb" target="_blank">{{ empresaInfo.sitioWeb }}</a></p>
      </div>
  
      <div class="column">
        <h2>INFORMACIÓN DE CONTACTO</h2>
        <p><strong>Dirección:</strong> {{ contactoInfo.direccion.calle }}, {{ contactoInfo.direccion.ciudad }}, {{ contactoInfo.direccion.pais }}</p>
        <p><strong>Correo:</strong> <a :href="'mailto:' + contactoInfo.correo">{{ contactoInfo.correo }}</a></p>
        <p><strong>Sitio Web:</strong> <a :href="'http://' + contactoInfo.sitioWeb" target="_blank">{{ contactoInfo.sitioWeb }}</a></p>
        <p><strong>Redes Sociales:</strong></p>
        <ul>
          <li><a :href="contactoInfo.redesSociales.instagram" target="_blank">Instagram</a></li>
          <li><a :href="contactoInfo.redesSociales.linkedin" target="_blank">LinkedIn</a></li>
        </ul>
        <p><strong>Dirección de Correspondencia:</strong> {{ contactoInfo.direccionCorrespondencia.calle }}, {{ contactoInfo.direccionCorrespondencia.ciudad }}</p>
        <p><strong>Teléfonos:</strong> {{ contactoInfo.telefonos.fijo }} / {{ contactoInfo.telefonos.celular }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        empresaInfo: {},
        contactoInfo: {}
      };
    },
    mounted() {
     
      fetch('/info-contacto.json')
        .then(response => response.json())
        .then(data => {
          this.empresaInfo = data.empresaInfo;
          this.contactoInfo = data.contactoInfo;
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import '../styles/InfoEmpresas.scss';
  
  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .column {
    width: 45%;
  }
  </style>
  