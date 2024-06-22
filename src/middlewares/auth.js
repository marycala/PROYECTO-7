const User = require('../api/models/users')
const { verifyJwt } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ')

    const { id } = verifyJwt(token)

    const user = await User.findById(id)

    if (!user) {
      return res.status(400).json('User not found')
    }

    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json('You are not authorized')
  }
}

const isAdmin = async (req, res, next) => {
  if (req.user.rol === 'admin') {
    next()
  } else {
    return res
      .status(400)
      .json('This action can only be performed by administrators')
  }
}

const isUser = async (req, res, next) => {
  try {
    const { id } = req.params

    if (req.user.id === id) {
      next()
    } else {
      return res.status(400).json('You can only delete your own account')
    }
  } catch (error) {
    return res.status(401).json('You are not authorized')
  }
}

const isAdminOrSelf = async (req, res, next) => {
  if (req.user.rol === 'admin') {
    next()
  } else {
    isUser(req, res, next)
  }
}

module.exports = { isAuth, isAdmin, isUser, isAdminOrSelf }
