const { Router } =require ("express");
const router = Router()

const authToken=require("../Middlewares/authToken")
const {...filesCtrl} = require("../helpers/product.loader");

router.post('/products', filesCtrl.loadProduct)

// router.get('/',authToken, userCtrl.getusers)

// router.get('/:id',authToken, userCtrl.getuserById)

// router.put('/:id',authToken, userCtrl.updateuserById)

// router.delete('/:id',authToken, userCtrl.deleteuserById)


module.exports=router;