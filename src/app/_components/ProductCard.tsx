import { Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ProductCardProps = {
  title: string;
  image: StaticImageData;
  desc: string;
  price: number | string;
  newArrival?: boolean;
  sale?: boolean;
  bestSeller?: boolean;
};

const ProductCard = ({
  title,
  image,
  desc,
  price,
  newArrival,
  sale,
  bestSeller,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden relative">
      <button className="absolute top-3 right-3 lg:top-5 lg:right-5 z-10 flex items-center justify-center shrink-0 lg:w-7 lg:h-7 w-5 h-5 bg-gray-200 bg-opacity-50 rounded-[15px] px-1.5 py-1.25">
        <Heart className="lg:w-3.5 lg:h-3 w-2.75 h-2.5 text-black" />
      </button>
      <div className="absolute left-3 top-3 lg:left-5 lg:top-5 z-10 flex flex-col gap-2">
        {newArrival && (
          <span className="bg-white text-bg-button-primary text-[11px] lg:text-[14px] py-1 px-2 lg:px-3 rounded-[15px] border border-[#62826b] font-roboto">
            New
          </span>
        )}
        {bestSeller && (
          <span className="bg-bg-section-primary text-white text-[11px] lg:text-[14px] py-1 px-2 lg:px-3 rounded-[15px] border border-[#62826b] font-roboto">
            Best Seller
          </span>
        )}
        {sale && (
          <span className="bg-[#DD2D27] text-white text-[11px] lg:text-[14px] py-1 px-2 lg:px-3 rounded-[15px] font-roboto">
            Sale
          </span>
        )}
      </div>
      <div className="relative w-[173px] h-[135px]  lg:h-[261px] lg:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 lg:p-4 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-[12px] lg:text-[18px] font-semibold font-roboto mb-1">
            {title}
          </h3>
          <p className="text-[11px] lg:text-[14px] font-roboto text-gray-600 mb-2">
            {desc}
          </p>
        </div>
        <div className="text-[14px] lg:text-[18px] text-bg-button-primary font-bold font-roboto">
          NPR {price}/-
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
