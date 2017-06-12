<template>
  <div class="container">
    <div class="section"></div>
    <main>
      <center>
        <div class="section"></div>
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; width:500px;padding: 32px 50px 0px 50px; border: 1px solid #EEE;">
            <form class="col s12" method="post">
              <div class='row'>
                <div class='col s12'>
                  <h4>Ingresar Datos</h4>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">account_circle</i>
                  <input class='validate' type='text' id='nombre' />
                  <label for='nombre'>Nombre Completo</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">verified_user</i>
                  <input class='validate' type='text' id='usuario' />
                  <label for='usuario'>Usuario</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">phone</i>
                  <input class='validate' type='text'  id='telefono' />
                  <label for='telefono'>Celular</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">vpn_key</i>
                  <input class='validate' type='password' id='password' />
                  <label for='password'>Contraseña</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">vpn_key</i>
                  <input class='validate' type='password' id='password2' />
                  <label for='password2'> Reescribir contraseña</label>
                </div>
              </div>
              <br>
              <center>
                <div class='row'>
                  <button type='submit' name='btn_registrarse' class='col s12 btn btn-large waves-effect -blue'>Registrarse</button>
                </div>
              </center>
            </form>
          </div>
        </div>
      </center>
    </main>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style scoped>
  .container{
    color: black !important;
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
