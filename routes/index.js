'use strict'

const { Router } = require('express')
const router = Router()

const { getGardens, getGardenById, addGarden, editGarden} = require('../controllers/garden')
const {getPlants, getPlantById, addPlant, deletePlant, editPlant} = require('../controllers/plant')
const {getGardenPlants, addGardenPlants, deleteGardenPlants, deleteGarden} = require('../controllers/planted_garden')

//garden routes
router.get('/gardens', getGardens)
router.get('/garden', getGardenById)
// router.post('/gardens/new', addGarden)
// router.delete('/gardens/delete/:id', deleteGarden)
router.patch('/gardens/edit/:id', editGarden)

//garden routes
router.get('/plants', getPlants)
router.get('/plants/:id', getPlantById)
router.post('/plants/new', addPlant)
// router.delete('/plants/delete/:id', deletePlant)
router.patch('/plants/edit/:id', editPlant)

//relations
router.post('/garden/plants', addGardenPlants)
router.delete('/garden/plants', deleteGardenPlants)
router.delete('/garden/delete', deleteGarden)

module.exports = router
