var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getBebidas = {
  handler: function(request, reply){
    var bebidas = bebida.find({});
    reply(bebidas);
  }
}
exports.getBebidaId = {
  handler : function(request, reply){
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(!err && Bebida){
        return reply({bebida: Bebida, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getBebidaName = {
  handler : function(request, reply){
    bebida.find({'nombre' : request.params.nombre}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply({bebida: Bebidas, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getBebidaProveedor = {
  handler : function(request, reply){
    bebida.find({'idProveedor' : request.params.idProveedor}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply({bebida: Bebidas, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getBebidaTipo = {
  handler : function(request, reply){
    bebida.find({'tipo' : request.params.tipo}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply({bebida: Bebidas, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyBebida = {
  handler: function(request, reply){
    console.log(request.payload);
    bebida.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          idProveedor : request.payload.idProveedor,
          tipo : request.payload.tipo,
          inventario : request.payload.inventario,
          descripcion : request.payload.descripcion
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
exports.deleteBebida = {
  handler: function(request, reply){
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(err){
        return reply({success:false});
      }else if(!err && Bebida){
        Bebida.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createBebida = {
  handler: function(request, reply){
    var newBebida = new bebida({
      nombre : request.payload.nombre,
      idProveedor : request.payload.idProveedor,
      tipo : request.payload.tipo,
      inventario : request.payload.inventario,
      descripcion : request.payload.descripcion
    });
    newBebida.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        });
      }
    });
  }
}
