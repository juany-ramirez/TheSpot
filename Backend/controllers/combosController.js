var combo = require('../schemas/combo.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getCombos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler: function(request, reply){
    var combos = combo.find({});
    reply(combos);
  }
}
exports.getComboId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(!err && Combo){
        return reply({combo: Combo, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getComboName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    combo.find({'nombre' : request.params.nombre}, function(err, Combos){
      if(!err && Combos){
        return reply({combo: Combos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getComboPrecio = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    combo.find({'precio' : request.params.precio}, function(err, Combos){
      if(!err && Combos){
        return reply({combo: Combos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    combo.update(
      {'_id': request.params._id},
      {$set:
        {
          idProductos : request.payload.idProductos,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          precio : request.payload.precio
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
exports.deleteCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(err){
        return reply({success:false});
      }else if(!err && Combo){
        Combo.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newCombo = new combo({
      idProductos : request.payload.idProductos,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      precio : request.payload.precio
    });
    newCombo.save(function(err){
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
