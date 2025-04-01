
import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface RecipeGridProps {
  recipes: Recipe[];
  title?: string;
}

const RecipeGrid = ({ recipes, title }: RecipeGridProps) => {
  return (
    <div className="w-full">
      {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
