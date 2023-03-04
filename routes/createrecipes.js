var express = require("express");
var router = express.Router();

require("../models/connection");
const Recipe = require("../models/createrecipe");
const { checkBody } = require("../modules/checkBody");

router.post("/newrecipe", (req, res) => {
  if (!checkBody(req.body, ["title", "description"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if the Recipe has not already been registered
  Recipe.findOne({ title: req.body.title }).then((data) => {
    if (data === null) {
      const newRecipe = new Recipe({
        title: req.body.title,
        categoryId: req.body.categoryId,
        servingNb: req.body.servingNb,
        voteAverage: req.body.voteAverage,
        photo_url: req.body.photo_url,
        photosArray: req.body.photosArray,
        time: req.body.time,
        ingredients: req.body.ingredients,
        description: req.body.description,
      });

      newRecipe.save().then(() => {
        res.json({ result: true });
      });
    } else {
      // Recipe already exists in database
      res.json({ result: false, error: "Recipe already exists" });
    }
  });
});

router.get("/displayrecette", (req, res) => {
  Recipe.find().then((data) => {
    res.json({ recipe: data });
  });
});

module.exports = router;
