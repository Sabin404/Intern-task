import React from "react";
import image1 from "@/images/meditation/image1.jpg";
import image2 from "@/images/meditation/image2.jpg";
import image3 from "@/images/meditation/image3.jpg";
import Image from "next/image";
import VectorCard from "./Card/VectorCard";
import VectorCombined from "./Card/VectorCombined";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Sleep = () => {
  const items = [
    {
      id: 1,
      title: "Deep Relaxation",
      desc: "Release tension from your body and calm your mind with a soothing, slow-paced meditation.",
      image: image1,
    },
    {
      id: 2,
      title: "Deep Relaxation",
      desc: "Release tension from your body and calm your mind with a soothing, slow-paced meditation.",
      image: image2,
    },
    {
      id: 3,
      title: "Sleep Meditation",
      desc: "Unwind before bed and prepare your body and mind for deeper, more restful sleep.",
      image: image3,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="display-medium text-text-primary-hero font-roboto">
            Meditation for calm & better sleep
          </h1>
          <p className="title-large max-w-3xl text-center">
            Slow down with guided meditation practices designed to help you
            relax, breathe deeply, and find moments of peace throughout your
            day.
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="flex gap-4 justify-center mt-12 flex-wrap">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-124 h-106.25 relative overflow-hidden rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover section_curved bottom-right"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/90 section_curved bottom-right" />

            {/* arrow button */}
            <div className="absolute right-4 bottom-3.75">
              <Button
                size="icon"
                className="bg-bg-button-primary rounded-full w-18 h-18 border-none"
              >
                <ArrowUpRight className="text-white scale-150" />
              </Button>
            </div>

            {/* text */}
            <div className="absolute bottom-8 left-8 right-8 max-w-67.75">
              <h2 className="headline-medium font-roboto font-semibold text-white">
                {item.title}
              </h2>
              <p className="body-large font-robotoslab text-white mt-2 line-clamp-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-15">
        <Button className="rounded font-roboto title-medium px-6 py-5 gap-2 text-white bg-bg-button-primary">
          Start Your Journey
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Sleep;
