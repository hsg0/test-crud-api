const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
// This is the model for the product. It is a schema that has the title, price, quantity, and description of the product. It also exports the model so that it can be used in other files. This is how the product model is created and used in the application.
