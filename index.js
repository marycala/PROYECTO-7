require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const citiesRouter = require('./src/api/routes/cities')
const destinationsRouter = require('./src/api/routes/destinations')
const usersRouter = require('./src/api/routes/users')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/cities', citiesRouter)
app.use('/api/v1/destinations', destinationsRouter)
app.use('/api/v1/users', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})

app.listen(3000, () => {
  console.log('Server raised in htpp://localhost:3000')
})
