'use strict'

const { bookshelf } = require('../db/database');
const Planted_Garden = require('../models/planted_garden')
const Garden = require('../models/garden')

module.exports.addGardenPlants = ({body: {name, height, length, plants}}, res, next) => {
  let garden = {}
  garden.name = name
  garden.height = height
  garden.length = length
  Garden.forge(garden)
  .save()
  .then( (data) => {
  if(plants.length === 0 ) return
    for (var i = 0; i < plants.length; i++) {
      Planted_Garden.forge({garden_id:data.id, plant_id:plants[i]}).save()
    }
  })
  .then(()=>res.status(201).json({"msg":"Good for you"}))
  .catch( (error) => {
    next(error);
  });
};
module.exports.deleteGarden = ({query: {id}}, res, next) => {
  console.log(id);
  Garden.forge().where({garden_id: id})
  .destroy()
  .then( () => {
    return Plants.forge({id: id}).destroy()
  })
  .then(()=> {
    return res.status(201).json({"msg": `deleted garden`})
  })
  .catch( (error) => {
    next(error);
  })
}
module.exports.deleteGardenPlants = ({body}, res, next)=>{
  Planted_Garden.forge()
  .where({plant_id: id})
  .destroy()
  .then(()=> res.status(201).json({"msg": `deleted Plant`}))
  .catch( (error) => {
    next(error);
  })
}
