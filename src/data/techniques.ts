
export interface Technique {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  steps: {
    title: string;
    description: string;
    image?: string;
  }[];
  tips: string[];
  relatedRecipes: string[];
  hasVideo?: boolean;
}

export const techniques: Technique[] = [
  {
    id: '1',
    title: 'Knife Skills: Basic Cuts',
    description: 'Learn the fundamental cutting techniques that form the foundation of cooking.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    content: 'Proper knife skills are essential for any cook. They not only make your cooking more efficient but also safer. This technique guide covers the basic cuts used in cooking, from dicing to julienne.',
    steps: [
      {
        title: 'The Proper Grip',
        description: 'Hold the knife with your dominant hand, gripping the blade between your thumb and forefinger. Your remaining fingers should wrap around the handle for control. Use your other hand to hold the food, with fingers curled under to protect them.'
      },
      {
        title: 'The Dice',
        description: 'Start by cutting the food into slices, then into strips. Finally, cut across the strips to create cubes. The size of the cubes depends on the recipe requirements.'
      },
      {
        title: 'The Julienne',
        description: 'Cut the food into thin strips about 1/8 inch thick and 2 inches long. Perfect for stir-fries and garnishes.'
      },
      {
        title: 'The Chiffonade',
        description: 'Stack leafy vegetables or herbs, roll them tightly, then slice thinly to create fine ribbons. Ideal for garnishing soups or salads.'
      }
    ],
    tips: [
      'Always use a sharp knife - dull knives are more dangerous.',
      'Keep your cutting board stable by placing a damp cloth underneath.',
      'Practice consistent sizing for even cooking.',
      'Let the weight of the knife do most of the work rather than applying excessive force.'
    ],
    relatedRecipes: ['5', '3'],
    hasVideo: true
  },
  {
    id: '2',
    title: 'Sautéing Vegetables',
    description: 'Master the quick-cooking technique of sautéing for flavorful, crisp-tender vegetables.',
    image: 'https://images.unsplash.com/photo-1623238913973-21e362cf077a?auto=format&fit=crop&w=800&q=80',
    difficulty: 'beginner',
    content: 'Sautéing is a versatile cooking method that uses high heat and a small amount of fat to quickly cook food while maintaining texture and developing flavor. It\'s perfect for vegetables, as it preserves nutrients and creates delicious caramelization.',
    steps: [
      {
        title: 'Prepare Your Vegetables',
        description: 'Cut vegetables into uniform sizes to ensure even cooking. Pat them dry to prevent splattering and to help achieve better browning.'
      },
      {
        title: 'Heat Your Pan',
        description: 'Use a skillet or sauté pan with a heavy bottom. Heat it over medium-high heat until hot but not smoking.'
      },
      {
        title: 'Add Fat',
        description: 'Add a small amount of oil or butter to the pan. It should shimmer but not smoke. Swirl to coat the bottom of the pan.'
      },
      {
        title: 'Add Vegetables',
        description: 'Add vegetables to the pan in a single layer. Don\'t overcrowd the pan, or they\'ll steam instead of sauté. Cook in batches if necessary.'
      },
      {
        title: 'Toss and Stir',
        description: 'Toss or stir the vegetables occasionally to ensure even cooking. Harder vegetables like carrots will take longer than softer ones like zucchini.'
      },
      {
        title: 'Season',
        description: 'Add salt and pepper during cooking, and any other herbs or spices toward the end to preserve their flavor.'
      }
    ],
    tips: [
      'Don\'t overcrowd the pan - vegetables should have space to sizzle.',
      'Add tender vegetables like spinach at the end of cooking.',
      'For extra flavor, sauté aromatics like garlic or shallots first, then add other vegetables.',
      'Finish with a splash of lemon juice or vinegar to brighten flavors.'
    ],
    relatedRecipes: ['5']
  },
  {
    id: '3',
    title: 'Pan-Searing Meat',
    description: 'Achieve a delicious golden-brown crust and tender, juicy meat with proper pan-searing.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
    difficulty: 'intermediate',
    content: 'Pan-searing is a high-heat cooking method that creates a flavorful crust on the outside of meat while keeping the inside juicy. It\'s an essential technique for steaks, chops, and fillets.',
    steps: [
      {
        title: 'Bring Meat to Room Temperature',
        description: 'Remove meat from the refrigerator 30-60 minutes before cooking to ensure even cooking.'
      },
      {
        title: 'Pat Dry and Season',
        description: 'Pat the meat dry with paper towels to remove excess moisture. Season generously with salt and pepper just before cooking.'
      },
      {
        title: 'Heat the Pan',
        description: 'Use a heavy-bottomed skillet, preferably cast iron. Heat over medium-high heat until very hot.'
      },
      {
        title: 'Add Oil',
        description: 'Add a high-smoke-point oil like vegetable, canola, or grapeseed. The oil should shimmer and move easily in the pan.'
      },
      {
        title: 'Sear the Meat',
        description: 'Place the meat in the pan and don\'t move it for several minutes to allow a crust to form. Resist the urge to flip repeatedly.'
      },
      {
        title: 'Flip and Finish',
        description: 'Once a crust has formed, flip the meat and sear the other side. For thicker cuts, you may need to finish cooking in an oven.'
      },
      {
        title: 'Rest',
        description: 'Let the meat rest for at least 5 minutes before slicing to allow juices to redistribute.'
      }
    ],
    tips: [
      'Don\'t crowd the pan - leave space between pieces of meat.',
      'Use tongs instead of a fork to turn the meat to avoid piercing and losing juices.',
      'Add butter and aromatics (garlic, herbs) in the last minutes of cooking for extra flavor.',
      'For perfect doneness, use a meat thermometer rather than relying solely on cooking time.'
    ],
    relatedRecipes: ['3'],
    hasVideo: true
  },
  {
    id: '4',
    title: 'Making Roux',
    description: 'Learn to make the flour and fat mixture that is the foundation of many sauces and soups.',
    image: 'https://images.unsplash.com/photo-1591985666643-1ebd9dcc27b8?auto=format&fit=crop&w=800&q=80',
    difficulty: 'intermediate',
    content: 'A roux is a mixture of equal parts flour and fat cooked together, used to thicken sauces, soups, and gravies. The longer you cook a roux, the darker it becomes and the more flavor it develops, but the less thickening power it has.',
    steps: [
      {
        title: 'Choose Your Fat',
        description: 'Butter is common for light roux (for béchamel or velouté), while oil or bacon fat works well for darker roux (for gumbo or étouffée).'
      },
      {
        title: 'Melt the Fat',
        description: 'Heat your fat in a heavy-bottomed saucepan over medium heat until melted and hot.'
      },
      {
        title: 'Add Flour',
        description: 'Add an equal amount of flour (by weight) to the fat. For most applications, a ratio of 1 tablespoon fat to 1 tablespoon flour works well.'
      },
      {
        title: 'Cook and Stir',
        description: 'Stir constantly with a wooden spoon or whisk to prevent burning. For a white roux, cook for 2-3 minutes until the raw flour taste is gone but no color develops.'
      },
      {
        title: 'Continue for Darker Roux',
        description: 'For a blond roux, cook 5-7 minutes until it\'s lightly golden. For a brown roux, cook 10-15 minutes until it\'s amber-colored. For a dark roux, cook 20-30 minutes until the color of milk chocolate.'
      },
      {
        title: 'Use or Store',
        description: 'Use immediately in your recipe, or let cool completely and store in the refrigerator for later use.'
      }
    ],
    tips: [
      'Never stop stirring a roux to prevent burning.',
      'A hot roux added to cold liquid, or cold roux added to hot liquid, prevents lumps.',
      'The darker the roux, the more flavor but less thickening power it has.',
      'Roux can be made ahead and refrigerated for convenience.'
    ],
    relatedRecipes: []
  }
];

export const getTechniqueById = (id: string): Technique | undefined => {
  return techniques.find(technique => technique.id === id);
};

export const getTechniquesByDifficulty = (difficulty: string): Technique[] => {
  return techniques.filter(technique => technique.difficulty === difficulty);
};
