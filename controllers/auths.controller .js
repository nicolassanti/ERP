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
        lname: userbd.lname,
        functions: userbd.permission,
      };
      const accTkn = jwt.sign(userToSend, process.env.ACCESS_SECRET);
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

exports.authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    const tokenRecieved = authHeader && authHeader.split(" ")[1];
    if (!tokenRecieved) return res.status(401).send("User not logged");

    jwt.verify(tokenRecieved, process.env.ACCESS_SECRET, (err, user) => {
      if (err) return res.status(403).send("Usuario no logueado");
      next();
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
