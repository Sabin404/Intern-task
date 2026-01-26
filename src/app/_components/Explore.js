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
    <section className="container mx-auto py-16 ">
      <div className="flex flex-col md:flex-row justify-between  mb-12">
        <h2 className="display-medium font-semibold text-text-primary-hero font-robotoslab">
          Explore Yoga Essentials
        </h2>

        <p className="max-w-xl title-large text-text-secondary-muted">
          Everything you need to support your yoga and meditation practice, from
          daily movement to mindful moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col gap-6 ">
          <CardContent image={yogamats} title="Yoga Mats" />
          <CardContent image={yogablocks} title="Yoga Blocks & Straps" />
        </div>

        <div className="relative h-125 rounded-2xl overflow-hidden">
          <Image
            src={meditation}
            alt="Meditation Cushions"
            fill
            className="object-cover"
          />
          <Overlay title="Meditation Cushions" />
        </div>

        <div className="flex flex-col gap-6">
          <CardContent image={singing} title="Singing Bowls & Bells" />
          <CardContent image={candle} title="Incense & Candles" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
