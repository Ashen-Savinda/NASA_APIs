const express = require('express')

//controller functions
const { 
    registerUser, 
    loginUser,
} = require('../controllers/userController')


const router = express.Router()

//login
router.post('/login', loginUser)


//signup
router.post('/signup', registerUser)





module.exports = router