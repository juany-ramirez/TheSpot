var orden = require('../schemas/orden.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var ordenes = orden.find({});
    reply(ordenes);
  }
}
exports.getOrdenesId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(!err && Orden){
        return reply({orden:Orden, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal' 'cliente']
  },
  handler : function(request, reply){
    orden.find({'nombre' : request.params.nombre}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesIdCombos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    orden.find({'idProveedor' : request.params.idCombos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesProductos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    orden.find({'idProductos' : request.params.idProductos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesPromociones = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    orden.find({'idPromociones' : request.params.idPromociones}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler : function(request, reply){
    orden.find({'idMesa' : request.params.idMesa}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenesFecha = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    orden.find({'fecha' : request.params.fecha}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getOrdenPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    orden.find({'idPersonal' : request.params.idPersonal}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply({orden:Ordenes, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.modifyOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
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
          return reply({ success:false});
        }else{
          return reply({ success:true});
        }
      }
    );
  }
}
exports.deleteOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(err){
        return reply({ success:false});
      }else if(!err && Orden){
        Orden.remove();
        return reply({ success:true});
      }else if(!err){
        return reply({ success:false});
      }
    });
  }
}
exports.createOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
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
