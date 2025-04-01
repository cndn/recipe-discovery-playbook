
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { techniques } from '@/data/techniques';
import TechniqueCard from '@/components/technique/TechniqueCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced';

const Techniques = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [filteredTechniques, setFilteredTechniques] = useState(techniques);

  useEffect(() => {
    let result = techniques;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        technique => 
          technique.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          technique.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      result = result.filter(technique => technique.difficulty === difficultyFilter);
    }

    setFilteredTechniques(result);
  }, [searchTerm, difficultyFilter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="bg-sage/10 py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cooking Techniques</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Master essential cooking techniques to elevate your skills in the kitchen.
            From knife skills to sauces, learn the fundamentals that make cooking easier and more enjoyable.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4 w-full">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search techniques..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                variant={difficultyFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setDifficultyFilter('all')}
              >
                All Levels
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
        </div>

        {filteredTechniques.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechniques.map((technique) => (
              <TechniqueCard
                key={technique.id}
                id={technique.id}
                title={technique.title}
                image={technique.image}
                difficulty={technique.difficulty}
                description={technique.description}
                hasVideo={technique.hasVideo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No techniques found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
            <Button onClick={() => {
              setSearchTerm('');
              setDifficultyFilter('all');
            }}>Clear all filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Techniques;
