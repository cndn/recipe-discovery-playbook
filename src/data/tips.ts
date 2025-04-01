
export interface Tip {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  category: string;
}

export const tips: Tip[] = [
  {
    id: '1',
    title: 'Salt as You Go',
    description: 'Season food throughout the cooking process, not just at the end.',
    icon: 'salt',
    content: 'One of the most common mistakes in cooking is seasoning only at the end. Instead, add salt in layers as you cook. Season vegetables before sautéing, meat before cooking, and water for pasta or blanching vegetables. This builds flavor throughout the dish rather than just on the surface. Taste as you go and adjust the seasoning as needed. Remember that some ingredients like bacon or cheese add their own saltiness, so account for that in your seasoning.',
    category: 'Seasoning'
  },
  {
    id: '2',
    title: 'Mise en Place',
    description: 'Prepare and organize all ingredients before you start cooking.',
    icon: 'prep',
    content: 'Mise en place, French for "everything in its place," is the practice of preparing and organizing all ingredients before you start cooking. Measure out ingredients, chop vegetables, and prepare any sauces or spice blends. This not only makes the cooking process smoother but also ensures you don\'t realize halfway through that you\'re missing a crucial ingredient. Use small bowls or ramekins to hold prepped ingredients, and group items that will be added to the recipe at the same time.',
    category: 'Preparation'
  },
  {
    id: '3',
    title: 'Let Meat Rest',
    description: 'Allow cooked meat to rest before slicing to keep it juicy.',
    icon: 'meat',
    content: 'After cooking meat, especially larger cuts like roasts or steaks, it\'s crucial to let it rest before cutting. During cooking, the juices are driven toward the center of the meat. Resting allows these juices to redistribute throughout the meat, resulting in a more tender, juicy result. As a general rule, rest small cuts like steaks for 5-10 minutes and larger roasts for 15-20 minutes. Loosely tent the meat with foil to keep it warm while resting, but don\'t wrap it tightly or it will continue cooking from the residual heat.',
    category: 'Meat Cooking'
  },
  {
    id: '4',
    title: 'Don\'t Overcrowd the Pan',
    description: 'Leave space between ingredients to properly sauté, sear, or fry.',
    icon: 'pan',
    content: 'When sautéing, searing, or frying, avoid crowding too many ingredients in the pan. Overcrowding causes the food to steam rather than brown, resulting in less flavor and poor texture. If necessary, cook in batches rather than trying to fit everything at once. This principle applies to roasting as well – vegetables need space on the baking sheet to roast properly. A good rule of thumb is to leave enough space for each piece of food to "breathe" – you should be able to see the bottom of the pan between items.',
    category: 'Cooking Techniques'
  },
  {
    id: '5',
    title: 'Use a Sharp Knife',
    description: 'Keep your knives sharp for safer, more efficient cutting.',
    icon: 'knife',
    content: 'A sharp knife is actually safer than a dull one, as it requires less force to cut and is less likely to slip. Sharp knives also make cutting more efficient and precise, which improves your cooking overall. Learn to sharpen your knives with a whetstone or honing rod, or have them professionally sharpened. Between sharpenings, use a honing steel before each use to keep the edge aligned. Store knives in a knife block, on a magnetic strip, or with blade guards to protect the edges and prevent accidents.',
    category: 'Kitchen Tools'
  },
  {
    id: '6',
    title: 'Taste as You Go',
    description: 'Regularly taste your food while cooking and adjust seasoning.',
    icon: 'taste',
    content: 'Consistently tasting your food throughout the cooking process is essential for developing your palate and creating well-seasoned dishes. Get in the habit of tasting after adding each major ingredient or completing a cooking step. This allows you to adjust seasonings, acidity, or other flavor elements as you go, rather than trying to fix everything at the end. Keep a clean spoon nearby specifically for tasting. And remember, it\'s much easier to add more seasoning than to fix an over-seasoned dish.',
    category: 'Seasoning'
  },
  {
    id: '7',
    title: 'Heat the Pan First',
    description: 'Always preheat your pan before adding ingredients for better results.',
    icon: 'heat',
    content: 'Starting with a properly heated pan is critical for many cooking techniques. For sautéing and searing, heat the pan before adding any fat or ingredients. A hot pan helps prevent sticking and promotes proper browning. To test if a pan is hot enough, sprinkle a few drops of water on it – they should sizzle and evaporate quickly. Then add your oil, allow it to heat until shimmering (but not smoking), and finally add your ingredients. For non-stick pans, use lower heat and add the oil before heating to prevent damage to the coating.',
    category: 'Cooking Techniques'
  },
  {
    id: '8',
    title: 'Read the Recipe Entirely',
    description: 'Read through the entire recipe before starting to cook.',
    icon: 'recipe',
    content: 'Before you start cooking, read the entire recipe from beginning to end. This helps you understand the full process, timing, and any special techniques or equipment needed. Look for phrases like "meanwhile" or "while X is cooking" that indicate parallel tasks. Check for ingredients that might need advance preparation, such as bringing butter to room temperature or marinating meat. Understanding the whole process before starting helps prevent surprises midway through cooking and ensures a smoother cooking experience.',
    category: 'Preparation'
  }
];

export const getTipById = (id: string): Tip | undefined => {
  return tips.find(tip => tip.id === id);
};

export const getTipsByCategory = (category: string): Tip[] => {
  return tips.filter(tip => tip.category === category);
};
