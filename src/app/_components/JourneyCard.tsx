import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

type JourneyCardProps = {
  title: string;
  description: string;
  img: StaticImageData;
};

const JourneyCard = ({ title, description, img }: JourneyCardProps) => {
  return (
    <Card className="relative flex flex-col w-[340px] h-[172px] lg:w-auto lg:h-74.25 rounded-2xl overflow-hidden bg-border-muted/20 border border-border-muted text-white ">
      <div className="flex justify-between items-start px-4 lg:px-6 pt-4 lg:pt-6">
        <h3 className="text-[16px] lg:text-[28px] font-semibold font-robotoslab lg:whitespace-normal whitespace-pre-line">
          {title}
        </h3>
        <Image
          src={img}
          alt={title}
          width={60}
          height={60}
          className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] flex-shrink-0"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 lg:h-20 bg-bg-section-primary flex items-center px-4">
        <p className="text-[14px] lg:text-[18px] text-white font-roboto">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default JourneyCard;
