const express = require("express");
const router = express.Router();

const categorieCtrl = require("../controllers/categorie");

// CREATE
router.post("/create", categorieCtrl.createCategorie);

// READ
router.get("/", categorieCtrl.getCategories);
router.get("/filter/id/:id", categorieCtrl.getCategorieById);
router.get("/filter/label/:label", categorieCtrl.getCategorieByLabel);

// UPDATE
router.put("/update/:id", categorieCtrl.updateCategorie);

// DELETE
router.delete("/delete", categorieCtrl.deleteCategorie);

module.exports = router;
