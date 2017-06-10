var mongoose = require('mongoose');

var BebidaSchema = new mongoose.Schema({
  idProveedor: String,
  tipo : String,
  inventario : Number,
  descripcion : String
});

module.exports = mongoose.model('bebida', BebidaSchema);
