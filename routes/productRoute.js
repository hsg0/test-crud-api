const express = require("express");
const {
  createProduct,
  returnProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/read", returnProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;

// This is the route for creating a product. It uses the express.Router()
// method to create a new router. It then uses the router.post() method to
// create a new route that listens for POST requests to the /create endpoint.
// When a POST request is made to this endpoint, it calls the createProduct function
// from the productController.js file. Finally, it exports the router so that it can
// be used in other files. This is how the product routes are created and used in
// the application.
