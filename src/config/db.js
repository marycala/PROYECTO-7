const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Successfully connected to the database✅')
  } catch (error) {
    console.log('Database connection error💥')
  }
}

module.exports = { connectDB }
