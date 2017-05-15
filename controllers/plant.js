'use strict'

const { bookshelf } = require('../db/database');
const Plant = require('../models/plant')

module.exports.getPlants= (req, res, next) => {
  Plant.getAll()
  .then( (plantInfo) => {
    res.status(200).json(plantInfo);
  })
  .catch( (error) => {
    next(error)
  })
}

module.exports.getPlantById= ({params: {id}}, res, next) => {
  Plant.getSinglePlant(id)
  .then( (plant) => {
    res.status(200).json(plant);
  })
  .catch( (error) => {
    next(error)
  })
}

module.exports.addPlant = ({body}, res, next) => {
  Plant.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Post Success"}))
  .catch( (error) => {
    next(error);
  })
}

module.exports.editPlant = ({body, params: {id}}, res, next) => {
  body.id = id
  Plant.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Edited Plant"}))
  .catch( (error) => {
    next(error);
  })
}
// module.exports.deletePlant = ({params:{id}}, res, next) =>{
//   Plant.forge()
//   .where({id: id})
//   .destroy()
//   .then(()=> res.status(201).json({"msg": `deleted Plant`}))
//   .catch( (error) => {
//     next(error);
//   })
// }
