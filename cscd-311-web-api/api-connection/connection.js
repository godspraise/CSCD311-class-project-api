const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/cscd-311-project-api',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>{
    console.log('successful connection');
})
.catch((e)=>{
    console.log(e);
})