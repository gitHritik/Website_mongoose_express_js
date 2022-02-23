const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name : {
        type : String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        require:true,
        validator(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
        }
       }
    },
    phone : {
        type : Number,
        require:true,
        min:10
    },
    message : {
        type : String,
        require:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
// we need collection
const User = mongoose.model("User",userSchema);
module.exports = User;