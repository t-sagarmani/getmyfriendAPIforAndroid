const mongoose = require('mongoose');


const userInfo = mongoose.model('Users', {
    
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    no_friends:{
        type:Number
    },
    no_photos:{
        type:Number
    },
    no_comments:{
        type:Number
    },
    institute:{
        type:String
    },
    job:{
        type:String
    },
    post:{
        type:String
    },
    short_desc:{
        type:String
    },
    profile_image:{
        type:String
    }
    
    

   

});
module.exports = userInfo