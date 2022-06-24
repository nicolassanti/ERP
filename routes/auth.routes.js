const {...authCtrl} = require("../controllers/auths.controller ");
const { Router } = require ("express");
const router = Router()


router.post('/signin',authCtrl.signin)

router.get('/signout', authCtrl.signout)



module.exports=router;