const express = require("express");
const pokedex = require("../pokedex.json");
const router = express.Router();
const {
  getAllPokemonData,
  getPokemonById,
  getPokemonInfo,
} = require("../controllers/pokeControllers");

/* GET users listing. */
router.get("/", getAllPokemonData);

router.get("/:id", getPokemonById);

router.get("/:id/:info", getPokemonInfo);

module.exports = router;
