import React from "react";
import yog from "@/images/explore-images/yog.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Practice = () => {
  return (
    <section className="w-full  py-12 bg-section-secondary pt-20 ">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:text-left ">
          <h2 className="display-medium font-robotoslab font-semibold text-text-primary-hero">
            Gentle Yoga for Everyday Practice
          </h2>
          <p className="max-w-4xl mt-2 text-lg md:text-xl font-robotoslab text-title-large">
            Discover simple yoga videos designed for beginners and busy days.
            Move mindfully, build flexibility, and feel more balanced at your
            own pace.
          </p>
        </div>

        <div className="flex flex-row gap-6 ">
          <div className="relative  w-246.75 h-136.5 ">
            <Image
              src={yog}
              alt="Yoga practice"
              fill
              className="object-cover rounded-4xl"
            />
            <p className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">
              Short sessions • Beginner-friendly • No pressure
            </p>
          </div>

          <div className="flex  flex-1 w-127.25 h-136.5 bg-gray-700 rounded-xl p-10 headline-medium  flex-col text-white">
            <h3 className="text-lg font-semibold title-large font-roboto max-w-73.5">
              Yoga made simple and accessible.
            </h3>

            <p className="flex-1  flex items-center my-4 font-robotoslab">
              Explore guided yoga sessions that help you move gently, improve
              flexibility, and feel more at ease — no experience needed.
            </p>

            <Button variant="outline" className=" text-black body-large">
              View all yoga <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;
