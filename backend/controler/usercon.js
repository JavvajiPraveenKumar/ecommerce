let  bcrypt = require('bcrypt')
const usermodel = require('../model/usermodel')
let jwt=require('jsonwebtoken')
let fs =require('fs')

let reg=async(req,res)=>{
    let obj=await usermodel.findById({"_id":req.body._id})
    if(obj){
        res.json({"msg":"account already exists"})
    }
    else{
        let hashcode=await bcrypt.hash(req.body.pwd,10)
        let data=new usermodel({...req.body,"pwd":hashcode})
        await data.save()
        res.json({"msg":"account created"})
    }
}


let login=async(req,res)=>{
    try{
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj){
            let f= await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f){
                res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"_id":obj._id,"name":obj.name,"role":obj.role})
            }
            else{
                res.json({"msg":"check your password"})
            }

        }
        else{
            res.json({"msg":"email incorrect"})
        }
    }catch(err){
        console.log(err)
    }
}
module.exports={reg,login}