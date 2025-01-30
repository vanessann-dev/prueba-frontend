<template>
  <div class="d-flex" id="sidebar-container">
    <div :class="['sidebar', { 'sidebar-expanded': expanded }]">
      

      <div class="menu-header">
        <button class="btn toggle-btn" @click="toggleMenu">
          <img src="/src/assets/Images/menu.svg" alt="Menu" class="hamburger-icon" />
        </button>

        <div v-if="expanded" class="logo-expanded">
          <img src="/src/assets/Images/logo.jpg" alt="Logo" class="logo-img-medium" />
        </div>
      </div>

 
      <div v-if="expanded" class="menu-title">
        <span>ENTITIES</span>
        <div class="title-line"></div>
      </div>

      <div class="menu">
   
        <div class="menu-item" @click="toggleDropdown('empresas')">
          <img src="/src/assets/Images/bag.svg" alt="Empresas" class="icon" />
          <span v-if="expanded">EMPRESAS</span>
          <i class="fa fa-chevron-down" v-if="!dropdown.empresas"></i>
          <i class="fa fa-chevron-up" v-if="dropdown.empresas"></i>
        </div>

      
        <div v-if="dropdown.empresas" class="submenu">
          <div class="submenu-line-container">
            <div class="submenu-line"></div>
          </div>
          
        
          <router-link to="/empresas">Empresas</router-link>
        </div>

   
        <div class="menu-item" @click="toggleDropdown('articulos')">
          <img src="/src/assets/Images/document.svg" alt="Artículos" class="icon" />
          <span v-if="expanded">ARTÍCULOS</span>
          <i class="fa fa-chevron-down" v-if="!dropdown.articulos"></i>
          <i class="fa fa-chevron-up" v-if="dropdown.articulos"></i>
        </div>

        <div v-if="dropdown.articulos" class="submenu">
          <a href="#">Artículo</a>
        </div>

        <div class="menu-item" @click="toggleDropdown('colaboradores')">
          <img src="/src/assets/Images/colaborator.svg" alt="Colaboradores" class="icon" />
          <span v-if="expanded">COLABORADORES</span>
          <i class="fa fa-chevron-down" v-if="!dropdown.colaboradores"></i>
          <i class="fa fa-chevron-up" v-if="dropdown.colaboradores"></i>
        </div>

        <div v-if="dropdown.colaboradores" class="submenu">
          <a href="#">Colaboradores</a>
        </div>
      </div>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      dropdown: {
        empresas: false,
        articulos: false,
        colaboradores: false,
      },
    };
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
    toggleDropdown(menu) {
      this.dropdown[menu] = !this.dropdown[menu];
    },
  },
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "bootstrap/scss/bootstrap";
@import "../styles/MenuLateral.scss"; 
</style>
