'use strict'

const { bookshelf } = require('../db/database');
require('./garden');
require('./plant');

const Planted_Garden = bookshelf.Model.extend({
  tableName: 'plants_gardens',
  plant: function() {return this.belongsTo('Plant')},
  garden: function (){return this.belongsTo('Garden')}

},{
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
})

module.exports = bookshelf.model('Planted_Garden', Planted_Garden)
