
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, ThermometerSnowflake, Timer, Utensils } from 'lucide-react';

const tipItems = [
  {
    icon: <Flame className="h-5 w-5 text-terracotta" />,
    title: "Control Your Heat",
    description: "Adjust your heat levels based on what you're cooking. High heat isn't always better."
  },
  {
    icon: <Utensils className="h-5 w-5 text-terracotta" />,
    title: "Prep Before Cooking",
    description: "Have all ingredients measured, cut, and ready before you start cooking (mise en place)."
  },
  {
    icon: <Timer className="h-5 w-5 text-terracotta" />,
    title: "Timing is Everything",
    description: "Use timers to avoid overcooking and learn to recognize visual cues for doneness."
  },
  {
    icon: <ThermometerSnowflake className="h-5 w-5 text-terracotta" />,
    title: "Rest Your Meats",
    description: "Let meats rest after cooking to redistribute juices for more tender and flavorful results."
  }
];

const CookingTips = () => {
  return (
    <section className="py-12 md:py-24 bg-sage/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Cooking Tips</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Master these fundamental tips to improve your cooking immediately, no matter what recipe you're making.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tipItems.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild>
            <Link to="/tips">
              View All Cooking Tips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CookingTips;
