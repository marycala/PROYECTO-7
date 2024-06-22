const Destination = require('../models/destinations')

const getDestinations = async (req, res, next) => {
  try {
    const destination = await Destination.find()
    return res.status(200).json(destination)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getDestinationByCity = async (req, res, next) => {
  try {
    const { city } = req.params
    const destination = await Destination.find({ city })
    return res.status(200).json(destination)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getDestinationById = async (req, res, next) => {
  try {
    const { id } = req.params
    const destination = await Destination.findById(id)
    return res.status(200).json(destination)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const postDestination = async (req, res, next) => {
  try {
    const newDestination = new Destination(req.body)

    const destinationDuplicated = await Destination.findOne({
      name: req.body.name
    })

    if (destinationDuplicated) {
      return res.status(400).json('That destination already exists')
    }

    const destinationSaved = await newDestination.save()
    return res.status(201).json(destinationSaved)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const putDestination = async (req, res, next) => {
  try {
    const { id } = req.params
    const newDestination = new Destination(req.body)
    newDestination._id = id
    const destinationUpdated = await Destination.findByIdAndUpdate(
      id,
      newDestination,
      {
        new: true
      }
    )
    return res.status(200).json(destinationUpdated)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params
    const destinationDeleted = await Destination.findByIdAndDelete(id)
    return res.status(200).json(destinationDeleted)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

module.exports = {
  getDestinations,
  getDestinationByCity,
  getDestinationById,
  postDestination,
  putDestination,
  deleteDestination
}
