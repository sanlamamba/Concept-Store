const express = require("express");
const router = express.Router();

const productCtlr = require("../controllers/product");
// CREATE
router.post("/create", productCtlr.createProduct);

router.get("/", productCtlr.getProducts);
router.get("/filter/titre/:titre", productCtlr.getProductByTitle);

module.exports = router;
