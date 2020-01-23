const knex = require("knex");

const config = require("../knexfile");

const db = knex(config.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getSingleIngredients
};

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .where({ "r.id": recipe_id })
    .join("ingredients as i", "i.recipe_id", "r.id")
    .select(["ingredient", "quantity"]);
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .where({ "r.id": recipe_id })
    .join("instructions as i", "i.recipe_id", "r.id")
    .select("instruction");
}

//  all recipes in the system that utilize a single ingredient
function getSingleIngredients(ingredient_id) {
  return db("recipes as r")
    .join("ingredients as i", "i.recipe_id", "r.id")
    .groupBy("r.recipe")
    .havingRaw("Count(Ingredient)=1")
    .havingIn("i.id", ingredient_id)
    .select(["recipe", "ingredient"]);
}
