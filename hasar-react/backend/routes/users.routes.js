const { Router } =require ("express");
const router = Router()

const {...userCtrl} = require("../controllers/users.controller");

router.post('/', userCtrl.adduser)

router.get('/', userCtrl.getusers)

router.get('/:id', userCtrl.getuserById)

router.put('/:id', userCtrl.updateuserById)

router.delete('/:id', userCtrl.deleteuserById)


module.exports=router;