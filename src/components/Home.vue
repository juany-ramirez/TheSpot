<template>
<div>
  <div class="slider">
    <ul class="slides">
      <li>
        <img src="https://static.pexels.com/photos/370984/pexels-photo-370984.jpeg">
        <!-- random image -->
        <div class="caption center-align">
          <h3>Happy Hour </h3>
          <h5 class="light grey-text text-lighten-3">En todos los tragos -30%<br>De Lunes a Jueves <br>5:00 PM - 8:00 PM</h5>
        </div>
      </li>
      <li>
        <img src="https://static.pexels.com/photos/144429/pexels-photo-144429.jpeg">
        <!-- random image -->
        <div class="caption center-align">
          <h3>KARAOKE NIGHT</h3>
          <h5 class="light grey-text text-lighten-3">Jueves 8PM - 12AM<br>Cervezas Nacionales desde 35 Lps</h5>
        </div>
      </li>
      <li>
        <img src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg">
        <div class="caption left-align">
          <h3>Value Lunchs</h3>
          <h5 class="light grey-text text-lighten-3">Desde 110 Lps con servicio a domicilio<br> Lunes - Viernes</h5>
        </div>
      </li>
      <li>
        <img src="https://static.pexels.com/photos/30732/pexels-photo-30732.jpg">
        <!-- random image -->
        <div class="caption right-align">
          <h3>The Spot</h3>
        </div>
      </li>

    </ul>
  </div>
  <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
  <div class="row">
    <div class="col s3 -red" id="contenedor-principal1">THE SPOT</div>
    <div class="col s9 -red" id="contenedor-principal2">
      Tu nuevo Spot!
      <br>Restaurante bar con servicio a Domicilio! Value lunch, Cocteleria y shots innovadores! Tienes que conocerlo!
    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
    <div class="col s6 -white center" id="contenedor-secundario">
      <i class="medium material-icons">location_on</i><br>
       UBÍCANOS:<br>
       <span class="fontBox">Lomas del Guijarro <br>
       Plaza Las Lomas, segundo nivel Antiguo local de Sake Tegucigalpa</span>
    </div>
    <div class="col s6 -blue" id="contenedor-secundario">Crear una Cuenta <br>
      <span id="descripcionCont">Conéctate con nosotros y disfruta de muchos beneficios preferenciales</span><br>
      <a class="waves-effect waves-light btn-large -lightblue z-depth-4">
           <i class="large material-icons left">track_changes</i>INFO
     </a>
    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->

    <div class="card-panel -lightblue" id="homeCard"> </div>

    <div class="imageContainer">
        <img class="col s4" src="..\imgs\grill.jpg">
    </div>
    <div class="imageContainer">
        <img class="col s4" src="..\imgs\table_setting.jpg">
    </div>
    <div class="imageContainer">
        <img class="col s4" src="..\imgs\burger.jpeg">
    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->

    <div class="card-panel -red" id="homeCard"> </div>
    <div class="bg">
      <div class="transbox">
        <p>This is where the party begins</p>
      </div>
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: 'home',
  methods: {},
  mounted() {
    $('.slider').slider();
  }

}
</script>

<style scoped>
  h3,
  h5 {
    color: #ffff !important;
  }
  div.bg {
    background: url('../../imgs/bottles.jpeg') ;
    border: 2px solid black;
  }

  div.transbox {
      margin: 30px;
      border-radius: 10px;
      text-align: center;
      background-color: #ffffff;
      border: 1px solid black;
      opacity: 0.6;
      filter: alpha(opacity=60); /* For IE8 and earlier */
  }

  div.transbox p {
      margin: 5%;
      font-weight: bold;
      font-family: 'Cormorant SC', serif;
      font-size: 50px;
      color: #000000;
  }
  .imageContainer{
    background-color: #262626;
    -khtml-opacity:.50;
    -moz-opacity:.50;
    -ms-filter:”alpha(opacity=50)”;
    filter:alpha(opacity=50);
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.5);
    opacity:.50;
  }
  .fontBox{
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 40px !important;
  }
  #homeCard {
    height: 100px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #06152F;
  }

  .parallax-container {
    height: 300px;
  }
  #descripcionCont {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  }

  #contenedor-secundario {
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    text-align: right;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding-right: 10px;
    height: 500px;
  }

  #contenedor-principal1,
  #contenedor-principal2 {
    height: 100px;
  }

  #contenedor-principal1 {
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    text-align: right;
    display: -webkit-box;
    -webkit-box-pack: end;
    -webkit-box-align: center;
  }

  #contenedor-principal2 {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    align-items: flex-start;
    text-align: left;
    display: -webkit-box;
    -webkit-box-align: center;
    padding-top: 15px;
  }

  .-white{
    background-color: #F4F0EA;
    color: black;
  }
  .-lightblue{
    background-color: #5994AA;
    color: #fff;
  }
  .-blue{
    background-color: #06152F;
    color: #fff;
  }
  .-red{
    background-color: #FF0B00;
    color: #fff;
  }
  .-black{
    background-color: #262626;
    color: #fff;
  }
</style>
