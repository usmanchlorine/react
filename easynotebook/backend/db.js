const mongoos=require('mongoose')
const mongooseURI="mongodb://0.0.0.0:27017/easynotebook"


const connectToMongo=()=>{
    try{
    mongoos.connect(mongooseURI)
     console.log("Connected to Mongo")
    }catch(e){
        console.log(e)
    }

    }
    

module.exports= connectToMongo