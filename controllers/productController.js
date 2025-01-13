const ProductModel = require("../models/productModel");

// This is the controller for creating a product.
// It is an asynchronous function that takes a request and
// response object as arguments. It uses the ProductModel to
// create a new product with the data from the request body.
// If the product is created successfully, it sends a 201 status code
// and the product data in the response. If there is an error, it sends a
// 500 status code and an error message in the response.

const createProduct = async (req, res) => {
  try {
    const result = await ProductModel.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// read product

const returnProducts = async (req, res) => {
  try {
    const result = await ProductModel.find();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//update product

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await ProductModel.findOne({ _id: id });

    if (!productExist) {
      return res.status(404).json({ error: "Product not found" });
    }
    const result = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//delete product

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await ProductModel.findOne({
      _id: id,
    });
    if (!productExist) {
      return res.status(404).json({
        error: "Product not found",
      });
    }
    const result = await ProductModel.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createProduct,
  returnProducts,
  updateProduct,
  deleteProduct,
};
