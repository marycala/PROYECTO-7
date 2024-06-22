const mongoose = require('mongoose')

const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    habitants: { type: Number, required: true },
    continent: { type: String, required: true },
    destinations: [
      { type: mongoose.Types.ObjectId, ref: 'destinations', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'cities'
  }
)

const City = mongoose.model('cities', citySchema, 'cities')

module.exports = City
