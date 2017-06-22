var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getProveedores = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var proveedores = proveedor.find({});
    reply(proveedores);
  }
}
exports.getProveedorId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.findOne({'_id' : request.params._id}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply({proveedor:Proveedor,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProveedorInsumos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'idInsumo' : request.params.idInsumo}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply({proveedor:Proveedor,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProveedorBebidas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'idBebidas' : request.params.idBebidas}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply({proveedor:Proveedor,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProveedorName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'nombre' : request.params.idInsumo}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply({proveedor:Proveedor,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProveedorContacto = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'contacto' : request.params.contacto}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply({proveedor:Proveedor,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    proveedor.update(
      {'_id': request.params._id},
      {$set:
        {
          idInsumo : request.payload.idInsumo,
          idBebidas : request.payload.idBebidas,
          nombre : request.payload.nombre,
          pais : request.payload.pais,
          telefono : request.payload.telefono,
          contacto : request.payload.contacto,
          email : request.payload.email,
          direccion : request.payload.direccion
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
exports.deleteProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    proveedor.findOne({'_id' : request.params._id}, function(err, Proveedor){
      if(err){
        return reply({success:false});
      }else if(!err && Proveedor){
        Proveedor.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newProveedor = new proveedor({
      idInsumo : request.payload.idInsumo,
      idBebidas : request.payload.idBebidas,
      nombre : request.payload.nombre,
      pais : request.payload.pais,
      telefono : request.payload.telefono,
      contacto : request.payload.contacto,
      email : request.payload.email,
      direccion : request.payload.direccion
    });
    newProveedor.save(function(err){
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
