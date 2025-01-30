<template>
  <div class="search-section row">
    <div class="col-md-8">
      <h2 class="text-primary title-custom">¿Qué quieres buscar?</h2>
      <p>Encuentra la información que desees consultar ...</p>
      <div class="input-group mb-3">
        <select class="form-control" style="background-color: #D8F1FF;">
          <option>Todos los servicios</option>
        </select>
        <input type="text" class="form-control" placeholder="Qué servicio quieres consultar" />
        <button class="btn btn-primary">
          <i class="fa fa-search"></i>
        </button>
      </div>

      <div class="card custom-card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <h5 class="cardTitle">Certificado</h5>
              <p class="card-text">Conoce los beneficios que tenemos para ti al registrarte.</p>
              <button class="btn btn-outline-success">Beneficios</button>
            </div>
            <div class="col-md-4">
              <h5 class="cardTitle">Crea cuenta</h5>
              <p class="card-text">Conoce los beneficios que tenemos para ti al registrarte.</p>
              <button class="btn btn-outline-success">Ver todo</button>
            </div>
            <div class="col-md-4">
              <h5 class="cardTitle">Top trámites</h5>
              <p class="card-text">Conoce los trámites más solicitados.</p>
              <button class="btn btn-outline-success">Ver todo</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="image-container position-relative">
        <img src="/src/assets/Images/resource-1.png" alt="Perfil" class="profile-img" />
        <div class="overlay-text">
          <h4>SERVICIOS QUIPUX</h4>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="cardTitle">Trámites en tu mano</h5>
          <p class="card-text">
            Ahora podrás hacer todos tus trámites desde la comodidad de tu casa, desde cualquier dispositivo, ya sea computadora, tablet o móvil.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "../styles/variables.scss";
@import "bootstrap/scss/bootstrap";
@import "../styles/Principal.scss"; 
</style>