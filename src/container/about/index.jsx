import React from "react";
import  ProductCard  from "../../component/common/card";

export default function About() {
  return (
    <div className="relative h-screen md:py-10 md:px-15 bg-white">
      <h2 className="text-2xl md:text-4xl underline italic font-bold text-center mt-6 md:mt-3 font-serif mb-6">Our Products</h2>
      < ProductCard />
    </div>
  );
}
