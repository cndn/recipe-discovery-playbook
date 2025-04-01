
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

interface TechniqueCardProps {
  id: string;
  title: string;
  image: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  hasVideo?: boolean;
}

const TechniqueCard = ({ id, title, image, difficulty, description, hasVideo = false }: TechniqueCardProps) => {
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
    <Link to={`/technique/${id}`} className="recipe-card group">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
        <img
          src={optimizedImageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=75";
          }}
        />
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-80 transition-opacity group-hover:opacity-100">
            <PlayCircle className="h-10 w-10 text-white" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className={`badge badge-${difficulty}`}>
            {getDifficultyLabel(difficulty)}
          </span>
        </div>
        <h3 className="mb-2 font-medium text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default TechniqueCard;
