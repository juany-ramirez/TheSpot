<template>
  <div id="root">
      <h2 class="menu-section-title">Bebidas</h2>
      <!-- Item starts -->
      <table>
			<thead>
				<tr>
          <th>_id</th>
          <th>idBebida</th>
          <th>idProducto_Elaborado</th>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="producto in productos">
          <td>{{producto._id}}</td>
          <td>{{producto.idBebida}}</td>
					<td>{{producto.idProducto_Elaborado}}</td>
					<td>{{producto.nombre}}</td>
					<td>{{producto.descripcion}}</td>
					<td>{{producto.precio}}</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data(){
    return{
      productos: [],
      producto:{

      },
      loading: false
    }
  },
  methods: {
    getProductos(){
				this.$http.get('http://localhost:8000/productos').then((response)=>{
					this.productos=response.body;
				});
			}
  },
      beforeMount(){
			this.getProductos();
		}
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
  h4{
    font-family: 'Playfair Display';
    text-align: left;
  }

</style>
