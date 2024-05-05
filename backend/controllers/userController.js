const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, role, email) => {
  return jwt.sign({ _id: _id, role: role, email: email }, process.env.SECRET, { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    console.log(user)

    //create a token
    const token = createToken(user._id, user.role, user.email)

    console.log(token)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

//signup user
const registerUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)

    //create a token
    const token = createToken(user._id, user.role, user.email)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}




module.exports = { loginUser, registerUser }