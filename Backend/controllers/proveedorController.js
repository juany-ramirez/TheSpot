var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getProveedores = {
  handler: function(request, reply){
    var proveedores = proveedor.find({});
    reply(proveedores);
  }
}
exports.getProveedorId = {
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
