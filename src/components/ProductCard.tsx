
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";

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
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  reviews, 
  image, 
  category 
}: ProductCardProps) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer group border border-gray-200">
      <CardContent className="p-0">
        {/* Wishlist Button */}
        <div className="relative">
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
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
            <Badge className="absolute bottom-2 left-2 bg-green-600 text-white text-xs">
              {discount}% off
            </Badge>
          )}
        </div>

        <div className="p-4">
          {/* Product Name */}
          <h3 className="font-medium text-sm mb-2 line-clamp-2 text-gray-800 min-h-[2.5rem]">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs">
              <span className="mr-1">{rating}</span>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-gray-500 ml-2">({reviews.toLocaleString()})</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</span>
            {originalPrice > price && (
              <>
                <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
                <span className="text-sm text-green-600 font-medium">{discount}% off</span>
              </>
            )}
          </div>

          {/* Free Delivery */}
          <div className="text-xs text-green-600 mb-3">Free delivery</div>

          {/* Category */}
          <div className="text-xs text-gray-500 mb-3">{category}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
