
const { hasSubscribers } = require("diagnostics_channel");
const express = require("express")
require("./db/conn");
const User = require("./modals/UserData")
const app = express();
const path = require("path")
const hbs = require("hbs");
const async = require("hbs/lib/async");


const port = process.env.PORT || 3000;


// middleware
const staticpath = path.join(__dirname,"../public")
const template = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")



// declaring static file
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",template)
hbs.registerPartials(partialpath)

//rendering pages
app.get("/",(req,res)=>{

    res.render("index");
});

app.post("/contact",async (req,res)=>{
         try {
            //  res.send(req.body);
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render("index");
         } catch (error) {
             res.status(500).send(error);
         }
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})