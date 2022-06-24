const { Router } =require ("express");
const router = Router()
const authToken=require("../Middlewares/authToken")
const ivaCtrl=require("../controllers/iva.controller");
const pagination=require("../Middlewares/pagination")
    
router.post('/iva',authToken, ivaCtrl.addIva)

router.get('/iva',authToken,ivaCtrl.getIva)

router.get('/iva/:id',authToken, ivaCtrl.getIvaById)

router.put('/iva/:id',authToken, ivaCtrl.updateIvaById)

router.delete('/iva/:id',authToken, ivaCtrl.deleteIvaById)





module.exports=router;