const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    telephone: req.body.telephone,
    password: req.body.password,
    country: req.body.country,
    address: req.body.address,
    profile_pic: req.body.image,
  });
  console.log(user);
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "User Created!",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
exports.signIn = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      console.log(bcrypt.compare(user.password, req.body.password));

      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.getUserByMail = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.updateUser = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    telephone: req.body.telephone,
    password: req.body.password,
    country: req.body.country,
    address: req.body.address,
    profile_pic: req.body.image,
  });
  User.updateOne({ _id: req.params.id }, user)
    .then(() => {
      res.status(201).json({
        message: "User Updated!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// exports.deleteCategorie = (req, res, next) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(() => {
//       res.status(200).json({
//         message: "User Deleted!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };
