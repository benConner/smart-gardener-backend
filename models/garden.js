'use strict'

const { bookshelf } = require('../db/database');

require('./plant')
require('./planted_garden')

const Garden = bookshelf.Model.extend({
  tableName: 'gardens',
  plant: function() {return this.belongsToMany('Plant').through('Planted_Garden')}

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
  getSingleGarden: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (garden) => {
      return garden;
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error;
    });
  }
})

module.exports = bookshelf.model('Garden', Garden);
