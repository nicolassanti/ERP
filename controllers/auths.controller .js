const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  let user = req.body;
  console.log(user);
  try {
    let userbd = await User.findOne({ email: user.email });
    if (userbd.email === user.email && userbd.passWrd == user.pass) {
      console.log(userbd.fname + " " + userbd.lname + " se ha logueado.");
      let userToSend = {
        username: userbd.fname,
        lastname: userbd.lname,
        functions: userbd.permission,
      };
      const accTkn = jwt.sign(userToSend, process.env.ACCESS_SECRET,{ expiresIn: '15m' });
      res.status(201).send({ token: accTkn });
    } else {
      console.log(userbd.fname + " " + userbd.lname + " intentó loguearse.");
      res.status(403).send("Error en usuario o contraseña");
    }
  } catch (error) {
    console.log(user.email + "@" + user.pass + " >> intento de logueo");
    res.status(403).send("Error en usuario o contraseña");
  }
};

exports.signout = async (req, res) => {
  res.status(200).send("Usuario deslogueado");
};
