import React from "react";
import Image from "next/image";
import VectorCombined from "./VectorCombined";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Graphic from "./Graphic";

const VectorCard = ({
  width,
  height,
  image,
  title,
  color,
  bgColor,
  position = "bottom-right",
}) => {
  const isTopLeft = position === "top-left";

  return (
    <div className={`${width} ${height} rounded-xl overflow-hidden relative `}>
      <Image alt={title} src={image} fill className="object-cover" />

      <div className="absolute right-0 bottom-0 z-20 ">
        <div
          style={{ backgroundColor: bgColor }}
          className={`  relative ${
            isTopLeft ? "rounded-br-[18px]" : "rounded-tl-[30px]"
          }`}
        >
          <div className={`px-4 pt-3 pb-6  ${isTopLeft ? "pb-3" : "pt-4"}  `}>
            {title ? (
              <p className="title-medium font-roboto font-light ">{title}</p>
            ) : (
              <Button
                size="icon"
                variant="outline"
                className={`bg-red-500 bg-bg-section-primary rounded-full w-15 h-15 border-none  `}
              >
                <ArrowUpRight className="text-white w-8 h-8 " />
              </Button>
            )}
          </div>

          <div
            className={`  absolute size-5  ${
              isTopLeft
                ? "top-0 -right-4.5"
                : "-bottom-[0.25px] -left-[18.25px] rotate-180"
            }`}
          >
            <Graphic style={{ color: color }} />
          </div>

          <div
            className={`absolute size-4.5  ${
              isTopLeft ? "" : "-top-[17px] -right-[1.25px] rotate-180"
            }`}
          >
            <Graphic style={{ color: color }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorCard;
