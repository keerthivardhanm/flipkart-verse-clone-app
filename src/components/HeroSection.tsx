
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="bg-flipkart-lightblue py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Banner */}
          <Card className="md:col-span-2 overflow-hidden group hover-scale">
            <CardContent className="p-0">
              <div className="flipkart-gradient p-8 text-white relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Big Billion Days
                    </h2>
                    <p className="text-lg mb-6">
                      Unbelievable deals on top brands
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-flipkart-blue hover:bg-gray-100"
                    >
                      Shop Now
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                      alt="Shopping" 
                      className="w-64 h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Offers */}
          <div className="space-y-4">
            <Card className="hover-scale">
              <CardContent className="p-4">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" 
                  alt="Laptops" 
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h3 className="font-semibold mb-2">Laptops</h3>
                <p className="text-sm text-gray-600 mb-3">Up to 40% off</p>
                <Button size="sm" variant="outline">
                  Explore
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="p-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" 
                  alt="Fashion" 
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h3 className="font-semibold mb-2">Fashion</h3>
                <p className="text-sm text-gray-600 mb-3">Min 50% off</p>
                <Button size="sm" variant="outline">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
