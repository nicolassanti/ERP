const jwt = require("jsonwebtoken");

function authToken(req, res, next){

    const authHeader = req.headers.authorization;
    try {
        const tokenRecieved = authHeader && authHeader.split(" ")[1];
        console.log(tokenRecieved);
        if (!tokenRecieved) return res.status(401).send("User not logged");
        
        jwt.verify(tokenRecieved, process.env.ACCESS_SECRET, (err, user) => {
            if (err) return res.status(403).send("Usuario no logueado");
            console.log('Access Granted to '+user.username +" "+ user.lastname);
            next();
          });
        } catch (error) {
          res.status(500).send("Error en tryCatch >>>> "+ error);
        }
    } 
  
module.exports=authToken;