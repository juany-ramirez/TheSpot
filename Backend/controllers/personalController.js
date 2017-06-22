var personal = require('../schemas/personal.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var _personal = personal.find({});
    reply(_personal);
  }
}
exports.getPersonalId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(!err && Personal){
        return reply({personal:Personal, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPersonalUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'idUsuario' : request.params.idUsuario}, function(err, Personal){
      if(!err && Personal){
        return reply({personal:Personal, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPersonalOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'idOrdenes' : request.params.idOrdenes}, function(err, Personal){
      if(!err && Personal){
        return reply({personal:Personal, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPersonalIdentidad = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'identidad' : request.params.identidad}, function(err, Personal){
      if(!err && Personal){
        return reply({personal:Personal, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getPersonalTipo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'tipo' : request.params.tipo}, function(err, Personal){
      if(!err && Personal){
        return reply({personal:Personal, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
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
          return reply({success:false});
        }else{
          return reply({success:true});
        }
      }
    );
  }
}
exports.deletePersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(err){
        return reply({success:false});
      }else if(!err && Personal){
        Personal.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
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
