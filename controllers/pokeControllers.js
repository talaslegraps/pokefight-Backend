const express = require("express");
const pokedex = require("../pokedex.json");

const getAllPokemonData = (req, res) => {
  res.send(pokedex);
};

const getPokemonById = (req, res) => {
  const { id } = req.params;
  const getPokemon = pokedex.find((pokemon) => pokemon.id == id);
  res.send(getPokemon);
};

const getPokemonInfo = (req, res) => {
  const { id } = req.params;
  const { info } = req.params;
  const getPokemon = pokedex.find((pokemon) => pokemon.id == id);
  if (info === "name") {
    return res.send(getPokemon.name);
  } else if (info === "type") {
    return res.send(getPokemon.type);
  } else if (info === "base") {
    return res.send(getPokemon.base);
  } else {
    res.send(`"/${info}" is not a valid query. Try /type, /base, /name.`);
  }
};

module.exports = {
  getAllPokemonData,
  getPokemonById,
  getPokemonInfo,
};
