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
        <div class="col s4 -white" >
          <br><br>
          <span>Mesa 1</span>
          <span>
            <div class="input-field col s12">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Nombre:</label>
          </div>
          </span>
          <p>
              <p class="col s6">Ordenes </p>
              <p class="col s6"><a class="modal-trigger btn-floating btn-small waves-effect waves-light -red" href="#modal1"><i class="material-icons">add</i></a></p>
              <div id="modal1" class="modal modal-fixed-footer">
                <div class="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                  <form action="#">
                    <ul class="collection with-header">
                         <li class="collection-header"><h4>Combos</h4></li>
                           <li class="collection-item">Platillo
                            <input type="checkbox" class="filled-in" id="checkListC1" />
                            <label for="checkListC1">Filled in</label>
                          </li>
                           <li class="collection-item">Platillo
                            <input type="checkbox" class="filled-in" id="checkListC2" />
                            <label for="checkListC2">Filled in</label>
                          </li>
                           <li class="collection-item">Platillo
                            <input type="checkbox" class="filled-in" id="checkListC3" />
                            <label for="checkListC3">Filled in</label>
                          </li>
                           <li class="collection-item">Platillo
                            <input type="checkbox" class="filled-in" id="checkListC4" />
                            <label for="checkListC4">Filled in</label>
                          </li>
                    </ul>
                    <ul class="collection with-header">
                         <li class="collection-header"><h4>Bebidas</h4></li>
                           <li class="collection-item">Trago
                            <input type="checkbox" class="filled-in" id="checkListB1" />
                            <label for="checkListB1">Filled in</label>
                          </li>
                           <li class="collection-item">Trago
                            <input type="checkbox" class="filled-in" id="checkListB2" />
                            <label for="checkListB2">Filled in</label>
                          </li>
                           <li class="collection-item">Trago
                            <input type="checkbox" class="filled-in" id="checkListB3" />
                            <label for="checkListB3">Filled in</label>
                          </li>
                           <li class="collection-item">Trago
                            <input type="checkbox" class="filled-in" id="checkListB4" />
                            <label for="checkList4">Filled in</label>
                          </li>
                    </ul>
                    <ul class="collection with-header">
                         <li class="collection-header"><h4>Individuales</h4></li>
                           <li class="collection-item">Plato
                            <input type="checkbox" class="filled-in" id="checkListI1" />
                            <label for="checkListI1">Filled in</label>
                          </li>
                           <li class="collection-item">Plato
                            <input type="checkbox" class="filled-in" id="checkListI2" />
                            <label for="checkListI2">Filled in</label>
                          </li>
                           <li class="collection-item">Plato
                            <input type="checkbox" class="filled-in" id="checkListI3" />
                            <label for="checkListI3">Filled in</label>
                          </li>
                           <li class="collection-item">Plato
                            <input type="checkbox" class="filled-in" id="checkListI4" />
                            <label for="checkList4">Filled in</label>
                          </li>
                    </ul>

                  </form>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Disagree</a>
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                </div>
              </div>
          </p>
          <br><br>
        </div>
        <div class="col s4 -blue" >
          DOS
        </div>
        <div class="col s4 -white" >
          TRES
        </div>
      </div><br><br><br><br>
    </div>
    <div id="test-swipe-2">
      <br>
      Test 2
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
  #test-swipe-1 .row{

    padding: 12px;
    border-radius: 10px;
  }
  .tabs .tab a.active {
    color: #F4F0EA;
    font-size: 30px !important;
  }

  .tabs .tab a:hover {
    color: #b1aea8;
    font-size: 30px !important;
  }

  .tabs .tab a {
    color: black;
    font-size: 30px !important;
  }
  .tabs{
    font-family: 'Oswald', sans-serif;
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
