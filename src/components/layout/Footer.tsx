
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  // Use anchor tags for external/undefined links, Link for defined routes
  return (
    <footer className="border-t bg-cream dark:bg-navy">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-terracotta" />
              <span className="font-serif text-lg font-bold">CookWise</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Learn to cook like a pro with our step-by-step recipes and cooking techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-terracotta">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-terracotta">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-terracotta">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Recipes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Breakfast</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Main Dishes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Desserts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Quick & Easy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Vegetarian</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/techniques" className="text-muted-foreground hover:text-terracotta">Cooking Techniques</Link></li>
              <li><Link to="/tips" className="text-muted-foreground hover:text-terracotta">Cooking Tips</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Ingredient Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Kitchen Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Meal Planning</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-terracotta">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CookWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
