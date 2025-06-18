
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=400&fit=crop",
      alt: "Electronics Sale"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=400&fit=crop",
      alt: "Fashion Sale"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop",
      alt: "Home Appliances"
    }
  ];

  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        {/* Main Banner Carousel */}
        <div className="relative mb-6">
          <div className="aspect-[3/1] rounded-lg overflow-hidden">
            <img 
              src={banners[0].image}
              alt={banners[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Carousel Controls */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Top Offers", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop" },
            { name: "Mobiles & Tablets", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=200&fit=crop" },
            { name: "TVs & Appliances", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop" },
            { name: "Electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop" },
            { name: "Fashion", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop" },
            { name: "Beauty", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop" }
          ].map((category) => (
            <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
