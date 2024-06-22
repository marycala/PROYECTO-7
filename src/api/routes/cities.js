const {
  getCityByHabitants,
  getCityByContinent,
  getCityById,
  getCities,
  postCity,
  putCity,
  deleteCity
} = require('../controllers/cities')

const citiesRouter = require('express').Router()

citiesRouter.get('/habitants/:habitans', getCityByHabitants)
citiesRouter.get('/continent/:continent', getCityByContinent)
citiesRouter.get('/id/:id', getCityById)
citiesRouter.get('/', getCities)
citiesRouter.post('/', postCity)
citiesRouter.put('/:id', putCity)
citiesRouter.delete('/:id', deleteCity)

module.exports = citiesRouter
