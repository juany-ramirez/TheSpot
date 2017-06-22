var factura = require('../schemas/factura.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getFacturas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var facturas = factura.find({});
    reply(facturas);
  }
}
exports.getFacturaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    factura.findOne({'_id' : request.params._id}, function(err, Factura){
      if(!err && Factura){
        return reply({factura:Factura, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getFacturaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    factura.find({'nombre' : request.params.nombre}, function(err, Facturas){
      if(!err && Facturas){
        return reply({factura:Facturas, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getFacturaIdOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler : function(request, reply){
    factura.find({'idOrden' : request.params.idOrden}, function(err, Facturas){
      if(!err && Facturas){
        return reply({factura:Facturas, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    factura.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idOrden,
          nombre : request.payload.nombre,
          subtotal : request.payload.subtotal,
          isv : request.payload.isv,
          propina : request.payload.propina,
          descuento: request.payload.descuento,
          total: request.payload.total
        }
      }, function(err){
        if(err){
          return reply({success:false});
        }else{
          return reply({success:true});
        }
      }
    );
  }
}
exports.deleteFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    factura.findOne({'_id' : request.params._id}, function(err, Facturas){
      if(err){
        return reply({success:false});
      }else if(!err && Facturas){
        Facturas.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    var newFactura = new factura({
      idOrden : request.payload.idOrden,
      nombre : request.payload.nombre,
      subtotal : request.payload.subtotal,
      isv : request.payload.isv,
      propina : request.payload.propina,
      descuento: request.payload.descuento,
      total: request.payload.total
    });
    newFactura.save(function(err){
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
