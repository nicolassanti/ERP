const { Router } =require ("express");
const router = Router()

const productCtrl=require("../controllers/products.controller");
const authCtrl=require("../controllers/auths.controller ");

router.post('/',authCtrl.authToken, productCtrl.addProduct)

router.get('/',authCtrl.authToken, productCtrl.getProducts)

router.get('/:id',authCtrl.authToken, productCtrl.getProductById)

router.put('/:id',authCtrl.authToken, productCtrl.updateProductById)

router.post('/:id/provider/:id',authCtrl.authToken, productCtrl.addSupplierToProductById)

router.delete('/:id',authCtrl.authToken, productCtrl.deleteProductById)





module.exports=router;