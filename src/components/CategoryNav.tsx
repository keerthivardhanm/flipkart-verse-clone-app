
import { Button } from "@/components/ui/button";

const categories = [
  "Electronics",
  "Fashion", 
  "Home & Kitchen",
  "Sports",
  "Books",
  "Toys",
  "Beauty",
  "Grocery",
  "Mobiles",
  "Appliances"
];

const CategoryNav = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center space-x-1 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-gray-700 hover:text-flipkart-blue hover:bg-gray-100 whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
