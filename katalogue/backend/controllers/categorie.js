const Categorie = require("../models/categorie");

exports.getCategories = (req, res, next) => {
  Categorie.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.createCategorie = (req, res, next) => {
  console.log(req);
  const categorie = new Categorie({
    label: req.body.label,
    image: req.file.filename,
  });
  categorie
    .save()
    .then(() => {
      res.status(201).json({
        message: "Categorie Created!",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getCategorieById = (req, res, next) => {
  Categorie.findById(req.params.id)
    .then((categorie) => {
      res.status(200).json(categorie);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.getCategorieByLabel = (req, res, next) => {
  Categorie.findOne({
    label: req.params.label,
  })
    .then((categorie) => {
      res.status(200).json(categorie);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.updateCategorie = (req, res, next) => {
  const categorie = new Categorie({
    _id: req.params.id,
    label: req.body.label,
    image: req.body.image,
  });
  Categorie.updateOne({ _id: req.params.id }, categorie)
    .then(() => {
      res.status(201).json({
        message: "Categorie Updated!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteCategorie = (req, res, next) => {
  Categorie.deleteOne({ _id: req.body.id })
    .then(() => {
      res.status(200).json({
        message: "Categorie Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
