const categoryModel = require("../models/category.model");

exports.getCategory =async (req,res,next)=>{
    const listCategory = await categoryModel.find();
    res.json(listCategory);
}
exports.postAddCategory = async (req,res,next)=> {
    console.log(req.body);
    const category = new categoryModel({
        name: req.body.name,
    })
    await category.save((err)=>{
        if (err){
            console.log("Loi add")
        }else {
            console.log("add thanh cong")
        }
    })
    return res.json({ success:true})
}
exports.postEditCategory = async (req,res,next)=> {
    console.log(req.body);
    const dieu_kien ={
        _id: req.body._id
    }
    const users ={
        name: req.body.name,
    }
    categoryModel.updateOne(dieu_kien,users,(err)=>{
        if (err){
            console.log("Loi update")
        }else {
            console.log("Update thanh cong")
        }
    })
    return res.json({ success:true})
}
exports.postDelCategory = async (req,res,next)=> {
    console.log(req.body);
    const dieu_kien ={
        _id: req.body._id
    }
    categoryModel.deleteMany(dieu_kien,(err)=>{
        if (err){
            console.log("Loi delete")
        }else {
            console.log("Del thanh cong")
        }
    })
    return res.json({ success:true})
}
