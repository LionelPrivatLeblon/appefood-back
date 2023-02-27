const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: String,
  image: String,
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;