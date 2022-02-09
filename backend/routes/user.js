const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

// CREATE
router.post("/create", userCtrl.createUser);

// READ
router.get("/", userCtrl.getUsers);
router.get("/filter/id/:id", userCtrl.getUserById);
router.get("/filter/email", userCtrl.getUserByMail);

router.get("/connect", userCtrl.signIn);

// // UPDATE
// router.put("/update/:id", userCtrl.updateUser);

// // DELETE
// router.delete("/delete/:id", userCtrl.deleteCategorie);

module.exports = router;
