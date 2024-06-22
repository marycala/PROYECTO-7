const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true }
})

const Destination = mongoose.model(
  'destinations',
  destinationSchema,
  'destinations'
)

module.exports = Destination
