import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../constant/index";

// Helper function for slug
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const productSlug = slugify(product.name);

  return (
    <div
      className="font-sans max-w-sm min-h-[200px] w-[95%] 
      py-6 px-2 sm:py-8 sm:px-12 md:py-10 md:px-20 
      bg-white overflow-hidden group rounded-lg
      shadow hover:shadow-lg transition"
    >
      {/* Image with link */}
      <div className="relative">
        <Link to={`/products/${productSlug}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-32 sm:h-36 md:h-40 object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Details */}
      <div className="p-3 text-center">
        <p className="text-gray-400 text-xs md:text-sm">{product.category}</p>
        <h3 className="text-sm md:text-base font-serif text-gray-600 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-bold mb-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Sizes */}
        <div className="flex justify-center items-center space-x-2 mb-2 md:mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm 
                font-medium border transition-colors
                ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Grid Component
export default function ProductGrid() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
      gap-4 sm:gap-6 p-4 sm:p-6"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
