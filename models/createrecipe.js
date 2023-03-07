const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: String,
  categoryId: Number,
  servingNb: Number,
  voteAverage: Number,
  photo_url: String,
  photosArray: String,
  time: Number,
  ingredients: [Number],
  description: String,
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
