var producto = require('../schemas/producto.js');
var mongoose = require('mongoose');

exports.getProductos = {
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}
exports.getProductoId = {
  handler : function(request, reply){
    producto.findOne({'_id' : request.params.id}, function(err, Producto){
      if(!err && Producto){
        return reply(Producto);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto not found'));
      }
    });
  }
}
exports.getProductoIdBebida = {
  handler : function(request, reply){
    producto.find({'idBebida' : request.params.idBebida}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}
exports.getProductoidProducto_Elaborado = {
  handler : function(request, reply){
    producto.find({'idProducto_Elaborado' : request.params.idProducto_Elaborado}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}
exports.getProductoNombre = {
  handler : function(request, reply){
    producto.find({'nombre' : request.params.nombre}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}
exports.getProductoPrecio = {
  handler : function(request, reply){
    producto.find({'precio' : request.params.precio}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}
exports.modifyBebida = {
  handler: function(request, reply){
    bebida.update(
      {'_id': request.params.id},
      {$set:
        {
          idBebida : request.payload.idBebida,
          idProducto_Elaborado : request.payload.idProducto_Elaborado,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          precio : request.payload.precio
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Producto not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProducto = {
  handler: function(request, reply){
    producto.findOne({'_id' : request.params.id}, function(err, Producto){
      if(err){
        return reply(boom.badRequest("Could not delete bebida"));
      }else if(!err && Producto){
        Producto.remove();
        return reply('Bebida deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProducto = {
  handler: function(request, reply){
    var newProducto = new producto({
      idBebida : request.payload.idBebida,
      idProducto_Elaborado : request.payload.idProducto_Elaborado,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      precio : request.payload.precio
    });
    newProducto.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}
