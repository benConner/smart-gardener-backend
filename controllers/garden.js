'use strict'

const { bookshelf } = require('../db/database');
const Garden = require('../models/garden')

module.exports.getGardens = (req, res, next) => {
  Garden.getAll()
  .then( (gardenInfo) => {
    res.status(200).json(gardenInfo);
  })
  .catch( (error) => {
    next(error)
  })
}
module.exports.getGardenById = ({query: {gardenId}}, res, next) => {
  Garden.forge({id: gardenId})
  .fetch({withRelated: ['plant'], require: true})
  .then((garden)=>{
    res.status(200).json(garden)
  })
}

// module.exports.getGardenAndPlants = (req, res, next) => {
//   Garden.getAll()
//   .fetch({withRelated: ['plant'], require: true})
//   .then((garden)=>{
//     res.status(200).json(garden)
//   })
// }

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
// module.exports.deleteGarden = ({params:{id}}, res, next) =>{
//   Garden.forge()
//   .where({id: id})
//   .destroy()
//   .then(()=> res.status(201).json({"msg": `deleted garden`}))
//   .catch( (error) => {
//     next(error);
//   })
// }
