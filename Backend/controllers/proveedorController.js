var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');

exports.getProovedores = {
  handler: function(request, reply){
    var proovedores = proovedor.find({});
    reply(proovedores);
  }
}
exports.getProovedorId = {
  handler : function(request, reply){
    proovedor.findOne({'_id' : request.params._id}, function(err, Proovedor){
      if(!err && Proovedor){
        return reply(Proovedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proovedor not found'));
      }
    });
  }
}
exports.getProovedorInsumos = {
  handler : function(request, reply){
    proovedor.find({'idInsumo' : request.params.idInsumo}, function(err, Proovedor){
      if(!err && Proovedor){
        return reply(Proovedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proovedor not found'));
      }
    });
  }
}
exports.getProovedorBebidas = {
  handler : function(request, reply){
    proovedor.find({'idBebidas' : request.params.idBebidas}, function(err, Proovedor){
      if(!err && Proovedor){
        return reply(Proovedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proovedor not found'));
      }
    });
  }
}
exports.getProovedorName = {
  handler : function(request, reply){
    proovedor.find({'nombre' : request.params.idInsumo}, function(err, Proovedor){
      if(!err && Proovedor){
        return reply(Proovedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proovedor not found'));
      }
    });
  }
}
exports.getProovedorContacto = {
  handler : function(request, reply){
    proovedor.find({'contacto' : request.params.contacto}, function(err, Proovedor){
      if(!err && Proovedor){
        return reply(Proovedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proovedor not found'));
      }
    });
  }
}
exports.modifyProovedor = {
  handler: function(request, reply){
    bebida.update(
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
          return reply(boom.wrap(err, 'Proovedor not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProovedor = {
  handler: function(request, reply){
    proovedor.findOne({'_id' : request.params._id}, function(err, Proovedor){
      if(err){
        return reply(boom.badRequest("Could not delete Proovedor"));
      }else if(!err && Proovedor){
        Bebida.remove();
        return reply('Proovedor deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProovedor = {
  handler: function(request, reply){
    var newProovedor = new proovedor({
      idInsumo : request.payload.idInsumo,
      idBebidas : request.payload.idBebidas,
      nombre : request.payload.nombre,
      pais : request.payload.pais,
      telefono : request.payload.telefono,
      contacto : request.payload.contacto,
      email : request.payload.email,
      direccion : request.payload.direccion
    });
    newProovedor.save(function(err){
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
