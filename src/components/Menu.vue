<template>
  <div class="container">
    <div class="card-panel -white" id="homeCard">
    </div>
    <div class="card-panel -white" id="homeCard">
      <div class="col s12 -lightblue"> </div>
    </div>
    <div class="card-panel -white" id="homeCard">
      <div class="col s12 -lightblue"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style scoped>
  #homeCard {
    height: 230px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #06152F;
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
