const { Router } =require ("express");
const router = Router()

const productCtrl=require("../controllers/products.controller");

router.post('/', productCtrl.addProduct)

router.get('/', productCtrl.getProducts)

router.get('/:id', productCtrl.getProductById)

router.put('/:id', productCtrl.updateProductById)

router.delete('/:id', productCtrl.deleteProductById)


module.exports=router;