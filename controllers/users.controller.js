const User = require("../models/User");
const bcryptjs = require("bcryptjs");

exports.adduser = async (req, res) => {
  let user = req.body;
  let usuarioDuplicado = await User.find({ email: user.emmail });
  if (usuarioDuplicado.length > 0) {
    res.status(409).send("El email ya existe!");
  } else {
    const salt = bcryptjs.genSaltSync(10);
    const hashPass = await bcryptjs.hashSync(user.passsword);
    const newuser = new User({
      fname: user.name,
      lname: user.lastName,
      email: user.emmail,
      passWrd: user.passsword,
      permission: user.roles,
    });
    try {
      const userSaved = await newuser.save();
      if (userSaved) {
        res.status(201).json(userSaved);
      } else {
        res.status(500).send("Error al guardar usuario");
      }
    } catch (error) {
      res.status(500).send("Error al guardar usuario");
    }
  }
};

exports.getusers = async (req, res) => {
  const usrsFromDB = await User.find();
  try {
    if (usrsFromDB) {
    // let userToSend = {
    //   nombre: usrsFromDB.name,
    //   apellido: usrsFromDB.lastName,
    //   correoE: usrsFromDB.emmail,
    //   permission: usrsFromDB.functions,
    // }
      res.status(201).json(usrsFromDB);
    } else {
      res.status(500).send("Error en lectura de usuario");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getuserById = async (req, res) => {
  const id = req.params.id;

  try {
    const usrByID = await User.findById(id);
    if (usrByID) {
      res.status(201).json(usrByID);
    } else {
      res.status(500).send("Error en lectura de usuario");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateuserById = async (req, res) => {
  const usuario = req.body;
  const id=req.params.id
  // console.log('v ID RECIBIDO v');
  // console.log(id);
  // console.log('v USUARIO RECIBIDO v');
  // console.log(usuario);

  const udpatedUser = {
    fname: usuario.name,
    lname: usuario.lastName,
    email: usuario.emmail,
    passWrd: usuario.passsword,
    permission: usuario.roles,
  };
  // console.log('v USUARIO A MODIFICAR v');
  // console.log(udpatedUser);

  try {
    const newusrByID = await User.findByIdAndUpdate(id, { ...udpatedUser },{returnDocument='after'});
    // console.log('v USUARIO MODIFICADO v');
    // console.log(newusrByID);
    if (newusrByID) {
      res.status(201).json(newusrByID);
    } else {
      res.status(500).send(">>Error en actualizacion de usuario<<");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteuserById = async (req, res) => {
  const id = req.params.id;
  try {
    const oldusrByID = await User.findByIdAndDelete(id);
    console.log(oldusrByID);
    if (oldusrByID) {
      res.status(201).json(oldusrByID);
    } else {
      res.status(500).send("Error al eliminar usuario");
    }
  } catch (error) {
    console.log(error);
  }
};
