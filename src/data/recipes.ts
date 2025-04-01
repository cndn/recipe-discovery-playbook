
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  tags: string[];
  featured?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A creamy Italian pasta dish with eggs, cheese, pancetta and black pepper.',
    image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      '350g spaghetti',
      '150g pancetta or guanciale, diced',
      '3 large eggs',
      '50g Pecorino Romano cheese, grated',
      '50g Parmesan cheese, grated',
      'Freshly ground black pepper',
      'Salt to taste'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions until al dente.',
      'While the pasta is cooking, heat a large skillet over medium heat. Add the pancetta and cook until crispy, about 5-7 minutes.',
      'In a bowl, whisk together the eggs, grated Pecorino, and Parmesan cheese. Season with black pepper.',
      'When the pasta is done, reserve 1 cup of pasta water, then drain the pasta.',
      'Working quickly, add the hot pasta to the skillet with the pancetta. Toss to combine.',
      'Remove the skillet from heat and pour in the egg and cheese mixture, stirring constantly. The residual heat will cook the eggs and create a creamy sauce. If the sauce is too thick, add a splash of reserved pasta water.',
      'Serve immediately with additional grated cheese and black pepper on top.'
    ],
    tips: [
      'The key to a perfect carbonara is to work quickly and keep the pasta hot, but not so hot that it scrambles the eggs.',
      'Traditional carbonara does not include cream - the creaminess comes from the eggs and cheese.',
      'Use the best quality pancetta or guanciale you can find for authentic flavor.'
    ],
    tags: ['Italian', 'Pasta', 'Quick', 'Dinner'],
    featured: true
  },
  {
    id: '2',
    title: 'Perfect Fluffy Pancakes',
    description: 'Light and fluffy pancakes that are perfect for breakfast or brunch.',
    image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      '2 cups all-purpose flour',
      '2 tbsp sugar',
      '4 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '1 1/2 cups milk',
      '4 tbsp butter, melted',
      '1 tsp vanilla extract',
      'Maple syrup and butter for serving'
    ],
    instructions: [
      'In a large bowl, whisk together the flour, sugar, baking powder, and salt.',
      'In another bowl, beat the eggs, then add the milk, melted butter, and vanilla. Mix well.',
      'Pour the wet ingredients into the dry ingredients and stir just until combined. Don\'t overmix – a few lumps are okay.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat.',
      'For each pancake, pour 1/4 cup of batter onto the griddle. Cook until bubbles form on the surface and the edges look dry.',
      'Flip and cook until browned on the other side.',
      'Serve hot with butter and maple syrup.'
    ],
    tips: [
      'Don\'t overmix the batter – this develops gluten and makes pancakes tough.',
      'Let the batter rest for 5 minutes before cooking for even fluffier pancakes.',
      'Make sure your pan is at the right temperature – too hot and pancakes will burn, too cool and they'll be dense.'
    ],
    tags: ['Breakfast', 'Brunch', 'Sweet']
  },
  {
    id: '3',
    title: 'Simple Roast Chicken',
    description: 'A foolproof recipe for juicy, tender roast chicken with crispy skin.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 75,
    servings: 4,
    ingredients: [
      '1 whole chicken (about 4-5 pounds)',
      '2 tbsp butter, softened',
      '3 cloves garlic, minced',
      '1 lemon',
      'Fresh herbs (thyme, rosemary, sage)',
      'Salt and pepper to taste',
      '1 onion, quartered',
      '2 carrots, roughly chopped'
    ],
    instructions: [
      'Preheat your oven to 425°F (220°C).',
      'Remove giblets from chicken cavity and pat the chicken dry with paper towels.',
      'In a small bowl, mix the softened butter with minced garlic, lemon zest, and chopped herbs.',
      'Carefully loosen the skin on the chicken breast and spread half of the herb butter underneath.',
      'Rub the remaining butter all over the outside of the chicken. Season generously with salt and pepper.',
      'Cut the lemon in half and place inside the cavity along with some additional herbs.',
      'Place the onion and carrots in a roasting pan and set the chicken on top, breast side up.',
      'Roast for 15 minutes, then reduce the temperature to 375°F (190°C) and continue roasting for about 60 minutes, or until the juices run clear and the internal temperature reaches 165°F (75°C).',
      'Let the chicken rest for 15 minutes before carving.'
    ],
    tips: [
      'Bringing the chicken to room temperature before roasting helps it cook more evenly.',
      'Trussing the chicken (tying the legs together) helps it cook more evenly, but isn't strictly necessary.',
      'For extra crispy skin, pat the chicken very dry before roasting and don't cover it while resting.'
    ],
    tags: ['Dinner', 'Main Course', 'Poultry']
  },
  {
    id: '4',
    title: 'Fresh Guacamole',
    description: 'A simple, fresh guacamole that's perfect for dipping or topping.',
    image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    ingredients: [
      '3 ripe avocados',
      '1 lime, juiced',
      '1/2 red onion, finely diced',
      '2 Roma tomatoes, diced',
      '1 clove garlic, minced',
      '1 jalapeño, seeds removed and finely diced (optional)',
      '2 tbsp fresh cilantro, chopped',
      'Salt and pepper to taste',
      'Tortilla chips for serving'
    ],
    instructions: [
      'Cut the avocados in half, remove the pits, and scoop the flesh into a bowl.',
      'Add the lime juice and mash with a fork to your desired consistency (chunky or smooth).',
      'Fold in the diced onion, tomatoes, garlic, jalapeño (if using), and cilantro.',
      'Season with salt and pepper to taste.',
      'Serve immediately with tortilla chips, or press plastic wrap directly onto the surface of the guacamole and refrigerate to prevent browning.'
    ],
    tips: [
      'Use ripe avocados that yield to gentle pressure for the best flavor and texture.',
      'The lime juice not only adds flavor but helps prevent the guacamole from browning.',
      'For a different flavor profile, try adding a pinch of cumin or some diced mango.'
    ],
    tags: ['Appetizer', 'Mexican', 'Vegetarian', 'No-Cook']
  },
  {
    id: '5',
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy vegetable stir fry with a flavorful sauce.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      '2 tbsp vegetable oil',
      '2 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '1 bell pepper, sliced',
      '1 carrot, julienned',
      '1 cup broccoli florets',
      '1 cup snow peas',
      '1 cup mushrooms, sliced',
      '3 tbsp soy sauce',
      '1 tbsp hoisin sauce',
      '1 tsp sesame oil',
      '1/4 cup vegetable broth',
      '1 tsp cornstarch (mixed with 1 tbsp water)',
      'Cooked rice for serving',
      'Sesame seeds and green onions for garnish'
    ],
    instructions: [
      'Heat the vegetable oil in a wok or large skillet over high heat.',
      'Add the garlic and ginger and stir-fry for 30 seconds until fragrant.',
      'Add the vegetables that take longer to cook (carrots, broccoli) and stir-fry for 2 minutes.',
      'Add the remaining vegetables and stir-fry for another 2-3 minutes until they begin to soften but still retain some crunch.',
      'In a small bowl, mix together the soy sauce, hoisin sauce, sesame oil, and vegetable broth.',
      'Pour the sauce over the vegetables and bring to a simmer.',
      'Add the cornstarch slurry and stir until the sauce thickens, about 1 minute.',
      'Serve over rice and garnish with sesame seeds and sliced green onions.'
    ],
    tips: [
      'Have all your ingredients prepped and ready before you start cooking, as stir-frying goes quickly.',
      'Don't overcrowd the pan – cook in batches if necessary to ensure vegetables get a good sear.',
      'Customize with your favorite vegetables or add protein like tofu, chicken, or shrimp.'
    ],
    tags: ['Asian', 'Vegetarian', 'Quick', 'Healthy'],
    featured: true
  },
  {
    id: '6',
    title: 'Chocolate Chip Cookies',
    description: 'Classic, chewy chocolate chip cookies that everyone will love.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup (2 sticks) unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups semisweet chocolate chips',
      '1 cup chopped nuts (optional)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a small bowl, whisk together the flour, baking soda, and salt.',
      'In a large bowl, beat the butter, granulated sugar, and brown sugar until creamy.',
      'Add the eggs one at a time, beating well after each addition, then stir in the vanilla.',
      'Gradually beat in the flour mixture until just combined.',
      'Stir in the chocolate chips and nuts (if using).',
      'Drop rounded tablespoons of dough onto ungreased baking sheets.',
      'Bake for 9 to 11 minutes or until golden brown.',
      'Allow cookies to cool on baking sheets for 2 minutes before removing to wire racks to cool completely.'
    ],
    tips: [
      'For chewy cookies, don't overbake – they should still be slightly soft in the center when you take them out.',
      'Chilling the dough for 24 hours deepens the flavor and improves texture.',
      'For perfectly round cookies, roll the dough into balls before baking.'
    ],
    tags: ['Dessert', 'Baking', 'Cookies']
  }
];

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByDifficulty = (difficulty: string): Recipe[] => {
  return recipes.filter(recipe => recipe.difficulty === difficulty);
};

export const getRecipesByTag = (tag: string): Recipe[] => {
  return recipes.filter(recipe => recipe.tags.includes(tag));
};
