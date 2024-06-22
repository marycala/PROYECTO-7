const City = require('../models/cities')

const getCities = async (req, res, next) => {
  try {
    const city = await City.find().populate('destinations')
    return res.status(200).json(city)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getCityByHabitants = async (req, res, next) => {
  try {
    const { habitants } = req.params
    const city = await City.find({ habitants }).populate('destinations')
    return res.status(200).json(city)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getCityByContinent = async (req, res, next) => {
  try {
    const { continent } = req.params
    const city = await City.find({ continent }).populate('destinations')
    return res.status(200).json(city)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getCityById = async (req, res, next) => {
  try {
    const { id } = req.params
    const city = await City.findById(id).populate('destinations')
    return res.status(200).json(city)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const postCity = async (req, res, next) => {
  try {
    const newCity = new City(req.body)

    const cityDuplicated = await City.findOne({
      name: req.body.name
    })

    if (cityDuplicated) {
      return res.status(400).json('That city already exists')
    }

    const citySaved = await newCity.save()
    return res.status(201).json(citySaved)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const putCity = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldCity = await City.findById(id)

    if (!oldCity) {
      return res.status(404).json('City not found')
    }

    // Convertir los destinos actuales y nuevos a conjuntos para fácil comparación
    const oldDestinationsSet = new Set(
      oldCity.destinations.map((dest) => dest.toString())
    )
    const newDestinationsSet = new Set(
      req.body.destinations.map((dest) => dest.toString())
    )

    // Verificar si alguno de los nuevos destinos ya existe en los destinos antiguos
    for (let newDest of newDestinationsSet) {
      if (oldDestinationsSet.has(newDest)) {
        return res.status(400).json(`Duplicate destination found: ${newDest}`)
      }
    }

    // Combinar destinos antiguos y nuevos sin duplicados
    const combinedDestinationsSet = new Set([
      ...oldCity.destinations.map((dest) => dest.toString()),
      ...req.body.destinations.map((dest) => dest.toString())
    ])

    // Convertir el conjunto de nuevo a un array
    const combinedDestinationsArray = Array.from(combinedDestinationsSet)

    // Actualizar la ciudad con las nuevas destinaciones combinadas
    const cityUpdated = await City.findByIdAndUpdate(
      id,
      { destinations: combinedDestinationsArray },
      { new: true }
    )

    return res.status(200).json(cityUpdated)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const deleteCity = async (req, res, next) => {
  try {
    const { id } = req.params
    const cityDeleted = await City.findByIdAndDelete(id)
    return res.status(200).json(cityDeleted)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

module.exports = {
  getCities,
  getCityByHabitants,
  getCityByContinent,
  getCityById,
  postCity,
  putCity,
  deleteCity
}
