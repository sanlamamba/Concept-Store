const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  titre: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  otherImage: { type: Array, default: [] },
  categorie: mongoose.Types.ObjectId,
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  features: [
    {
      type: { type: String },
      options: [
        {
          value: String,
          fees: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
