let mongoose=require('mongoose')
let cartsch=new mongoose.Schema({
    "_id":String,
    "uid":String,
    "pid":String,
    "name":String,
    "desc":String,
    "cat":String,
    "price":String,
    "pimg":String,
    "qty":Number

})
let cartmodel=mongoose.model("cart",cartsch)
module.exports=cartmodel