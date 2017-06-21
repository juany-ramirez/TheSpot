var producto_elaborado_detail = require('../schemas/producto_elaborado_detail.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getProd_elaborado_details = {
  handler: function(request, reply){
    var producto_elaborado_details = producto_elaborado_detail.find({});
    reply(producto_elaborado_details);
  }
}
exports.getProd_elaborado_detailId = {
  handler : function(request, reply){
    producto_elaborado_detail.findOne({'_id' : request.params._id}, function(err, Producto_elaborado_detail){
      if(!err && Producto_elaborado_detail){
        return reply({producto_elaborado_detail: Producto_elaborado_details,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProd_elaborado_detailIdElaborado = {
  handler : function(request, reply){
    producto_elaborado_detail.find({'idProducto_Elaborado' : request.params.idProducto_Elaborado}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply({producto_elaborado_detail: Producto_elaborado_details,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProd_elaborado_detailIdBebida = {
  handler : function(request, reply){
    producto_elaborado_detail.find({'idBebida' : request.params.idBebida}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply({producto_elaborado_detail: Producto_elaborado_details,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getProd_elaborado_detailIdInsumo = {
  handler : function(request, reply){
    producto_elaborado_detail.find({'idInsumo' : request.params.idInsumo}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply({producto_elaborado_detail: Producto_elaborado_details,success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyProd_elaborado_detail = {
  handler: function(request, reply){
    producto_elaborado_detail.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto_Elaborado : request.payload.idProducto_Elaborado,
          idBebida : request.payload.idBebida,
          idInsumo : request.payload.idInsumo,
          cantidad : request.payload.cantidad
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
exports.deleteProd_elaborado_detail = {
  handler: function(request, reply){
    producto_elaborado_detail.findOne({'_id' : request.params._id}, function(err, Producto_elaborado_detail){
      if(err){
        return reply({success:false});
      }else if(!err && Producto_elaborado_detail){
        Producto_elaborado_detail.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createProd_elaborado_detail = {
  handler: function(request, reply){
    var newProducto_elaborado_detail = new producto_elaborado_detail({
      idProducto_Elaborado : request.payload.idProducto_Elaborado,
      idBebida : request.payload.idBebida,
      idInsumo : request.payload.idInsumo,
      cantidad : request.payload.cantidad
    });
    newProducto_elaborado_detail.save(function(err){
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
