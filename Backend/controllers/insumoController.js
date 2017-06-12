var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');

exports.getInsumos = {
  handler: function(request, reply){
    var insumos = insumo.find({});
    reply(insumos);
  }
}
exports.getInsumoId = {
  handler : function(request, reply){
    insumo.findOne({'_id' : request.params.id}, function(err, Insumo){
      if(!err && Insumo){
        return reply(Insumo);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumo not found'));
      }
    });
  }
}
exports.getInsumoName = {
  handler : function(request, reply){
    insumo.find({'nombre' : request.params.nombre}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.getInsumoProveedor = {
  handler : function(request, reply){
    insumo.find({'idProovedor' : request.params.idProveedor}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.getInsumoInventario = {
  handler : function(request, reply){
    insumo.find({'inventario' : request.params.inventario}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.modifyInsumo = {
  handler: function(request, reply){
    insumo.update(
      {'_id': request.params.id},
      {$set:
        {
          nombre : request.payload.nombre,
          inventario : request.payload.inventario,
          idProovedor : request.payload.idProovedor
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Insumo not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteInsumo = {
  handler: function(request, reply){
    insumo.findOne({'_id' : request.params.id}, function(err, Insumos){
      if(err){
        return reply(boom.badRequest("Could not delete Insumo"));
      }else if(!err && Insumo){
        Insumo.remove();
        return reply('Insumo deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createInsumo = {
  handler: function(request, reply){
    var newInsumo = new insumo({
      nombre : request.payload.nombre,
      inventario : request.payload.inventario,
      idProovedor : request.payload.idProovedor
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
