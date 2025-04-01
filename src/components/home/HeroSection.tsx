
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-cream to-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4 bg-background text-muted-foreground">
              <ChefHat className="mr-1 h-3 w-3 text-terracotta" />
              <span>Learn to cook step by step</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover the joy of <span className="text-terracotta">cooking</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Master essential cooking techniques, explore delicious recipes, and build confidence in the kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/recipes">Explore Recipes</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/techniques">Learn Techniques</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80" 
                alt="Cooking ingredients" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 overflow-hidden rounded-lg shadow-xl w-1/2 aspect-square hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" 
                alt="Cooking in progress" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
