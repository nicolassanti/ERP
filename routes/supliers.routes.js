const { Router } =require ("express");
const router = Router()

const authToken=require("../Middlewares/authToken")
const {...suplierCtrl} = require("../controllers/supliers.controller");

router.post('/',authToken, suplierCtrl.addsuplier)

router.get('/',authToken, suplierCtrl.getsupliers)

router.get('/:id',authToken, suplierCtrl.getsuplierById)

router.put('/:id',authToken, suplierCtrl.updatesuplierById)

router.delete('/:id',authToken, suplierCtrl.deletesuplierById)


module.exports=router;