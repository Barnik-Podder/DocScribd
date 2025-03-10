const User = require("../models/Patient");
const Clinic = require("../models/Clinic")
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false })
    } else {
      let user = await User.findById(data.id)
      if (!user) {
        user = await Clinic.findById(data.id)
      }
      if (user) return res.json({ status: true, name: user.name, role: user.role, id: user.id })
      else return res.json({ status: false })
    }
  })
}