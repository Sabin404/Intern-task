import React from "react";
import Image from "next/image";
import VectorCombined from "./VectorCombined";

const VectorCard = () => {
  return (
    <div className="w-246.75 h-136.5 rounded-xl overflow-hidden relative">
      <Image alt="Yoga practice" src="/yog.png" fill className="object-cover" />

      <div className="absolute right-0 bottom-0">
        <VectorCombined title="Short sessions • Beginner-friendly • No pressure" />
      </div>
    </div>
  );
};

export default VectorCard;
