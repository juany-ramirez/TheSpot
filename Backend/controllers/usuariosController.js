var usuario = require('../schemas/usuario.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getUsuarios = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var usuarios = usuario.find({});
    reply(usuarios);
  }
}
exports.getUsuarioId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(!err && Usuario){
        return reply({usuario: Usuario, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getUsuarioIdPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    usuario.findOne({'IdPersonal' : request.params.IdPersonal}, function(err, Usuario){
      if(!err && Usuario){
        return reply({usuario: Usuario, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getUsuarioIdOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    usuario.findOne({'idOrdenes' : request.params.idOrdenes}, function(err, Usuario){
      if(!err && Usuario){
        return reply({usuario: Usuario, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getUsuarioName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    usuario.findOne({'nombre' : request.params.nombre}, function(err, Usuario){
      if(!err && Usuario){
        return reply({usuario: Usuario, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'cliente']
  },
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
          telefono : request.payload.telefono,
          scope: request.payload.scope
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
exports.deleteUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(err){
        return reply({success:false});
      }else if(!err && Usuario){
        Usuario.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newUsuario = new usuario({
      IdPersonal : request.payload.IdPersonal,
      idOrdenes : request.payload.idOrdenes,
      usuario : request.payload.usuario,
      contrasena : request.payload.contraseña,
      nombre : request.payload.nombre,
      telefono : request.payload.telefono,
      scope: request.payload.scope
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
