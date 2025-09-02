import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../constant/index";



export default function ProductDetails() {
  const { slug } = useParams();

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  // Find product by slug
  const product = products.find((p) => slugify(p.name) === slug);

  // Handle state for size and quantity
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mt-20 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="overflow-hidden group">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-[300px] md:h-[400px] object-contain transform transition-transform 
            duration-300 group-hover:scale-150 cursor-zoom-in"
          />
        </div>

        {/* Product Details */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-3">
            Home / {product.category}
          </p>

          <h1 className="text-2xl font-serif italic font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-gray-500 mb-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-gray-500 font-medium mb-3">
            Crafted from soft, breathable fabrics, the relaxed fit provides a
            carefree silhouette. Perfect for casual or office wear.
          </p>

          {/* Sizes */}
          {product.sizes?.length > 0 && (
            <div className="mt-4 flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="mt-6 border-t pt-4"></div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border">
              <button
                className="px-3 py-1 text-lg"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 text-lg"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <Link
              to="/"
              className="w-[50%] md:w-[25%] text-center bg-transparent border text-black
               hover:text-white py-3 hover:bg-gradient-to-r from-cyan-700 via-cyan-400 to-purple-600 transition"
            >
              ADD TO CART
            </Link>
          </div>

         
        </div>
      </div>

     
    </>
  );
}
