exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "ounces elbow macaroni", quantity: 8, recipe_id: 1 },
        {
          ingredient: " tablespoons unsalted butter",
          quantity: 2,
          recipe_id: 1
        },
        { ingredient: "cups milk", quantity: 1 / 4, recipe_id: 1 },
        { ingredient: "cup heavy cream", quantity: 1 / 2, recipe_id: 2 },
        {
          ingredient: "ounces fresh mozzarella, shredded",
          quantity: 8,
          recipe_id: 2
        },
        { ingredient: "Roma tomatoes, diced", quantity: 2, recipe_id: 2 },
        {
          ingredient: "cup fresh basil leaves, chiffonade",
          quantity: 1 / 4,
          recipe_id: 3
        },
        { ingredient: "cup cider vinegar", quantity: 1 / 4, recipe_id: 3 },
        { ingredient: "tsp. ground coriande", quantity: 1 / 8, recipe_id: 3 },
        { ingredient: "cabbage", quantity: 1 / 8, recipe_id: 4 }
      ]);
    });
};
