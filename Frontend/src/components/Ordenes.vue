<template>
  <div class="container">
    <br>
    <ul id="tabs-swipe-demo" class="tabs z-depth-6 -red">
    <li class="tab col s6"><a class="active" href="#test-swipe-1"> MESAS </a></li>
    <li class="tab col s6"><a href="#test-swipe-2"> ORDENES </a></li>
    </ul>
    <div id="test-swipe-1" >
      <br>
      <div class="row">
        <div id="cuadroMesa" class="col s4 z-depth-5 -lightblue" >
          <br><br>
          <span id="tituloMesa"> <i class="material-icons">shopping_cart</i> Mesa 1</span>
          <p>
              <div id="modal1" class="modal modal-fixed-footer">
                <div class="modal-content -white">
                  <h4>Crear Orden</h4>
                  <p>Ingrese las ordenes</p>
                  <span>
                    <div class="input-field col s12">
                      <input id="nombre" type="text" class="validate">
                      <label for="nombre">Nombre:</label>
                    </div>
                  </span>
                  <div class="row">
                     <div class="col s6">
                       <ul class="collection">
                         <li class="collection-header"><h4>Combos</h4></li>
                         <li class="collection-item dismissable"><div>Combo - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                       <ul class="collection">
                         <li class="collection-header"><h4>Promocion</h4></li>
                         <li class="collection-item dismissable"><div>Promocion - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                       <ul class="collection">
                         <li class="collection-header"><h4>Producto</h4></li>
                         <li class="collection-item dismissable"><div>Producto - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                     </div>
                     <div class="col s6">
                       <ul class="collection">
                         <li class="collection-header"><h4>Orden</h4></li>
                         <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                         <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                       </ul>
                       <label  >TOTAL: 200 LPS</label>
                     </div>
                   </div>
                </div>
                <div class="modal-footer -red">
                  <a href="#!" id="btnModal" class="modal-action modal-close waves-effect waves-red btn-flat -lightblue ">Cancelar</a>
                  <a href="#!" id="btnModal" class="modal-action modal-close waves-effect waves-green btn-flat -blue">Crear</a>
                </div>
              </div>
              <ul class="collection z-depth-4" >
                <li class="collection-header">
                  Ordenes
                  <a class="modal-trigger btn-floating btn-small waves-effect waves-light -red" href="#modal1">
                    <i class="material-icons">add</i>
                  </a>
                </li>
                <li class="collection-item">
                  <div>
                    <a class="btn-floating waves-effect waves-light btn  grey grey darken-3"><i class="material-icons">input</i></a>
                    <a  class="btn-floating waves-effect waves-light btn grey grey darken-3"><i class="material-icons">receipt</i></a>
                    Orden 1
                  </div>
                </li>
              </ul>
          </p>
          <br><br>
        </div>

      </div><br><br><br><br>
    </div>
    <div id="test-swipe-2">
      <br>
      <div id="cuadroMesa" class="col s4 z-depth-5 -lightblue" >
        <br><br>
        <span id="tituloMesa"> <i class="material-icons">shopping_cart</i> ORDEN 1</span>
        <p>
          <a class="btn-floating waves-effect waves-light btn grey grey darken-3"><i class="material-icons">receipt</i></a>
        </p>
        <br><br>
      </div>
    </div>
    <br>

  </div>
</template>

<script>
export default {
  name: 'ordenes',
  mounted() {
    $('ul.tabs').tabs();
    $('.modal').modal();
  }
}
</script>

<style scoped>
  .modal-content h4{
    font-family: 'Lobster Two', cursive;
    color: #06152F;
    background-color: #262626;
    color: #F4F0EA;
  }
  .collection{
    border-radius: 10px;
  }
  .modal-content .collection-item{
      text-align: left;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
  }
  .collection-item{
      text-align: left;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      background-color: #F4F0EA;
      color: black;
  }
  .collection-header{
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
  }
  #test-swipe-1 .row{
    padding: 12px;
    border-radius: 10px;
  }
  a :hover{
    opacity: .5;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }
  #btnModal:hover{
    opacity: .7;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }

  #cuadroMesa{
    text-align: center;
    border-radius: 20px;
    border:5px solid #F4F0EA;
  }
  #tituloMesa{
    font-family: 'Cormorant SC', serif!important;
    font-weight: bold;
    font-size: 35px;
  }
  .tabs .tab a.active {
    color: #F4F0EA;
    font-size: 30px !important;
  }

  .tabs .tab a:hover {
    color: #b1aea8;
    font-size: 30px !important;
  }
  .modal-content{
    text-align: left !important;
  }
  .tabs .tab a {
    color: black;
    font-size: 30px !important;
  }
  .tabs{
    font-family: 'Oswald', sans-serif!important;
    font-weight: bold;
    font-size: 30px !important;
    border-radius: 10px;
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
    background-color: #262626;
    color: #F4F0EA;
  }

</style>
