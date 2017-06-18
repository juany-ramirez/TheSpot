var usuario = require('../schemas/usuario.js');
var mongoose = require('mongoose');

exports.getUsuarios = {
  handler: function(request, reply){
    var usuarios = usuario.find({});
    reply(usuarios);
  }
}
exports.getUsuarioId = {
  handler : function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(!err && Usuario){
        return reply(Usuario);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getUsuarioIdPersonal = {
  handler : function(request, reply){
    usuario.findOne({'IdPersonal' : request.params.IdPersonal}, function(err, Usuario){
      if(!err && Usuario){
        return reply(Usuario);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getUsuarioIdOrdenes = {
  handler : function(request, reply){
    usuario.findOne({'idOrdenes' : request.params.idOrdenes}, function(err, Usuario){
      if(!err && Usuario){
        return reply(Usuario);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getUsuarioNombre = {
  handler : function(request, reply){
    usuario.findOne({'nombre' : request.params.nombre}, function(err, Usuario){
      if(!err && Usuario){
        return reply(Usuario);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.modifyBebida = {
  handler: function(request, reply){
    usuario.update(
      {'_id': request.params._id},
      {$set:
        {
          IdPersonal : request.payload.IdPersonal,
          idOrdenes : request.payload.idOrdenes,
          usuario : request.payload.usuario,
          contrasena : request.payload.contraseña,
          nombre : request.payload.nombre,
          telefono : request.payload.telefono
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Usuario not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteUsuario = {
  handler: function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(err){
        return reply(boom.badRequest("Could not delete Usuario"));
      }else if(!err && Usuario){
        Usuario.remove();
        return reply('Usuario deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createUsuario = {
  handler: function(request, reply){
    var newUsuario = new usuario({
      IdPersonal : request.payload.IdPersonal,
      idOrdenes : request.payload.idOrdenes,
      usuario : request.payload.usuario,
      contrasena : request.payload.contraseña,
      nombre : request.payload.nombre,
      telefono : request.payload.telefono
    });
    newUsuario.save(function(err){
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
