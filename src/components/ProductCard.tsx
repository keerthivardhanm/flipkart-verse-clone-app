
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  deliveryDate?: string;
  assured?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  reviews, 
  image, 
  category,
  deliveryDate = "Tomorrow",
  assured = false
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer group border border-gray-200 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Wishlist Button */}
        <div className="relative">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white rounded-full p-2"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          
          {/* Product Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Discount Badge */}
          {discount > 0 && (
            <Badge className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-1">
              {discount}% off
            </Badge>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          {/* Product Name */}
          <h3 className="font-medium text-sm mb-2 line-clamp-2 text-gray-800 min-h-[2.5rem] flex-shrink-0">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2 flex-shrink-0">
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs">
              <span className="mr-1">{rating}</span>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-gray-500 ml-2">({reviews.toLocaleString()})</span>
            {assured && (
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCA1MCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjE0IiByeD0iNyIgZmlsbD0iIzI4NzRGMCIvPgo8dGV4dCB4PSI1IiB5PSIxMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+QVNTVVJFRDwvdGV4dD4KPHN2Zz4K"
                alt="Flipkart Assured"
                className="ml-2 h-3"
              />
            )}
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-2 flex-shrink-0">
            <span className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</span>
            {originalPrice > price && (
              <>
                <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
                <span className="text-sm text-green-600 font-medium">{discount}% off</span>
              </>
            )}
          </div>

          {/* Delivery Info */}
          <div className="text-xs text-gray-600 mb-2 flex-shrink-0">
            Free delivery by {deliveryDate}
          </div>

          {/* Category */}
          <div className="text-xs text-gray-500 mt-auto">{category}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
