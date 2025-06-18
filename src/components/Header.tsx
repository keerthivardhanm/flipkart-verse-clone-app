
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-flipkart-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Flipkart</h1>
            <span className="text-xs italic">Explore Plus</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 py-2 text-black bg-white border-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-flipkart-orange hover:bg-orange-600 text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-blue-700">
              Login
            </Button>
            
            <Button variant="ghost" className="text-white hover:bg-blue-700">
              Become a Seller
            </Button>
            
            <div className="relative">
              <Button variant="ghost" className="text-white hover:bg-blue-700 flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Button>
              <Badge className="absolute -top-2 -right-2 bg-flipkart-orange text-white">
                3
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
