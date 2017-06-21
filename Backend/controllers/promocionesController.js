var promocion = require('../schemas/promocion.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getPromociones = {
  handler: function(request, reply){
    var promociones = promocion.find({});
    reply(promociones);
  }
}
exports.getPromocionId = {
  handler : function(request, reply){
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPromocionProductos = {
  handler : function(request, reply){
    promocion.find({'idProductos' : request.params.idProductos}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPromocionDescuento = {
  handler : function(request, reply){
    promocion.find({'idProveedor' : request.params.descuento}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPromocionName = {
  handler : function(request, reply){
    promocion.find({'nombre' : request.params.nombre}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPromocionHora_Inicio = {
  handler : function(request, reply){
    promocion.find({'hora_inicio' : request.params.hora_inicio}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPromocionHora_Final = {
  handler : function(request, reply){
    promocion.find({'hora_final' : request.params.hora_final}, function(err, Promocion){
      if(!err && Promocion){
        return reply({promocion: Promocion,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyPromocion = {
  handler: function(request, reply){
    promocion.update(
      {'_id': request.params._id},
      {$set:
        {
          idProductos : request.payload.idProductos,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          cantidad : request.payload.cantidad,
          descuento : request.payload.descuento,
          hora_inicio : request.payload.hora_inicio,
          hora_final : request.payload.hora_final
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
exports.deletePromocion = {
  handler: function(request, reply){
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(err){
        return reply({success:false});
      }else if(!err && Promocion){
        Promocion.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createPromocion = {
  handler: function(request, reply){
    var newPromocion = new promocion({
      idProductos : request.payload.idProductos,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      cantidad : request.payload.cantidad,
      descuento : request.payload.descuento,
      hora_inicio : request.payload.hora_inicio,
      hora_final : request.payload.hora_final
    });
    newPromocion.save(function(err){
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
