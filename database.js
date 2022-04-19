const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/miempresaDB',{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
    .then(db => console.log('DB conectada!'))
    .catch(err => console.log(err))
