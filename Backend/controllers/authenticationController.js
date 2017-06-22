var joi = require('joi');
var boom = require('boom');
var user = require('../schemas/user');
var bcrypt = require('bcrypt');

exports.login = {
    auth: false,
    validate: {
      payload: {
        usuario: joi.string().required(),
        contrasena: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      console.log(request.payload.contrasena);
      user.find({usuario: request.payload.usuario}, function(err, user){
        console.log('usuario: ', request.payload.usuario, 'user', user)
        if(err)
          return reply(boom.notAcceptable('Error Executing Query'));
        if(user.length > 0){
          bcrypt.compare(request.payload.contrasena, user[0].contrasena, function(err, res){
            console.log('res',res);
            if(err)
                return reply(boom.unauthorized('ERROR'));
            if(res){
              console.log('before setting cookie');
              request.cookieAuth.set(user[0]);
              console.log('after setting cookie')
              return reply({usuario: user[0].usuario, scope: user[0].scope});
            }else{
              return reply(boom.unauthorized('Wrong contrasena'))
            }
          });
        }
      });
    }
};
exports.logout = {
    // auth: {
    //   mode:'required',
    //   strategy:'session'
    // },
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
