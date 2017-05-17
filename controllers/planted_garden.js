'use strict'

const { bookshelf } = require('../db/database');
const Planted_Garden = require('../models/planted_garden')
const Garden = require('../models/garden')

module.exports.addGardenPlants = ({body: {name, height, length, plantsId}}, res, next) => {
  let garden = {}
  garden.name = name
  garden.height = height
  garden.length = length
  Garden.forge(garden)
  .save()
  .then( (data) => {
  if(plantsId.length === 0 ) return
    for (var i = 0; i < plantsId.length; i++) {
      Planted_Garden.forge({garden_id:data.id, plant_id:plantsId[i]}).save()
    }
  })
  .then(()=>res.status(201).json({"msg":"Good for you"}))
  .catch( (error) => {
    next(error);
  });
};
module.exports.deleteGarden = ({query: {id}}, res, next) => {
  console.log(id);
  Planted_Garden.forge().where({garden_id: id})
  .destroy()
  .then( () => {
    return Garden.forge({id: id}).destroy()
  })
  .then(()=> {
    return res.status(201).json({"msg": `deleted garden`})
  })
  .catch( (error) => {
    next(error);
  })
}
module.exports.addPlantsToGarden = ({body}, res, next)=>{
  Planted_Garden.forge(body)
  .save()
  .then(()=> res.status(201).json('realation made'))
  .catch( (error) => {
    next(error);
  })
}
module.exports.deleteGardenPlants = ({params: {gardenId, plantId} }, res, next)=>{
  Planted_Garden.forge()
  .where({plant_id: plantId})
  .where({garden_id: gardenId})
  .destroy()
  .then(()=> res.status(201).json({"msg": `deleted Plant`}))
  .catch( (error) => {
    next(error);
  })
}
