let express=require('express')
let mongoose=require("mongoose")
const route = require("./Router/userroute")
const prodroute=require('./Router/prodroute')
const cartroute=require("./Router/cartroute")
let cors=require("cors")


var bodyparser=require('body-parser')
let app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/imgs",express.static("./pimgs"))
 mongoose.connect("mongodb://127.0.0.1:27017/myecom").then(()=>{
    console.log("connected sucessfully!!!")
 }).catch((err)=>{
    console.log("err",err)

 })

 app.use("/user",route)
 app.use("/prod",prodroute)
 app.use("/cart",cartroute)
 app.listen(5000)
