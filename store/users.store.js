const User = require("../models/User");

async function adduser(usuario){
        await usuario.save();
  }

async function getusers(req, res){
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

async function getuserById(req, res){
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

async function updateuserById(req, res){
  const usuario = req.body;
  const id = req.params.id;
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
    const newusrByID = await User.findByIdAndUpdate(
      id,
      { ...udpatedUser },
      { returnDocument: "after" }
    );
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

async function deleteuserById(req, res){
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

module.exports = {  
    add:adduser,
    get: getusers,
    getId: getuserById,
    updateId: updateuserById,
    delete: deleteuserById
}      