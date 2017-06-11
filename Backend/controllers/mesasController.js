var mesa = require('../schemas/mesa.js');
var mongoose = require('mongoose');

exports.getMesas = {
  handler: function(request, reply){
    var Mesas = Mesa.find({});
    reply(Mesas);
  }
}
exports.getMesaId = {
  handler : function(request, reply){
    mesa.findOne({'_id' : request.params.id}, function(err, Mesa){
      if(!err && Mesa){
        return reply(Mesa);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesa not found'));
      }
    });
  }
}
exports.getMesaName = {
  handler : function(request, reply){
    mesa.find({'nombre' : request.params.nombre}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.getMesaNumero = {
  handler : function(request, reply){
    mesa.find({'numero' : request.params.numero}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.getMesaIdOrdenes = {
  handler : function(request, reply){
    mesa.find({'IdOrden' : request.params.IdOrden}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.modifyMesa = {
  handler: function(request, reply){
    mesa.update(
      {'_id': request.params.id},
      {$set:
        {
          idOrden : request.payload.idProovedor,
          nombre : request.payload.nombre,
          numero: request.payload.numero
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'mesa not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteMesa = {
  handler: function(request, reply){
    mesa.findOne({'_id' : request.params.id}, function(err, mesa){
      if(err){
        return reply(boom.badRequest("Could not delete mesa"));
      }else if(!err && Mesa){
        Mesa.remove();
        return reply('Mesa deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createMesa = {
  handler: function(request, reply){
    var newMesa = new Mesa({
      idOrden : request.payload.idProovedor,
      nombre : request.payload.nombre,
      numero: request.payload.numero
    });
    newMesa.save(function(err){
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