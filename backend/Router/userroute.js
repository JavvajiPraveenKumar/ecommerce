let express =require('express')
 const{reg,login} =require('../controler/usercon')
let route=new express.Router

route.post('/reg',reg)
route.post('/login',login)

module.exports=route