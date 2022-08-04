const userModel = require("../models/user.model");

exports.getUsers =async (req,res,next)=>{
    const listUsers = await userModel.find();
    res.json(listUsers);
}
exports.postAdd = async (req,res,next)=> {
    console.log(req.body);
    const users = new userModel({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber,
        address:req.body.address
    })
    await users.save((err)=>{
        if (err){
            console.log("Loi add")
        }else {
            console.log("add thanh cong")
        }
    })
    return res.json({ success:true})
}
exports.postEdit = async (req,res,next)=> {
    console.log(req.body);
    const dieu_kien ={
        _id: req.body._id
    }
    const users ={
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber,
        address:req.body.address
    }
    userModel.updateOne(dieu_kien,users,(err)=>{
        if (err){
            console.log("Loi update")
        }else {
            console.log("Update thanh cong")
        }
    })
    return res.json({ success:true})
}
exports.postDel = async (req,res,next)=> {
    console.log(req.body);
    const dieu_kien ={
        _id: req.body._id
    }
    userModel.deleteMany(dieu_kien,(err)=>{
        if (err){
            console.log("Loi delete")
        }else {
            console.log("Del thanh cong")
        }
    })
    return res.json({ success:true})
}
