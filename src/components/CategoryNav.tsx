
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    subcategories: ["Mobile", "Laptop", "Desktop", "Camera"]
  },
  {
    name: "TVs & Appliances", 
    icon: "📺",
    subcategories: ["Television", "Washing Machine", "Air Conditioners", "Refrigerators"]
  },
  {
    name: "Men",
    icon: "👔",
    subcategories: ["Clothing", "Footwear", "Watches", "Bags"]
  },
  {
    name: "Women",
    icon: "👗", 
    subcategories: ["Clothing", "Footwear", "Watches", "Bags"]
  },
  {
    name: "Baby & Kids",
    icon: "🧸",
    subcategories: ["Toys", "Baby Care", "Kids Clothing", "School Supplies"]
  },
  {
    name: "Home & Furniture",
    icon: "🏠",
    subcategories: ["Home Decor", "Furniture", "Kitchen", "Garden"]
  },
  {
    name: "Sports, Books & More",
    icon: "📚",
    subcategories: ["Sports", "Books", "Music", "Movies"]
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
        <div className="flex items-center space-x-8 overflow-x-auto py-2">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <Button
                variant="ghost"
                className="text-gray-800 hover:text-flipkart-blue hover:bg-gray-50 whitespace-nowrap flex items-center space-x-2 py-4 px-3"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <ChevronDown className="h-3 w-3" />
                )}
              </Button>
              
              {/* Dropdown Menu */}
              {category.subcategories.length > 0 && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border rounded-md py-2 min-w-48 z-50">
                  {category.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-flipkart-blue"
                    >
                      {sub}
                    </a>
                  ))}
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
