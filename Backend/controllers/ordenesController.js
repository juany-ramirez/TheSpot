var orden = require('../schemas/orden.js');
var mongoose = require('mongoose');

exports.getOrdenes = {
  handler: function(request, reply){
    var ordenes = orden.find({});
    reply(ordenes);
  }
}
exports.getOrdenesId = {
  handler : function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(!err && Orden){
        return reply(Orden);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Orden not found'));
      }
    });
  }
}
exports.getOrdenesName = {
  handler : function(request, reply){
    orden.find({'nombre' : request.params.nombre}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesIdCombos = {
  handler : function(request, reply){
    orden.find({'idProveedor' : request.params.idCombos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesProductos = {
  handler : function(request, reply){
    orden.find({'idProductos' : request.params.idProductos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesPromociones = {
  handler : function(request, reply){
    orden.find({'idPromociones' : request.params.idPromociones}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesMesa = {
  handler : function(request, reply){
    orden.find({'idMesa' : request.params.idMesa}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesFecha = {
  handler : function(request, reply){
    orden.find({'fecha' : request.params.fecha}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenPersonal = {
  handler : function(request, reply){
    orden.find({'idPersonal' : request.params.idPersonal}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.modifyOrden = {
  handler: function(request, reply){
    orden.update(
      {'_id': request.params._id},
      {$set:
        {
          idCombos: request.payload.idCombos,
          idProductos: request.payload.idProductos,
          idPromociones: request.payload.idPromociones,
          idCliente: request.payload.idCliente,
          nombreCliente: request.payload.nombreCliente,
          idPersonal: request.payload.idPersonal,
          idFacturas: request.payload.idFacturas,
          idMesa: request.payload.idMesa,
          total: request.payload.total,
          fecha : request.payload.fecha,
          efectivo: request.payload.efectivo,
          tarjeta: request.payload.tarjeta
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Orden not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteOrden = {
  handler: function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(err){
        return reply(boom.badRequest("Could not delete Orden"));
      }else if(!err && Orden){
        Orden.remove();
        return reply('Orden deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createOrden = {
  handler: function(request, reply){
    var newOrden = new orden({
      idCombos: request.payload.idCombos,
      idProductos: request.payload.idProductos,
      idPromociones: request.payload.idPromociones,
      idCliente: request.payload.idCliente,
      nombreCliente: request.payload.nombreCliente,
      idPersonal: request.payload.idPersonal,
      idFacturas: request.payload.idFacturas,
      idMesa: request.payload.idMesa,
      total: request.payload.total,
      fecha : request.payload.fecha,
      efectivo: request.payload.efectivo,
      tarjeta: request.payload.tarjeta
    });
    newOrden.save(function(err){
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
