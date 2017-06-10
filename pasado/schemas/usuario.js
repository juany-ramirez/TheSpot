var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  IdPersonal: String,
  idOrdenes: [String],
  usuario : String,
  contrasena : String,
  nombre : String,
  telefono : String
});

module.exports = mongoose.model('usuario', UsuarioSchema);
