const products = require("../models/productSchema");

//Add product
const add = async (req, res) => {
    
    const { name, email, job, phone, address } = req.body;

    if (!name || !email || !job || !phone || !address) {
      return res.status(422).json("Fill all the fields");
    }
    try {
      const productExist = await products.findOne({ email: email });
      console.log(productExist);

      if (productExist) {
        return res.status(422).json({ error: "product Already Exist!" });
      }
      const product = new products({ name, email, job, phone, address });
      const productAdd = await product.save();
      if (productAdd) {
        res.status(201).json({ msg: "product Added Successfulyy!" });
      }
    } catch (err){ 
        res.status(422).json(err)
    }
};

//Get Product Data
const getdata = async(req, res) => {
    try{
        const productData = await products.find();
        res.status(201).json(productData);
        console.log(productData);
    }catch(err){
        res.status(422).json(err)
    }
}

//Get individual product
const getproduct = async(req, res) => {
    try{
        console.log(req.params);
        const {id} = req.params;
        const individualproduct = await products.findById({_id:id});
        console.log(individualproduct);
        res.status(201).json(individualproduct);

    }catch(err){
        res.status(422).json(err);
    }
}

//Update user data
const updateproduct = async(req, res) => {
  try {
    const {id} = req.params;
    const update = await products.findByIdAndUpdate(id, req.body, {new: true});
    console.log(update);
    res.status(201).json(update);
  } catch (error) {
    res.status(422).json(err);
  }
}

//Delete product data
const deleteproduct = async(req, res) => {
  try {
    const {id} = req.params;
    const deleteproduct = await products.findByIdAndDelete(id);
    console.log(deleteproduct);
    res.status(201).json(deleteproduct);
  } catch (error) {
    res.status(422).json(err);
  }
}

module.exports = {add, getdata, getproduct, updateproduct, deleteproduct};