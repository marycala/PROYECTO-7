const {
  getDestinationByCity,
  getDestinationById,
  getDestinations,
  postDestination,
  putDestination,
  deleteDestination
} = require('../controllers/destinations')

const destinationsRouter = require('express').Router()

destinationsRouter.get('/city/:city', getDestinationByCity)
destinationsRouter.get('/id/:id', getDestinationById)
destinationsRouter.get('/', getDestinations)
destinationsRouter.post('/', postDestination)
destinationsRouter.put('/:id', putDestination)
destinationsRouter.delete('/:id', deleteDestination)

module.exports = destinationsRouter
