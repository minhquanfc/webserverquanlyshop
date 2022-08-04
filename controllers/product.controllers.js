const productModel = require('../models/product.model');
const fs = require("fs");

//post add
exports.postAddProduct = async (req,res,next)=>{
    console.log(req.body);
    console.log(req.file)
    if (req.body.tensanpham.length==0 && req.body.mota.length==0 && req.body.giasanpham  == 0){
        return res.render('./products/add',{msg:'Vui lòng không để trống'})
    }
    try {
        fs.rename(req.file.destination + req.file.filename,
            './public/uploads/' + req.file.originalname,
            function (err){
                if(err){
                    console.log(err)
                }
            }
        )
    }catch (err){
        return res.render('add',{msg:"Vui lòng thêm ảnh"})
    }
    const filename = 'http://192.168.1.243:3000/uploads/'+req.file.originalname;
    const product = new productModel({
        tensanpham: req.body.tensanpham,
        giasanpham: req.body.giasanpham,
        mota:req.body.mota,
        loai:req.body.loai,
        anhsanpham: filename
    })
    await product.save((err)=>{
        if (err){
            console.log("Loi add")
        }else {
            console.log("Add thanh cong")
        }
    })
    return res.json({ success:true})
}

exports.getProduct =  async (req,res,next)=>{
    const listProduct = await productModel.find();
    res.json(listProduct);
}
exports.postUpdate =(req,res,next)=>{
    console.log(req.body._id)
    let dieu_kien ={
        _id : req.body._id
    }
    try {
        fs.rename(req.file.destination + req.file.filename,
            './public/uploads/' + req.file.originalname,
            function (err){
                if(err){
                    console.log(err)
                }
            }
        )
    }catch (err){
        return res.render('add',{msg:"Vui lòng thêm ảnh"})
    }
    const filename = 'http://192.168.1.243:3000/uploads/'+req.file.originalname;
    const du_lieu = ({
        tensanpham: req.body.tensanpham,
        giasanpham: req.body.giasanpham,
        mota:req.body.mota,
        loai:req.body.loai,
        anhsanpham: filename
    })
    //goi lenh update
    productModel.updateOne(dieu_kien,du_lieu,function (err,res){
        if (err)
        {
            console.log("Loi update"+err.message,{msg:'Lỗi update'})
        }
    })
    return res.json({ success:true})
}
exports.postDel =(req,res,next)=>{
    console.log(req.body._id)
    let dieu_kien ={
        _id : req.body._id
    }

    //goi lenh update
    productModel.deleteMany(dieu_kien,function (err){
        if (err)
        {
            console.log("Loi delete"+err.message)
        }else {
            console.log('Xoa thanh cong')
        }
    })
    return res.json({ success:true})
}