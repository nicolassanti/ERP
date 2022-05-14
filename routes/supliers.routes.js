const { Router } =require ("express");
const router = Router()

const {...suplierCtrl} = require("../controllers/supliers.controller");

router.post('/', suplierCtrl.addsuplier)

router.get('/', suplierCtrl.getsupliers)

router.get('/:id', suplierCtrl.getsuplierById)

router.put('/:id', suplierCtrl.updatesuplierById)

router.delete('/:id', suplierCtrl.deletesuplierById)


module.exports=router;