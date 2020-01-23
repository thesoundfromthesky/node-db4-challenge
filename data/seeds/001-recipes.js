exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe: "Pumpkin and pepper gnocchi" },
        { recipe: "Mushroom and scallop dumplings" },
        { recipe: "Cocoa and truffle salad" },
        { recipe: "Combination Pizza" },
      ]);
    });
};
