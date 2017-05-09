'use strict'

const { bookshelf } = require('../db/database');

require('./garden')
require('./planted_garden')

const Plant = bookshelf.Model.extend({
  tableName: 'plants',
  garden: function() {return this.belongsToMany('Garden').through('Planted_Garden')}

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
  },
  getSinglePlant: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (plant) => {
      return plant;
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error;
    });
  }
})

module.exports = bookshelf.model('Plant', Plant);
