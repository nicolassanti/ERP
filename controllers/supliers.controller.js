const Suplier = require('../models/Suplier')

exports.addsuplier= async ( req, res ) => {
    let suplier=req.body
     const newsuplier= new Suplier({...suplier})
    
    try {    
        const suplierSaved = await newsuplier.save()
        console.log(suplierSaved);
        if (suplierSaved) {
            res.status(201).json(suplierSaved)
        } else {
         res.status(500).send('Error al guardar proveedor')
        };
    } catch (error) {
        console.log(error);
    }
};

exports.getsupliers= async (req,res) =>{
   const suplFromDB = await Suplier.find()
   try {
       if (suplFromDB) {
        res.status(201).json(suplFromDB)
       } else {
         res.status(500).send('Error en lectura de usuario')
       };
   } catch (error) {
    console.log(error);       
   }
}

exports.getsuplierById=async (req,res) =>{
    const id=req.params.id
    
    try {
        const suplByID = await Suplier.findById(id)
        if (suplByID) {
         res.status(201).json(suplByID)
         } else {
         res.status(500).send('Error en lectura de usuario')
         };   
    } catch (error) {
        console.log(error);
    }
}

exports.updatesuplierById= async (req,res) =>{
    const id=req.params.id
    const body=req.body

    try {
        const newsuplByID = await Suplier.findByIdAndUpdate(id,{...body})
        console.log(newsuplByID);
        if (newsuplByID) {
            res.status(201).json(newsuplByID)
        } else {
            res.status(500).send('Error en actualizacion de usuario')
        };         
    } catch (error) {
        console.log(error);
    }
 
}

exports.deletesuplierById= async (req,res) =>{
    const id=req.params.id
    try {
        const oldsuplByID = await Suplier.findByIdAndDelete(id)
        console.log(oldsuplByID);
        if (oldsuplByID) {
            res.status(201).json(oldsuplByID)
        } else {
            res.status(500).send('Error al eliminar usuario')
        };         
    } catch (error) {
        console.log(error);
    }
 
}

