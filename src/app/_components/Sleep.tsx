import React from "react";
import image1 from "@/images/meditation/image1.jpg";
import image2 from "@/images/meditation/image2.jpg";
import image3 from "@/images/meditation/image3.jpg";
import Image from "next/image";
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
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-start gap-3 max-w-full lg:max-w-[900px]">
          <h1 className="lg:text-[45px] text-[22px] font-semibold text-text-primary-hero font-roboto text-start">
            Meditation for calm & better sleep
          </h1>
          <p className="text-[16px] lg:text-[22px] font-normal text-start">
            Slow down with guided meditation practices designed to help you
            relax, breathe deeply.
          </p>
        </div>
      </div>

      {/* Desktop cards - unchanged */}
      <div className="hidden lg:flex gap-4 justify-center mt-12 flex-wrap px-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[496px] h-[425px] relative overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover section_curved bottom-right"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 section_curved bottom-right" />
            {/* arrow button */}
            <div className="absolute right-4 bottom-4">
              <Button className="bg-bg-button-primary rounded-full w-[72px] h-[72px] border-none hover:cursor-pointer hover:bg-bg-button-primary/90">
                <ArrowUpRight className="text-white w-6 h-6" />
              </Button>
            </div>
            {/* text */}
            <div className="absolute bottom-8 left-8 right-8 max-w-[271px]">
              <h2 className="text-[28px] font-roboto font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-[18px] font-robotoslab text-white mt-2 line-clamp-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile cards  */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide mt-12">
        <div className="flex gap-4 px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-85 h-80 relative overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover section_curved_mobile bottom-right"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black section_curved_mobile bottom-right" />
              {/* arrow button */}
              <div className="absolute right-4 bottom-4">
                <Button className="bg-bg-button-primary rounded-full w-14 h-14 border-none hover:cursor-pointer hover:bg-bg-button-primary/90">
                  <ArrowUpRight className="text-white w-6 h-6" />
                </Button>
              </div>
              {/* text */}
              <div className="absolute bottom-5 left-6 right-6">
                <h2 className="text-[18px] font-roboto font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-[14px] font-robotoslab text-white mt-2 line-clamp-1">
                  {item.desc.split(" ").slice(0, 4).join(" ")}...
                </p>
              </div>
            </div>
          ))}
          <div className="shrink-0 p-1" />
        </div>
      </div>

      <div className=" hidden lg:flex justify-center mt-10 px-4 lg:px-0">
        <Button className="rounded-lg font-roboto text-[16px] font-normal py-5 px-6 gap-2 bg-bg-button-primary hover:cursor-pointer h-14">
          Start Your Journey
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Sleep;
