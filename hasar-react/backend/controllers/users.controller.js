const User = require('../models/User')

exports.adduser= async ( req, res ) => {
    let user=req.body
     const newuser= new User({...user})
    
    try {    
        const userSaved = await newuser.save()
        console.log(userSaved);
        if (userSaved) {
            res.status(201).json(userSaved)
        } else {
         res.status(500).send('Error al guardar usero')
        };
    } catch (error) {
        console.log(error);
    }
};

exports.getusers= async (req,res) =>{
   const usrsFromDB = await User.find()
   try {
       if (usrsFromDB) {
        res.status(201).json(usrsFromDB)
       } else {
         res.status(500).send('Error en lectura de usero')
       };
   } catch (error) {
    console.log(error);       
   }
}

exports.getuserById=async (req,res) =>{
    const id=req.params.id
    
    try {
        const usrByID = await User.findById(id)
        if (usrByID) {
         res.status(201).json(usrByID)
         } else {
         res.status(500).send('Error en lectura de usero')
         };   
    } catch (error) {
        console.log(error);
    }
}

exports.updateuserById= async (req,res) =>{
    const id=req.params.id
    const body=req.body

    try {
        const newusrByID = await User.findByIdAndUpdate(id,{...body})
        console.log(newusrByID);
        if (newusrByID) {
            res.status(201).json(newusrByID)
        } else {
            res.status(500).send('Error en actualizacion de usero')
        };         
    } catch (error) {
        console.log(error);
    }
 
}

exports.deleteuserById= async (req,res) =>{
    const id=req.params.id
    try {
        const oldusrByID = await User.findByIdAndDelete(id)
        console.log(oldusrByID);
        if (oldusrByID) {
            res.status(201).json(oldusrByID)
        } else {
            res.status(500).send('Error al eliminar usero')
        };         
    } catch (error) {
        console.log(error);
    }
 
}

// module.exports={adduser,getusers,getuserById,updateuserById,deleteuserById}
