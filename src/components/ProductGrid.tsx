
import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: "1",
    name: "MacBook Air M2 13-inch Laptop",
    price: 99990,
    originalPrice: 119900,
    discount: 17,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    category: "Laptops"
  },
  {
    id: "2", 
    name: "iPhone 15 Pro Max 256GB",
    price: 159900,
    originalPrice: 179900,
    discount: 11,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    category: "Mobiles"
  },
  {
    id: "3",
    name: "Samsung 65-inch 4K Smart TV",
    price: 79990,
    originalPrice: 99990,
    discount: 20,
    rating: 4.3,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Women's Ethnic Kurta Set",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.2,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    category: "Fashion"
  },
  {
    id: "5",
    name: "Gaming Laptop RTX 4060",
    price: 89990,
    originalPrice: 109990,
    discount: 18,
    rating: 4.6,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
    category: "Gaming"
  },
  {
    id: "6",
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.4,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    category: "Audio"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <button className="text-flipkart-blue hover:underline font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
