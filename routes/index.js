'use strict'

const { Router } = require('express')
const router = Router()

const { getGardens, addGarden, deleteGarden, editGarden, deleteGardenPlants} = require('../controllers/garden')

//garden routes
router.get('/gardens', getGardens)
router.post('/gardens/new', addGarden)
router.delete('/gardens/delete/:id', deleteGarden)
router.patch('/gardens/edit/:id', editGarden)

module.exports = router
