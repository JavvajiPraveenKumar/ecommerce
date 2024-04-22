let multer=require("multer")
const { v4: uuidv4 } = require('uuid')
let prodmodel =require("../model/prodmodel")
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./pimgs")
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  
    }
})
let upload =multer({storage:storage})
let add = async(req,res)=>{
    try{
        await new prodmodel({"_id":uuidv4(),...req.body,"pimg":req.file.filename}).save()
        res.json({"msg":"prod added"})
    }
    catch(err){
        res.send(err)
    }

}

let getprod=async(req,res)=>{
    try{
        let data=await prodmodel.find()
        res.json(data)
    }
    catch(err){
        res.json("error",err)
    }
}

module.exports={add,upload,getprod}