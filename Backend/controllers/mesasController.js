var mesa = require('../schemas/mesa.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getMesas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var Mesas = mesa.find({});
    reply(Mesas);
  }
}
exports.getMesaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.findOne({'_id' : request.params._id}, function(err, Mesa){
      if(!err && Mesa){
        return reply({mesa:Mesas, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getMesaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'cliente']
  },
  handler : function(request, reply){
    mesa.find({'nombre' : request.params.nombre}, function(err, Mesas){
      if(!err && Mesas){
        return reply({mesa:Mesas, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getMesaNumero = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.find({'numero' : request.params.numero}, function(err, Mesas){
      if(!err && Mesas){
        return reply({mesa:Mesas, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.getMesaIdOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.find({'IdOrden' : request.params.IdOrden}, function(err, Mesas){
      if(!err && Mesas){
        return reply({mesa:Mesas, success:true});
      }else if(!err){
        return reply({ success:false});
      }else if(err){
        return reply({ success:false});
      }
    });
  }
}
exports.modifyMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    mesa.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idProveedor,
          nombre : request.payload.nombre,
          numero: request.payload.numero
        }
      }, function(err){
        if(err){
          return reply({ success:false});
        }else{
          return reply({ success:true});
        }
      }
    );
  }
}
exports.deleteMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    mesa.findOne({'_id' : request.params._id}, function(err, mesa){
      if(err){
        return reply({ success:false});
      }else if(!err && Mesa){
        Mesa.remove();
        return reply({ success:true});
      }else if(!err){
        return reply({ success:false});
      }
    });
  }
}
exports.createMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newMesa = new mesa({
      idOrden : request.payload.idProveedor,
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
