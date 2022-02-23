const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Fetchingdata",{
     useNewUrlParser : true
}).then(() =>{
     console.log("Moongoose connected successfully");
}).catch((error)=>{
      console.log(error);
})