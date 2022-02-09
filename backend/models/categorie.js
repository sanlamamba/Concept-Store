const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const categorieSchema = mongoose.Schema({
  label: { type: String, required: true, unique: true },
  image: { type: String },
});

categorieSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Categorie", categorieSchema);
