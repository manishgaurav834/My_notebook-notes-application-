const mongoose= require('mongoose');

const url="mongodb://localhost:27017/inotebook"


const ConnectMongo= ()=>{
    mongoose.connect(url)
    
}

module.exports=ConnectMongo; 