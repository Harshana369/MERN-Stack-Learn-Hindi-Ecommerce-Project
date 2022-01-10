
const product = require('../models/productModel')


exports.createProduct = async (req,res,next) => {
    res.status(201).json({
        success:true,
        product
    })
}


exports.getAllProducts = (req,res) => {
    res.status(200).json({message:"Router is working fine"})
}