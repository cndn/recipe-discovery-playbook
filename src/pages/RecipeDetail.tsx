
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getRecipeById, recipes } from '@/data/recipes';
import { 
  Clock, 
  Users, 
  ChefHat,
  ArrowLeft,
  Printer,
  Share2,
  BookmarkPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecipeGrid from '@/components/recipe/RecipeGrid';
import { Separator } from '@/components/ui/separator';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = getRecipeById(id || '');
  
  if (!recipe) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
          <p className="mb-6">The recipe you're looking for doesn't exist or may have been moved.</p>
          <Button asChild>
            <Link to="/recipes">Browse All Recipes</Link>
          </Button>
        </div>
      </Layout>
    );
  }

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

  // Create optimized image URL with reduced dimensions
  const optimizedImageUrl = recipe.image.includes('unsplash.com') 
    ? `${recipe.image}&w=500&q=80` 
    : recipe.image;

  // Get similar recipes
  const similarRecipes = recipes
    .filter(r => r.id !== recipe.id && r.tags.some(tag => recipe.tags.includes(tag)))
    .slice(0, 3);

  return (
    <Layout>
      {/* Recipe Hero */}
      <div className="bg-muted/30 py-6">
        <div className="container">
          <div className="flex items-center mb-4">
            <Button asChild variant="ghost" size="sm" className="mr-auto">
              <Link to="/recipes" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to recipes
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Printer className="h-4 w-4" />
              <span className="sr-only">Print recipe</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share recipe</span>
            </Button>
            <Button variant="ghost" size="icon">
              <BookmarkPlus className="h-4 w-4" />
              <span className="sr-only">Save recipe</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-muted-foreground max-w-3xl mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <span className={`badge badge-${recipe.difficulty}`}>
                {getDifficultyLabel(recipe.difficulty)}
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>Prep: {recipe.prepTime} min</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>Cook: {recipe.cookTime} min</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="mr-2 h-4 w-4" />
              <span>Serves {recipe.servings}</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 rounded-full border border-input mr-3 mt-0.5 flex-shrink-0"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recipe image moved here and made smaller */}
              <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={optimizedImageUrl}
                  alt={recipe.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=500&q=80";
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-white font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <p>{instruction}</p>
                  </div>
                </li>
              ))}
            </ol>
            
            {recipe.tips.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Chef's Tips</h2>
                <div className="bg-butter/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ChefHat className="h-5 w-5 text-terracotta mr-2" />
                    <h3 className="font-medium">Pro Tips for Success</h3>
                  </div>
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-terracotta mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {similarRecipes.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <RecipeGrid recipes={similarRecipes} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RecipeDetail;
