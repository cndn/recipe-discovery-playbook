
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedRecipeProps {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const FeaturedRecipe = ({
  id,
  title,
  description,
  image,
  prepTime,
  cookTime,
  difficulty,
}: FeaturedRecipeProps) => {
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

  return (
    <div className="relative overflow-hidden rounded-xl bg-card shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="order-2 md:order-1 p-6 md:p-8 flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-3">
            <span className={`badge badge-${difficulty}`}>
              {getDifficultyLabel(difficulty)}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>{prepTime + cookTime} min</span>
            </div>
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mb-6 text-muted-foreground">{description}</p>
          <Button asChild className="w-fit">
            <Link to={`/recipe/${id}`}>
              View Recipe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 aspect-video md:aspect-auto md:h-full w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
