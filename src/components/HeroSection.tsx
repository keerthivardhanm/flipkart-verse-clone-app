
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop", // Electronics banner
      alt: "Electronics Sale",
      title: "Electronics Sale",
      subtitle: "Up to 80% off"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop", // Fashion banner
      alt: "Fashion Sale",
      title: "Fashion Sale",
      subtitle: "Min 50% off"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop", // Home appliances banner
      alt: "Home Appliances",
      title: "Home Appliances",
      subtitle: "Starting ₹1,999"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        {/* Main Banner Carousel */}
        <div className="relative mb-6">
          <div className="aspect-[3/1] rounded-lg overflow-hidden">
            <img 
              src={banners[currentSlide].image}
              alt={banners[currentSlide].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-2">{banners[currentSlide].title}</h2>
                <p className="text-xl">{banners[currentSlide].subtitle}</p>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {[
            { name: "Top Offers", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=200&h=200&fit=crop", offer: "Up to 80% Off" },
            { name: "Mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop", offer: "From ₹7,999" },
            { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop", offer: "Min 40% Off" },
            { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop", offer: "From ₹199" },
            { name: "Home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop", offer: "From ₹99" },
            { name: "Appliances", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", offer: "From ₹1,999" },
            { name: "Travel", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=200&fit=crop", offer: "Up to 50% Off" },
            { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop", offer: "From ₹99" },
            { name: "Sports", image: "https://images.unsplash.com/photo-1571019613540-996a9d8e5fb1?w=200&h=200&fit=crop", offer: "From ₹149" },
            { name: "Toys", image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop", offer: "From ₹79" }
          ].map((category) => (
            <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-3 text-center">
                <div className="aspect-square mb-2 overflow-hidden rounded-lg">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs font-medium text-gray-800 mb-1">{category.name}</h3>
                <p className="text-xs text-green-600 font-medium">{category.offer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
