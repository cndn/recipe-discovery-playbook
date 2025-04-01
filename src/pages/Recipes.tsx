
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import RecipeGrid from '@/components/recipe/RecipeGrid';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced';
type TimeFilter = 'all' | 'under30' | 'under60';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = recipes;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        recipe => 
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      result = result.filter(recipe => recipe.difficulty === difficultyFilter);
    }

    // Apply time filter
    if (timeFilter === 'under30') {
      result = result.filter(recipe => (recipe.prepTime + recipe.cookTime) < 30);
    } else if (timeFilter === 'under60') {
      result = result.filter(recipe => (recipe.prepTime + recipe.cookTime) < 60);
    }

    setFilteredRecipes(result);
  }, [searchTerm, difficultyFilter, timeFilter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setDifficultyFilter('all');
    setTimeFilter('all');
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">All Recipes</h1>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" onClick={toggleFilter} className="flex-shrink-0">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {isFilterOpen && (
          <div className="bg-muted p-4 rounded-lg mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <p className="text-sm font-medium mb-2">Difficulty</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    variant={difficultyFilter === 'all' ? 'default' : 'outline'}
                    onClick={() => setDifficultyFilter('all')}
                  >
                    All
                  </Button>
                  <Button 
                    size="sm" 
                    variant={difficultyFilter === 'beginner' ? 'default' : 'outline'}
                    onClick={() => setDifficultyFilter('beginner')}
                  >
                    Easy
                  </Button>
                  <Button 
                    size="sm" 
                    variant={difficultyFilter === 'intermediate' ? 'default' : 'outline'}
                    onClick={() => setDifficultyFilter('intermediate')}
                  >
                    Medium
                  </Button>
                  <Button 
                    size="sm" 
                    variant={difficultyFilter === 'advanced' ? 'default' : 'outline'}
                    onClick={() => setDifficultyFilter('advanced')}
                  >
                    Advanced
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Total Time</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    variant={timeFilter === 'all' ? 'default' : 'outline'}
                    onClick={() => setTimeFilter('all')}
                  >
                    All
                  </Button>
                  <Button 
                    size="sm" 
                    variant={timeFilter === 'under30' ? 'default' : 'outline'}
                    onClick={() => setTimeFilter('under30')}
                  >
                    Under 30 min
                  </Button>
                  <Button 
                    size="sm" 
                    variant={timeFilter === 'under60' ? 'default' : 'outline'}
                    onClick={() => setTimeFilter('under60')}
                  >
                    Under 60 min
                  </Button>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="ml-auto" 
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </div>
          </div>
        )}

        {filteredRecipes.length > 0 ? (
          <RecipeGrid recipes={filteredRecipes} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No recipes found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Recipes;
