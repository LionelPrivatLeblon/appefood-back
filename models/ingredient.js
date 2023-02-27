const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
  name: String,
  image: String,
});

const Ingredient = mongoose.model("ingredient", ingredientSchema);

module.exports = Ingredient;