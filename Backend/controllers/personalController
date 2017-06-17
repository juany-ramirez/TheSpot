var personal = require('../schemas/personal.js');
var mongoose = require('mongoose');

exports.getPersonal = {
  handler: function(request, reply){
    var _personal = personal.find({});
    reply(_personal);
  }
}
exports.getPersonalId = {
  handler : function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(!err && Personal){
        return reply(Personal);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalUsuario = {
  handler : function(request, reply){
    personal.find({'idUsuario' : request.params.idUsuario}, function(err, Personal){
      if(!err && Personal){
        return reply(Personal);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalOrdenes = {
  handler : function(request, reply){
    personal.find({'idOrdenes' : request.params.idOrdenes}, function(err, Personal){
      if(!err && Personal){
        return reply(Personal);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalIdentidad = {
  handler : function(request, reply){
    personal.find({'identidad' : request.params.identidad}, function(err, Personal){
      if(!err && Personal){
        return reply(Personal);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalTipo = {
  handler : function(request, reply){
    personal.find({'tipo' : request.params.tipo}, function(err, Personal){
      if(!err && Personal){
        return reply(Personal);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.modifyPersonal = {
  handler: function(request, reply){
    personal.update(
      {'_id': request.params._id},
      {$set:
        {
          idUsuario : request.payload.idUsuario,
          idOrdenes : request.payload.idOrdenes,
          identidad : request.payload.identidad,
          nacimiento : request.payload.nacimiento,
          direccion : request.payload.direccion,
          tipo : request.payload.tipo
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Personal not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deletePersonal = {
  handler: function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(err){
        return reply(boom.badRequest("Could not delete Personal"));
      }else if(!err && Personal){
        Personal.remove();
        return reply('Personal deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createPersonal = {
  handler: function(request, reply){
    var newPersonal = new personal({
      idUsuario : request.payload.idUsuario,
      idOrdenes : request.payload.idOrdenes,
      identidad : request.payload.identidad,
      nacimiento : request.payload.nacimiento,
      direccion : request.payload.direccion,
      tipo : request.payload.tipo
    });
    newPersonal.save(function(err){
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
