<template>
  <div >
    <div class="slider">
      <ul class="slides">
        <li>
          <img src="https://static.pexels.com/photos/370984/pexels-photo-370984.jpeg"> <!-- random image -->
          <div class="caption center-align">
            <h3>Happy Hour </h3>
            <h5 class="light grey-text text-lighten-3">En todos los tragos -30%<br>De Lunes a Jueves <br>5:00 PM - 8:00 PM</h5>
          </div>
        </li>
        <li>
          <img src="https://static.pexels.com/photos/144429/pexels-photo-144429.jpeg"> <!-- random image -->
          <div class="caption center-align">
            <h3>KARAOKE NIGHT</h3>
            <h5 class="light grey-text text-lighten-3">Jueves 8PM - 12AM<br>Cervezas Nacionales desde 35 Lps</h5>
          </div>
        </li>
        <li>
          <img src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg"> <!-- random image -->
          <div class="caption left-align">
            <h3>Value Lunchs</h3>
            <h5 class="light grey-text text-lighten-3">Desde 110 Lps con servicio a domicilio<br> Lunes - Viernes</h5>
          </div>
        </li>
        <li>
          <img src="https://static.pexels.com/photos/30732/pexels-photo-30732.jpg"> <!-- random image -->
          <div class="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>

      </ul>
    </div>
    <div class="row">
      <div class="col s3 -red" id="contenedor-principal1">THE SPOT</div>
      <div class="col s9 -red" id="contenedor-principal2">Tu nuevo Spot! <br>Restaurante bar con servicio a Domicilio! Value lunch, Cocteleria y shots innovadores! Tienes que conocerlo!</div>
      <div class="col s6 -white" id="contenedor-secundario">UNO</div>
      <div class="col s6 -blue" id="contenedor-secundario">Crear una Cuenta <br>
         <span id="descripcionCont">Conéctate con nosotros y disfruta de muchos beneficios preferenciales</span><br>
         <a class="waves-effect waves-light btn-large -lightblue z-depth-4">
           <i class="large material-icons left">track_changes</i>INFO
         </a>
      </div>
        <div class="parallax-container">
        <div class="parallax"><img src="https://static.pexels.com/photos/30732/pexels-photo-30732.jpg"></div>
      </div>
      <div class="col s3 -lightblue" id="contenedor-principal1">THE SPOT</div>
      <div class="col s9 -lightblue" id="contenedor-principal2">Tu nuevo Spot! <br>Restaurante bar con servicio a Domicilio! Value lunch, Cocteleria y shots innovadores! Tienes que conocerlo!</div>
      <div class="col s4 -white" id="contenedor-secundario">UNO</div>
      <div class="col s4 -blue" id="contenedor-secundario">Crear una Cuenta <br></div>
      <div class="col s4 -white" id="contenedor-secundario">UNO</div>
    </div>
    <div class="row">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
    },
    mounted(){
      $('.parallax').parallax();
			$('.slider').slider();
		}

  }
</script>

<style scoped>
  h3, h5{
    color: #ffff !important;
  }
  .parallax-container {
    height: 300px;
  }
  .-white{
    background-color: #F4F0EA;
    color: black;
  }
  .-lightblue{
    background-color: #5994AA;
    color: #F4F0EA;
  }
  .-blue{
    background-color: #06152F;
    color: #F4F0EA;
  }
  .-red{
    background-color: #FF0B00;
    color: #F4F0EA;
  }
  .-black{
    background-color: black;
    color: #F4F0EA;
  }
  .slider img{
    background: black;
    filter: alpha(opacity=60);
    -moz-opacity: 0.6;
    /* Mozilla */
    opacity: 0.6;
  }
  #descripcionCont{
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  }
  #contenedor-secundario{
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    text-align: right;
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center ;
    height: 500px;

  }
  #contenedor-principal1, #contenedor-principal2{
    height: 100px;
  }
  #contenedor-principal1{
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    text-align: right;
    display:-webkit-box;
    -webkit-box-pack:end;
    -webkit-box-align:start;

  }
  #contenedor-principal2{
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    align-items: flex-start;
    text-align: left;
    display:-webkit-box;
    -webkit-box-align:start;
    padding-top: 15px;
  }
</style>
