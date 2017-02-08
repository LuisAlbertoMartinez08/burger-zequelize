var Sequelize = require('sequelize');
var connection = require('../config/connection.js');
var Burgers = connection.define('burgers',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
  },{
    timestamps: false
  });

Burgers.sync();





var burger = {
  all: function(cb) {
    Burgers.all({}).then(function(res) {
      cb(res);
    })
  },
  create: function(burger_name, cb) {
    Burgers.create({
      burger_name: burger_name
    }).then(function(){
      cb();
    })
  },
  update: function(id, cb) {
    Burgers.update({
      devoured: true
    },{
      where: {id: id}
    }).then(function(){
      cb();
    })
  }
};

module.exports = burger;