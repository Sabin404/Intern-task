import React from "react";
import Image from "next/image";
import candle from "@/images/explore-images/candles.jpg";
import meditation from "@/images/explore-images/meditation.jpg";
import singing from "@/images/explore-images/singing.jpg";
import yogablocks from "@/images/explore-images/yogablocks.jpg";
import yogamats from "@/images/explore-images/yogamats.jpg";
import Overlay from "./Overlay";
import CardContent from "./CardContent";

const Explore = () => {
  return (
    <section className="lg:py-16 py-10">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between mb-6 lg:mb-12 lg:gap-4 gap-3">
          <h2 className="text-[22px] lg:text-[45px] font-semibold text-text-primary-hero font-robotoslab">
            Explore Yoga Essentials
          </h2>
          <p className="max-w-xl text-[16px] hidden lg:block lg:text-[22px] text-text-secondary-muted font-roboto">
            Everything you need to support your yoga and meditation practice,
            from daily movement to mindful moments.
          </p>
          <p className="max-w-xl text-[16px] lg:hidden text-text-secondary-muted font-roboto">
            Everything you need to support your yoga and meditation practice.
          </p>
        </div>

        {/* Desktop layout  */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-6">
            <CardContent image={yogamats} title="Yoga Mats" />
            <CardContent image={yogablocks} title="Yoga Blocks & Straps" />
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden group hover:cursor-pointer">
            <Image
              src={meditation}
              alt="Meditation Cushions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <Overlay title="Meditation Cushions" />
          </div>
          <div className="flex flex-col gap-6">
            <CardContent image={singing} title="Singing Bowls & Bells" />
            <CardContent image={candle} title="Incense & Candles" />
          </div>
        </div>

        {/* Mobile layout*/}
        <div className="lg:hidden grid grid-cols-2 gap-3 ">
          {/* Top row  */}
          <CardContent image={yogamats} title="Yoga Mats" height="h-[110px]" />
          <CardContent
            image={yogablocks}
            title="Yoga Blocks"
            height="h-[110px]"
            width="w-full"
          />

          {/* Middle row */}
          <div className="col-span-2">
            <CardContent
              image={meditation}
              title="Meditation Cushion"
              height="h-[160px]"
              width="w-full"
            />
          </div>

          {/* Bottom row */}
          <CardContent
            image={candle}
            title="Incense & Candles"
            height="h-[110px]"
            width="w-full"
          />
          <CardContent image={singing} title="Yoga Blocks" height="h-[110px]" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
