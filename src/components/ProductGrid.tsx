
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const sampleProducts = [
  {
    id: "1",
    name: "Apple iPhone 15 (Blue, 128 GB)",
    price: 79900,
    originalPrice: 89900,
    discount: 11,
    rating: 4.6,
    reviews: 47829,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    category: "Apple",
    assured: true
  },
  {
    id: "2", 
    name: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)",
    price: 129999,
    originalPrice: 149999,
    discount: 13,
    rating: 4.4,
    reviews: 12453,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    category: "Samsung",
    assured: true
  },
  {
    id: "3",
    name: "OnePlus 12R 5G (Cool Blue, 256 GB) (12 GB RAM)",
    price: 42999,
    originalPrice: 49999,
    discount: 14,
    rating: 4.3,
    reviews: 8921,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    category: "OnePlus"
  },
  {
    id: "4",
    name: "ASUS Vivobook 15 Core i3 12th Gen - (8 GB/512 GB SSD/Windows 11 Home)",
    price: 34990,
    originalPrice: 49990,
    discount: 30,
    rating: 4.2,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    category: "ASUS",
    assured: true
  },
  {
    id: "5",
    name: "HP Laptop 15s, AMD Ryzen 5 5500U, 15.6-inch(39.6 cm), FHD, 16GB DDR4, 512GB SSD",
    price: 42990,
    originalPrice: 59990,
    discount: 28,
    rating: 4.1,
    reviews: 2876,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    category: "HP"
  },
  {
    id: "6",
    name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds",
    price: 1299,
    originalPrice: 2990,
    discount: 57,
    rating: 4.0,
    reviews: 156789,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    category: "boAt"
  },
  {
    id: "7",
    name: "Sony WH-CH720N Active Noise Canceling Wireless Headphones",
    price: 8990,
    originalPrice: 14990,
    discount: 40,
    rating: 4.3,
    reviews: 5634,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    category: "Sony",
    assured: true
  },
  {
    id: "8",
    name: "Samsung 43 inch Crystal 4K Neo Series Ultra HD Smart LED TV",
    price: 32990,
    originalPrice: 54900,
    discount: 40,
    rating: 4.2,
    reviews: 12387,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    category: "Samsung"
  }
];

const ProductSection = ({ title, products, viewAllAction }: { title: string, products: typeof sampleProducts, viewAllAction?: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-sm mb-4">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <Button 
            onClick={viewAllAction}
            className="bg-flipkart-blue text-white px-6 py-2 rounded text-sm hover:bg-blue-700"
          >
            VIEW ALL
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 p-6 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

const ProductGrid = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <ProductSection 
            title="Best of Electronics" 
            products={sampleProducts.slice(0, 6)}
            viewAllAction={() => console.log('View all electronics')}
          />
          
          <ProductSection 
            title="Beauty, Food, Toys & more" 
            products={sampleProducts.slice(2, 8)}
            viewAllAction={() => console.log('View all beauty products')}
          />
          
          <ProductSection 
            title="Sports, Healthcare & more" 
            products={sampleProducts.slice(1, 7)}
            viewAllAction={() => console.log('View all sports products')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
