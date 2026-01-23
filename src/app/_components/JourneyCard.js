import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const JourneyCard = ({ title, description, img }) => {
  return (
    <Card className="relative w-122.5 h-74.25 rounded-2xl overflow-hidden bg-[#8FA694] border border-boxborder text-white">
      <div className="flex justify-between px-6 ">
        <h3 className="text-xl font-semibold whitespace-pre-line ">{title}</h3>
        <Image src={img} alt={title} width={120} height={120} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#6F8F7A] flex items-center px-4">
        <p className="text-base text-white">{description}</p>
      </div>
    </Card>
  );
};

export default JourneyCard;
