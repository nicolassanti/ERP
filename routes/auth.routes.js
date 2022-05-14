const { Router } =require ("express");
const router = Router()

const {...authCtrl} = require("../controllers/auths.controller ");

router.post('/signin',authCtrl.signin)

router.get('/signout', authCtrl.signout)



module.exports=router;