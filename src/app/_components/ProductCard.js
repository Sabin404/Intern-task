import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ title, image, desc, price }) => {
  return (
    <div className="flex flex-col border rounded-xl overflow-hidden relative">
      <button className="absolute top-5 right-5 z-10 bg-gray-200 bg-opacity-50 rounded-full p-2 ">
        <Heart className="w-4 h-4 text-black" />
      </button>

      <div className="relative w-full aspect-[92/65.25]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="title-medium font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{desc}</p>
        </div>
        <div className="text-[18px] text-bg-button-primary font-bold">
          NPR {price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
