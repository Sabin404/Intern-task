import React from "react";
import { ArrowRight, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import VectorCard from "./Card/VectorCard";
import yog from "@/images/explore-images/yog.png";
import Image from "next/image";

const Practice = () => {
  return (
    <section className="w-full py-12 bg-section-secondary pt-20 ">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="display-medium font-robotoslab font-semibold text-text-primary-hero">
            Gentle Yoga for Everyday Practice
          </h2>
          <p className="max-w-4xl mt-2 text-lg md:text-xl font-robotoslab text-title-large">
            Discover simple yoga videos designed for beginners and busy days.
            Move mindfully, build flexibility, and feel more balanced at your
            own pace.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-h-246.75 md:min-h-136.5 relative">
            {/* center content */}
            <div className="absolute inset-0 flex items-center z-10 justify-center  ">
              <div className="bg-white/60 rounded-full p-10">
                <PlayIcon className="w-6 h-7" fill="white" stroke="none" />
              </div>
            </div>

            <div
              className={`h-136.5 w-full lg:w-246.75 rounded-xl overflow-hidden relative   `}
            >
              <Image
                alt="Yoga"
                src={yog}
                fill
                className="object-cover yogo_curved bottom-right "
              />

              <div className="absolute right-3.25 bottom-5">
                <p className="title-medium font-roboto  p-2 rounded-3xl text-black ">
                  Short sessions • Beginner-friendly • No pressure
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Card */}
          <div className="  hidden lg:relative lg:flex flex-col gap-6 flex-1 p-4 text-white headline-medium min-h-75 md:min-h-136.5">
            <svg
              viewBox="0 0 509 546"
              preserveAspectRatio="none"
              className="absolute inset-0 z-0 w-full h-full"
            >
              <path
                d="M380.364 91.9199C380.364 105.175 391.109 115.92 404.364 115.92H485C498.255 115.92 509 126.665 509 139.92V522C509 535.255 498.255 546 485 546H24C10.7452 546 0 535.255 0 522V24C0 10.7452 10.7452 0 24 0H356.364C369.619 0 380.364 10.7452 380.364 24V91.9199Z"
                fill="#A38C61"
              />
            </svg>

            <div className="relative z-10 flex flex-col h-full py-4 px-2.5">
              <h3 className="title-large font-roboto font-semibold">
                Yoga made simple and
                <span className="block"> accessible.</span>
              </h3>

              <p className="headline-medium font-robotoslab text-text-secondary my-auto py-4">
                Explore guided yoga sessions that help you move gently, improve
                flexibility, and feel more at ease — no experience needed.
              </p>

              <Button className="body-large font-roboto gap-2 bg-bg-button-primary text-white px-4 py-3 hover:cursor-pointer">
                View all yoga
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;
