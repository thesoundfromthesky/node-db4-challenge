// - have a way to manage recipes.
// - have a way to manage ingredients.
// - a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
// - when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
// - have a way to save step by step instructions for preparing a recipe.

// **Hint**: Before writing any code, write out all desired tables in the data model and determine all relationships between tables.
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.decimal("quantity");
      tbl.string("ingredient", 128);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.string("instruction", 128);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
