let express=require("express")
const { add,upload, getprod } = require("../controler/prodcont")
let prodroute=new express.Router()
prodroute.post("/add",upload.single("pimg"),add)
prodroute.get("/get",getprod)
module.exports=prodroute