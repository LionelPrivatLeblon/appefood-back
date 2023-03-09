var express = require("express");
var router = express.Router();
require("../models/connection");
//j'importe les modules nécessaires au fonctionnements des routes

const SPOON_API_KEY = process.env.SPOON_API_KEY;
//je définis ma clé API dans une variable
const fetch = require("node-fetch");
//je définis fetch dans une variable que je vais rappeler après
const Recipe = require("../models/recipes");
//j'importe mon models Recipe que je vais utiliser dans mes routes

//je crée une route pour afficher les recettes en fonction des ingrédients
router.get("/", (req, res) => {
  fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOON_API_KEY}&ingredients=tomato,+pasta,+cheese&number=5`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        res.json({ recipes: data });
      } else {
        res.json({ recipes: [] });
      }
    });
});

//je n'oublie pas d'exporter sinon ça ne fonctionnera pas...
module.exports = router;
