
import { Search, ShoppingCart, User, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-flipkart-blue text-white text-xs">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span>Download App</span>
              <span>•</span>
              <span>24x7 Support</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Become a Seller</span>
              <span>•</span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-flipkart-blue text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="mr-8">
                <h1 className="text-xl font-bold italic">Flipkart</h1>
                <span className="text-xs text-yellow-400">Explore <span className="text-yellow-300">Plus</span></span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full pl-4 pr-12 py-3 text-black bg-white border-none focus:ring-2 focus:ring-blue-300 rounded-sm"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 h-full bg-flipkart-orange hover:bg-orange-600 text-white rounded-l-none rounded-r-sm px-6"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:bg-blue-700 flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span className="text-sm">Login</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
              
              <Button variant="ghost" className="text-white hover:bg-blue-700 text-sm">
                Become a Seller
              </Button>
              
              <Button variant="ghost" className="text-white hover:bg-blue-700 text-sm">
                More
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
              
              <div className="relative">
                <Button variant="ghost" className="text-white hover:bg-blue-700 flex items-center space-x-1">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-sm">Cart</span>
                </Button>
                <Badge className="absolute -top-2 -right-2 bg-flipkart-orange text-white text-xs">
                  0
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
