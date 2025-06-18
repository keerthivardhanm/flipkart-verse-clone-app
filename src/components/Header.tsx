
import { Search, ShoppingCart, User, ChevronDown, MapPin, Store } from "lucide-react";
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
              <span className="hover:underline cursor-pointer">Download App</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Newsletter</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hover:underline cursor-pointer">24x7 Support</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Sell on Flipkart</span>
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
                <div className="flex items-center">
                  <span className="text-xs text-yellow-400">Explore</span>
                  <span className="text-xs text-yellow-300 ml-1">Plus</span>
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Plus" className="ml-1 h-2.5" />
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full pl-4 pr-12 py-3 text-black bg-white border-none focus:ring-2 focus:ring-blue-300 rounded-sm text-sm"
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
              <div className="relative group">
                <Button variant="ghost" className="text-white hover:bg-blue-700 flex items-center space-x-1 px-3 py-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Login</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                {/* Login Dropdown */}
                <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg border rounded-sm py-3 min-w-60 z-50 text-gray-700">
                  <div className="px-4 pb-3">
                    <p className="text-lg font-medium mb-1">New customer?</p>
                    <p className="text-sm text-blue-600 cursor-pointer hover:underline">Start here.</p>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="py-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                      <User className="h-4 w-4 mr-3" />
                      My Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                      <ShoppingCart className="h-4 w-4 mr-3" />
                      Orders
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                      <Store className="h-4 w-4 mr-3" />
                      Wishlist
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <Button variant="ghost" className="text-white hover:bg-blue-700 text-sm px-3 py-2">
                  Become a Seller
                </Button>
              </div>
              
              <div className="relative group">
                <Button variant="ghost" className="text-white hover:bg-blue-700 text-sm flex items-center px-3 py-2">
                  More
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
                {/* More Dropdown */}
                <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg border rounded-sm py-2 min-w-48 z-50 text-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Notification Preferences</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Sell on Flipkart</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">24x7 Customer Care</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Advertise</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Download App</a>
                </div>
              </div>
              
              <div className="relative">
                <Button variant="ghost" className="text-white hover:bg-blue-700 flex items-center space-x-1 px-3 py-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-sm">Cart</span>
                </Button>
                <Badge className="absolute -top-2 -right-2 bg-flipkart-orange text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
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
