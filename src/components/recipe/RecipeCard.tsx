
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const RecipeCard = ({ id, title, image, prepTime, cookTime, servings, difficulty }: RecipeCardProps) => {
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Easy';
      case 'intermediate':
        return 'Medium';
      case 'advanced':
        return 'Advanced';
      default:
        return 'Easy';
    }
  };

  // Create a smaller image URL by adding size parameters
  const optimizedImageUrl = image.includes('unsplash.com') 
    ? `${image}&w=400&q=75` 
    : image;

  return (
    <Link to={`/recipe/${id}`} className="recipe-card group">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <img
          src={optimizedImageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=75";
          }}
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className={`badge badge-${difficulty}`}>
            {getDifficultyLabel(difficulty)}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>{prepTime + cookTime} min</span>
          </div>
        </div>
        <h3 className="line-clamp-2 font-medium text-lg">{title}</h3>
        <div className="mt-2 flex items-center text-xs text-muted-foreground">
          <Users className="mr-1 h-3 w-3" />
          <span>Serves {servings}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
