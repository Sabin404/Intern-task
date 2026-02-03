import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

type JourneyCardProps = {
  title: string;
  description: string;
  img: StaticImageData;
};

const JourneyCard= ({ title, description, img }:JourneyCardProps) => {
  return (
    <Card className="relative w-auto h-74.25 rounded-2xl overflow-hidden bg-border-muted/20 border border-border-muted text-white">
      <div className="flex justify-between px-6 ">
        <h3 className="headline-small  font-semibold  font-robotoslab ">
          {title}
        </h3>
        <Image src={img} alt={title} width={120} height={120} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-bg-section-primary flex items-center px-4">
        <p className="body-large text-white font-roboto">{description}</p>
      </div>
    </Card>
  );
};

export default JourneyCard;
