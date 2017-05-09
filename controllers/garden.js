'use strict'

const { bookshelf } = require('../db/database');
const Garden = require('../models/garden')
const Plant = require('../models/plant')

module.exports.getGardens = (req, res, next) => {
  Garden.getAll()
  .then( (gardenInfo) => {
    res.status(200).json(gardenInfo);
  })
  .catch( (error) => {
    next(error)
  })
}

module.exports.addGarden = ({body}, res, next) => {
  Garden.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Post Success"}))
  .catch( (error) => {
    next(error);
  })
}

module.exports.editGarden = ({body, params: {id}}, res, next) => {
  body.id = id
  Garden.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Edited Garden"}))
  .catch( (error) => {
    next(error);
  })
}
module.exports.deleteGarden = ({params:{id}}, res, next) =>{
  Garden.forge()
  .where({id: id})
  .destroy()
  .then(()=> res.status(201).json({"msg": `deleted garden`}))
  .catch( (error) => {
    next(error);
  })
}

module.exports.deleteGardenPlants = ({query: {id}}, res, next) => {
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
