const multer = require("multer");
const express = require("express");

const router = express.Router();
const categorieCtrl = require("../controllers/categorie");

//multer COnfig
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/assets/images/general/categories/");
  },
  filename: function (req, file, cb) {
    console.log("pass Multer");
    cb(
      null,
      req.body.label + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

var upload = multer({ storage: storage });
// CREATE
router.post("/create", upload.single("image"), categorieCtrl.createCategorie);

// READ
router.get("/", categorieCtrl.getCategories);
router.get("/filter/id/:id", categorieCtrl.getCategorieById);
router.get("/filter/label/:label", categorieCtrl.getCategorieByLabel);

// UPDATE
router.put("/update/:id", categorieCtrl.updateCategorie);

// DELETE
router.delete("/delete", categorieCtrl.deleteCategorie);

module.exports = router;
