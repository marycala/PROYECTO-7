const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const register = async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    })

    const userDuplicated = await User.findOne({ email: req.body.email })

    if (userDuplicated) {
      return res.status(400).json('This user already exists')
    }

    const userSaved = await user.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json('An error has occurred')
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(400).json('Incorrect email or password')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Incorrect email or password')
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Login failed')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    if (!userDeleted) {
      return res.status(404).json('User not found')
    }
    return res.status(200).json({
      message: 'This user has been deleted',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json('An error has occurred')
  }
}

const modifyRolUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const newRolUser = new User(req.body)
    newRolUser._id = id
    const userUpdated = await User.findByIdAndUpdate(id, newRolUser, {
      new: true
    })
    return res.status(200).json(userUpdated)
  } catch (error) {
    return res.status(400).json('An error has occurred')
  }
}

module.exports = { register, login, getUsers, deleteUser, modifyRolUser }
