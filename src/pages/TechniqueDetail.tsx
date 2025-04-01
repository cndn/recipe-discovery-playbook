
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getTechniqueById } from '@/data/techniques';
import { getRecipeById } from '@/data/recipes';
import { ArrowLeft, ChefHat, BookmarkPlus, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import RecipeCard from '@/components/recipe/RecipeCard';

const TechniqueDetail = () => {
  const { id } = useParams();
  const technique = getTechniqueById(id || '');
  
  if (!technique) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Technique not found</h2>
          <p className="mb-6">The technique you're looking for doesn't exist or may have been moved.</p>
          <Button asChild>
            <Link to="/techniques">Browse All Techniques</Link>
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

  // Get related recipes if any
  const relatedRecipes = technique.relatedRecipes
    .map(recipeId => getRecipeById(recipeId))
    .filter(recipe => recipe !== undefined);

  return (
    <Layout>
      {/* Technique Hero */}
      <div className="bg-muted/30 py-6">
        <div className="container">
          <div className="flex items-center mb-4">
            <Button asChild variant="ghost" size="sm" className="mr-auto">
              <Link to="/techniques" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to techniques
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share technique</span>
            </Button>
            <Button variant="ghost" size="icon">
              <BookmarkPlus className="h-4 w-4" />
              <span className="sr-only">Save technique</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{technique.title}</h1>
          <p className="text-muted-foreground max-w-3xl mb-6">{technique.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <span className={`badge badge-${technique.difficulty}`}>
                {getDifficultyLabel(technique.difficulty)}
              </span>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={technique.image}
              alt={technique.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="prose max-w-none mb-12">
              <p className="text-lg">{technique.content}</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>
            <div className="space-y-8 mb-12">
              {technique.steps.map((step, index) => (
                <div key={index} className="bg-card rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-white font-medium mr-3">
                        {index + 1}
                      </div>
                      <h3 className="font-medium text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {step.image && (
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-auto object-cover" 
                    />
                  )}
                </div>
              ))}
            </div>
            
            {technique.tips.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Chef's Tips</h2>
                <div className="bg-butter/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ChefHat className="h-5 w-5 text-terracotta mr-2" />
                    <h3 className="font-medium">Pro Tips for Success</h3>
                  </div>
                  <ul className="space-y-3">
                    {technique.tips.map((tip, index) => (
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
          
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-medium mb-4">In This Guide</h3>
                <Separator className="mb-4" />
                <nav>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-terracotta">Introduction</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-terracotta">Step-by-Step Guide</a>
                    </li>
                    {technique.tips.length > 0 && (
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-terracotta">Chef's Tips</a>
                      </li>
                    )}
                    {relatedRecipes.length > 0 && (
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-terracotta">Related Recipes</a>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {relatedRecipes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Try This Technique With These Recipes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRecipes.map((recipe) => (
                recipe && (
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
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TechniqueDetail;
