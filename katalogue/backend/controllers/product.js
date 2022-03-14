const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getProductByTitle = (req, res, next) => {
  console.log(String(req.params.titre).split("-").join(" "));
  Product.findOne({
    titre: String(req.params.titre).split("-").join(" "),
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.createProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product({
    titre: req.body.titre,
    image: req.body.image,
    categorie: req.body.categorie,
    price: req.body.price,
    features: req.body.features,
    description: req.body.description,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        message: "product Created!",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
