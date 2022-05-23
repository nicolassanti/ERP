const { Router } =require ("express");
const router = Router()

const authToken=require("../Middlewares/authToken")
const {...userCtrl} = require("../controllers/users.controller");

router.post('/',authToken, userCtrl.adduser)

router.get('/',authToken, userCtrl.getusers)

router.get('/:id',authToken, userCtrl.getuserById)

router.put('/:id',authToken, userCtrl.updateuserById)

router.delete('/:id',authToken, userCtrl.deleteuserById)


module.exports=router;