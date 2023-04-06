const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser, getUser, getUsers, deleteAllUsers} = require('../controllers/users-controllers')
const {protect} = require('../middleware/authMiddleware')
router.post('/', registerUser)
router.get('/user', protect, getUser)
router.get('/', getUsers)
router.post('/login', loginUser)
router.delete('/logout/:id', logoutUser)
router.delete('/delete/all', deleteAllUsers)

module.exports = router