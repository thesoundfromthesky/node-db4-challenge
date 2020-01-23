exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instruction:
            "In large pot of boiling salted water, cook pasta according to package instructions; drain well and set aside.",
          recipe_id: 1
        },
        {
          instruction:
            "Melt butter in medium saucepan over medium heat. Whisk in flour until lightly browned, about 1 minute. Gradually whisk in milk and heavy cream, and cook, whisking constantly, until incorporated, 1-2 minutes. Stir in mozzarella, a handful at a time, until smooth, about 1-2 minutes; season with salt and pepper, to taste. Remove from heat; add cheese sauce to pasta and stir.",
          recipe_id: 1
        },
        {
          instruction:
            "Serve immediately, topped with tomatoes and basil, if desired.",
          recipe_id: 2
        },
        {
          instruction:
            "Place tofu on paper towels, and cover with another layer of towels. Set dinner plate on top, and put 2 cans on plate. Let stand 15 minutes, then pat tofu dry.",
          recipe_id: 2
        },
        {
          instruction:
            "Whisk together juice and cornstarch in bowl. Warm 1/2 Tbs. oil in saucepan over medium-low heat. Add shallot and sauté 3 to 5 minutes, or until softened. Stir in preserves, ketchup, vinegar, cayenne, coriander and orange juice mixture, and bring to a boil. Simmer 10 to 12 minutes, or until sauce is glossy, stirring frequently. Season to taste with salt and pepper.",
          recipe_id: 2
        },
        {
          instruction:
            "Brush grill rack with oil, and preheat grill. Thread tofu cubes on skewers. Brush tofu with remaining oil. Sprinkle with salt and pepper.",
          recipe_id: 3
        },
        {
          instruction:
            "Grill kabobs 6 to 8 minutes, or until cubes are browned, turning occasionally.",
          recipe_id: 3
        },
        {
          instruction:
            "Transfer to serving platter, and brush with sauce. Serve with remaining barbecue sauce on the side.",
          recipe_id: 3
        },
        {
          instruction:
            "Transfer to serving platter, and brush with sauce. Serve with remaining barbecue sauce on the side.",
          recipe_id: 4
        }
      ]);
    });
};
