var producto_elaborado_detail = require('../schemas/producto_elaborado_detail.js');
var mongoose = require('mongoose');

exports.getProd_elaborado_details = {
  handler: function(request, reply){
    var prod_elaborado_details = prod_elaborado_detail.find({});
    reply(prod_elaborado_details);
  }
}
exports.getProd_elaborado_detailId = {
  handler : function(request, reply){
    prod_elaborado_detail.findOne({'_id' : request.params.id}, function(err, Prod_elaborado_detail){
      if(!err && Prod_elaborado_detail){
        return reply(Prod_elaborado_detail);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Prod_elaborado_detail not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdElaborado = {
  handler : function(request, reply){
    prod_elaborado_detail.find({'idProducto_Elaborado' : request.params.idProducto_Elaborado}, function(err, Prod_elaborado_details){
      if(!err && Prod_elaborado_details){
        return reply(Prod_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Prod_elaborado_details not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdBebida = {
  handler : function(request, reply){
    prod_elaborado_detail.find({'idBebida' : request.params.idBebida}, function(err, Prod_elaborado_details){
      if(!err && Prod_elaborado_details){
        return reply(Prod_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Prod_elaborado_details not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdInsumo = {
  handler : function(request, reply){
    prod_elaborado_detail.find({'idInsumo' : request.params.idInsumo}, function(err, Prod_elaborado_details){
      if(!err && Prod_elaborado_details){
        return reply(Prod_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Prod_elaborado_details not found'));
      }
    });
  }
}
exports.modifyProd_elaborado_detail = {
  handler: function(request, reply){
    prod_elaborado_detail.update(
      {'_id': request.params.id},
      {$set:
        {
          idProducto_Elaborado : request.payload.idProducto_Elaborado,
          idBebida : request.payload.idBebida,
          idInsumo : request.payload.idInsumo,
          cantidad : request.payload.cantidad
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'rod_elaborado_detail not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleterod_elaborado_detail = {
  handler: function(request, reply){
    prod_elaborado_detail.findOne({'_id' : request.params.id}, function(err, Prod_elaborado_detail){
      if(err){
        return reply(boom.badRequest("Could not delete Prod_elaborado_detail"));
      }else if(!err && Prod_elaborado_detail){
        Prod_elaborado_detail.remove();
        return reply('Prod_elaborado_detail deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProd_elaborado_detail = {
  handler: function(request, reply){
    var newProd_elaborado_detail = new prod_elaborado_detail({
      idProducto_Elaborado : request.payload.idProducto_Elaborado,
      idBebida : request.payload.idBebida,
      idInsumo : request.payload.idInsumo,
      cantidad : request.payload.cantidad
    });
    newProd_elaborado_detail.save(function(err){
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
