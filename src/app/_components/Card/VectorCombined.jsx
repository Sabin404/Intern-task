import Link from "next/link";
import Graphic from "./Graphic";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const VectorCombined = ({
  color,
  title,
  position = "bottom-right",
  bgColor,
}) => {
  const isTopLeft = position === "top-left";

  return (
    <div
      className={`  relative ${
        isTopLeft ? "rounded-br-[18px]" : "rounded-tl-[22px]"
      }`}
    >
      <div className={`px-4 pt-3 pb-2 ${isTopLeft ? "pb-3" : "pt-6"} `}>
        {title ? (
          <p className="title-medium font-roboto font-light ">{title}</p>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className={`bg-${color} rounded-full w-15 h-15 border-none  `}
          >
            <ArrowUpRight className="text-white w-8 h-8 " />
          </Button>
        )}
      </div>

      <div
        className={`absolute size-5  ${
          isTopLeft ? "top-0 -right-4.5" : "bottom-0 -left-4.75 rotate-180"
        }`}
      >
        <Graphic style={{ color: bgColor }} />
      </div>

      <div
        className={`absolute size-4.5  ${
          isTopLeft ? "" : "-top-4.5 right-0 rotate-180"
        }`}
      >
        <Graphic style={{ color: bgColor }} />
      </div>
    </div>
  );
};

export default VectorCombined;
