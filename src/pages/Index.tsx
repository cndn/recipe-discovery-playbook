
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedRecipe from '@/components/home/FeaturedRecipe';
import RecipeGrid from '@/components/recipe/RecipeGrid';
import CookingTips from '@/components/home/CookingTips';
import { recipes, getFeaturedRecipes } from '@/data/recipes';
import { techniques } from '@/data/techniques';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredRecipes = getFeaturedRecipes();
  const beginnerRecipes = recipes.filter(recipe => recipe.difficulty === 'beginner').slice(0, 4);
  const beginnerTechniques = techniques.filter(technique => technique.difficulty === 'beginner').slice(0, 3);
  
  return (
    <Layout>
      <HeroSection />
      
      {/* Featured Recipe */}
      <section className="py-12 container">
        <h2 className="text-3xl font-bold mb-8">Featured Recipe</h2>
        {featuredRecipes.length > 0 && (
          <FeaturedRecipe 
            id={featuredRecipes[0].id}
            title={featuredRecipes[0].title}
            description={featuredRecipes[0].description}
            image={featuredRecipes[0].image}
            prepTime={featuredRecipes[0].prepTime}
            cookTime={featuredRecipes[0].cookTime}
            difficulty={featuredRecipes[0].difficulty}
          />
        )}
      </section>
      
      {/* Beginner Recipes */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Easy Recipes for Beginners</h2>
            <Button asChild variant="ghost">
              <Link to="/recipes" className="flex items-center">
                View all recipes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <RecipeGrid recipes={beginnerRecipes} />
        </div>
      </section>
      
      {/* Cooking Tips */}
      <CookingTips />
      
      {/* Cooking Techniques */}
      <section className="py-12 container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Essential Cooking Techniques</h2>
          <Button asChild variant="ghost">
            <Link to="/techniques" className="flex items-center">
              View all techniques
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beginnerTechniques.map(technique => (
            <Link 
              key={technique.id} 
              to={`/technique/${technique.id}`}
              className="group recipe-card"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={technique.image}
                  alt={technique.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className={`badge badge-${technique.difficulty}`}>
                    {technique.difficulty === 'beginner' ? 'Easy' : 
                     technique.difficulty === 'intermediate' ? 'Medium' : 'Advanced'}
                  </span>
                </div>
                <h3 className="font-medium text-lg mb-2">{technique.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{technique.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-terracotta/20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Weekly Cooking Inspiration</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for new recipes, cooking tips, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
            <Button className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
