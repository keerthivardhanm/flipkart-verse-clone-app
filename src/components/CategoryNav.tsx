
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    subcategories: ["Mobile", "Laptop", "Desktop", "Camera", "Gaming"]
  },
  {
    name: "TVs & Appliances", 
    icon: "📺",
    subcategories: ["Television", "Washing Machine", "Air Conditioners", "Refrigerators", "Kitchen Appliances"]
  },
  {
    name: "Men",
    icon: "👔",
    subcategories: ["Clothing", "Footwear", "Watches", "Bags", "Sunglasses"]
  },
  {
    name: "Women",
    icon: "👗", 
    subcategories: ["Clothing", "Footwear", "Watches", "Bags", "Jewellery"]
  },
  {
    name: "Baby & Kids",
    icon: "🧸",
    subcategories: ["Toys", "Baby Care", "Kids Clothing", "School Supplies", "Baby Gear"]
  },
  {
    name: "Home & Furniture",
    icon: "🏠",
    subcategories: ["Home Decor", "Furniture", "Kitchen", "Garden", "Tools"]
  },
  {
    name: "Sports, Books & More",
    icon: "📚",
    subcategories: ["Sports", "Books", "Music", "Movies", "Automotive"]
  },
  {
    name: "Flights",
    icon: "✈️",
    subcategories: []
  },
  {
    name: "Offer Zone",
    icon: "🎯",
    subcategories: []
  }
];

const CategoryNav = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-0">
          {categories.map((category, index) => (
            <div key={category.name} className="group relative">
              <Button
                variant="ghost"
                className="text-gray-800 hover:text-flipkart-blue hover:bg-gray-50 whitespace-nowrap flex items-center space-x-2 py-4 px-4 rounded-none border-b-2 border-transparent hover:border-flipkart-blue transition-colors"
              >
                <span className="text-base">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <ChevronDown className="h-3 w-3" />
                )}
              </Button>
              
              {/* Dropdown Menu */}
              {category.subcategories.length > 0 && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl border rounded-sm py-4 min-w-64 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-flipkart-blue transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
