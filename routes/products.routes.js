const { Router } =require ("express");
const router = Router()
const authToken=require("../Middlewares/authToken")
const productCtrl=require("../controllers/products.controller");
const pagination=require("../Middlewares/pagination")

router.post('/',authToken, productCtrl.addProduct)

router.get('/',authToken,productCtrl.getProducts)

router.get('/:id',authToken, productCtrl.getProductById)

router.put('/:id',authToken, productCtrl.updateProductById)

router.post('/:id/provider/:id',authToken, productCtrl.addSupplierToProductById)

router.delete('/:id',authToken, productCtrl.deleteProductById)





module.exports=router;