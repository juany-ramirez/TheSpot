var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');

exports.getBebidas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    var bebidas = bebida.find({});
    reply(bebidas);
  }
}
exports.getBebidaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler : function(request, reply){
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(!err && Bebida){
        return reply(Bebida);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Bebida not found'));
      }
    });
  }
}
exports.getBebidaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    bebida.find({'nombre' : request.params.nombre}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply(Bebidas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Bebidas not found'));
      }
    });
  }
}
exports.getBebidaProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    bebida.find({'idProveedor' : request.params.idProveedor}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply(Bebidas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Bebidas not found'));
      }
    });
  }
}
exports.getBebidaTipo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    bebida.find({'tipo' : request.params.tipo}, function(err, Bebidas){
      if(!err && Bebidas){
        return reply(Bebidas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Bebidas not found'));
      }
    });
  }
}
exports.modifyBebida = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    bebida.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          idProveedor : request.payload.idProveedor,
          tipo : request.payload.tipo,
          inventario : request.payload.inventario,
          descripcion : request.payload.descripcion
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Bebida not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteBebida = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(err){
        return reply(boom.badRequest("Could not delete bebida"));
      }else if(!err && Bebida){
        Bebida.remove();
        return reply('Bebida deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createBebida = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newBebida = new bebida({
      nombre : request.payload.nombre,
      idProveedor : request.payload.idProveedor,
      tipo : request.payload.tipo,
      inventario : request.payload.inventario,
      descripcion : request.payload.descripcion
    });
    newBebida.save(function(err){
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
