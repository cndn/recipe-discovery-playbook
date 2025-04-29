
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { isNative } from '@/utils/platform';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Add additional padding when running as a native iOS app
  const nativePadding = isNative() ? 'pt-2' : '';

  return (
    <header className={`sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${nativePadding}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link to="/" className="flex items-center gap-2 py-4">
                <ChefHat className="h-6 w-6 text-terracotta" />
                <span className="font-serif text-xl font-bold">CookWise</span>
              </Link>
              <div className="flex flex-col gap-3 py-4">
                <Link to="/" className="px-4 py-2 text-sm font-medium hover:bg-muted">Home</Link>
                <Link to="/recipes" className="px-4 py-2 text-sm font-medium hover:bg-muted">Recipes</Link>
                <Link to="/techniques" className="px-4 py-2 text-sm font-medium hover:bg-muted">Techniques</Link>
                <Link to="/tips" className="px-4 py-2 text-sm font-medium hover:bg-muted">Cooking Tips</Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-terracotta" />
            <span className="font-serif text-xl font-bold hidden md:inline-block">CookWise</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="font-medium transition-colors hover:text-terracotta">Home</Link>
            <Link to="/recipes" className="font-medium transition-colors hover:text-terracotta">Recipes</Link>
            <Link to="/techniques" className="font-medium transition-colors hover:text-terracotta">Techniques</Link>
            <Link to="/tips" className="font-medium transition-colors hover:text-terracotta">Cooking Tips</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-[200px] md:w-[300px]"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={toggleSearch} className="absolute right-0">
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search recipes</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
