var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getInsumos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var insumos = insumo.find({});
    reply(insumos);
  }
}
exports.getInsumoId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(!err && Insumo){
        return reply({insumo:Insumo, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getInsumoName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'nombre' : request.params.nombre}, function(err, Insumos){
      if(!err && Insumos){
        return reply({insumo:Insumos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getInsumoProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'idProveedor' : request.params.idProveedor}, function(err, Insumos){
      if(!err && Insumos){
        return reply({insumo:Insumos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getInsumoInventario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'inventario' : request.params.inventario}, function(err, Insumos){
      if(!err && Insumos){
        return reply({insumo:Insumos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    insumo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          inventario : request.payload.inventario,
          idProveedor : request.payload.idProveedor
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
exports.deleteInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(err){
        return reply({success:false});
      }else if(!err && Insumo){
        Insumo.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newInsumo = new insumo({
      nombre : request.payload.nombre,
      inventario : request.payload.inventario,
      idProveedor : request.payload.idProveedor
    });
    newInsumo.save(function(err){
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
