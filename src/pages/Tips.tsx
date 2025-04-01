
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { tips } from '@/data/tips';
import { Input } from '@/components/ui/input';
import { Search, Flame, Utensils, Timer, ThermometerSnowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ReactNode> = {
  salt: <Flame className="h-5 w-5 text-terracotta" />,
  prep: <Utensils className="h-5 w-5 text-terracotta" />,
  meat: <ThermometerSnowflake className="h-5 w-5 text-terracotta" />,
  pan: <Utensils className="h-5 w-5 text-terracotta" />,
  knife: <Utensils className="h-5 w-5 text-terracotta" />,
  taste: <Utensils className="h-5 w-5 text-terracotta" />,
  heat: <Flame className="h-5 w-5 text-terracotta" />,
  recipe: <Timer className="h-5 w-5 text-terracotta" />,
};

type CategoryFilter = 'all' | 'Seasoning' | 'Preparation' | 'Cooking Techniques' | 'Meat Cooking' | 'Kitchen Tools';

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [filteredTips, setFilteredTips] = useState(tips);

  useEffect(() => {
    let result = tips;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        tip => 
          tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tip.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter(tip => tip.category === categoryFilter);
    }

    setFilteredTips(result);
  }, [searchTerm, categoryFilter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(tips.map(tip => tip.category)))] as CategoryFilter[];

  return (
    <Layout>
      <div className="bg-butter/20 py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cooking Tips</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover practical cooking tips that will help you elevate your cooking skills,
            save time in the kitchen, and make your dishes taste better.
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
                placeholder="Search tips..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category}
                  size="sm" 
                  variant={categoryFilter === category ? 'default' : 'outline'}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {filteredTips.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-4">
                  {iconMap[tip.icon] || <Utensils className="h-5 w-5 text-terracotta" />}
                </div>
                <h3 className="text-lg font-medium mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tip.description}</p>
                <div className="bg-muted rounded p-4">
                  <p className="text-sm">{tip.content}</p>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Category: {tip.category}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No tips found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
            <Button onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
            }}>Clear all filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tips;
