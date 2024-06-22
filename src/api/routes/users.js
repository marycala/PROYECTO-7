const { isAdmin, isAuth, isAdminOrSelf } = require('../../middlewares/auth')
const {
  register,
  login,
  getUsers,
  deleteUser,
  modifyRolUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/', [isAuth], getUsers)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.put('/:id', [isAdmin], modifyRolUser)
usersRouter.delete('/:id', [isAdmin, isAdminOrSelf], deleteUser)

module.exports = usersRouter
