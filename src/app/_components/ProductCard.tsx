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
    <div className="flex flex-col  rounded-3xl overflow-hidden relative">
      <button className="absolute top-5 right-5 z-10  flex items-center justify-center shrink-0 w-7 h-7 bg-gray-200 bg-opacity-50 rounded-[15px] px-1.5 py-1.25 ">
        <Heart className="w-3.5 h-3 text-black" />
      </button>
      <div className="absolute left-5 top-5 z-10 flex flex-col gap-2">
        {newArrival && (
          <span className="bg-white text-bg-button-primary  text-[14px] py-1 px-3 rounded-[15px] border border-[#62826b] font-roboto">
            New
          </span>
        )}

        {bestSeller && (
          <span className="bg-bg-section-primary text-white  text-[14px] py-1 px-3 rounded-[15px] border border-[#62826b] font-roboto">
            Best Seller
          </span>
        )}

        {sale && (
          <span className="bg-[#DD2D27] text-white text-[14px] py-1 px-3 rounded-[15px] font-roboto">
            Sale
          </span>
        )}
      </div>

      <div className="relative w-full aspect-[92/65.25]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col justify-between bg-white">
        <div>
          <h3 className="title-medium font-semibold font-roboto mb-1">{title}</h3>
          <p className="text-sm font-roboto text-gray-600 mb-2">{desc}</p>
        </div>
        <div className="text-[18px] text-bg-button-primary font-bold font-roboto ">
          NPR {price}/-
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
