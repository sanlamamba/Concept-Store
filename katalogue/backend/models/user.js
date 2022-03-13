const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  telephone: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String },
  profile_pic: { type: String, default: "user.jpg" },
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", async function (next) {
  try {
    const bcrypt_salt = await bcrypt.genSalt(12);
    const bcrypt_hash = await bcrypt.hash(this.password, bcrypt_salt);
    this.password = bcrypt_hash;
    next();
  } catch {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);
