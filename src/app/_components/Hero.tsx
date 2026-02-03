import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImage from "@/images/home.jpg";
import pattern from "@/images/pattern.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <main className="bg-bg-button-primary/5 overflow-hidden">
      <section className="relative container mx-auto  py-16 flex flex-col-reverse md:flex-row items-center gap-12 ">
        <Image
          src={pattern}
          width={481}
          height={433}
          alt="Pattern"
          className=" absolute -top-2 -left-55 -z-10 "
        />

        <div className="flex-1  flex-col">
          <p className="text-lg font-roboto flex items-center gap-2 bg-white w-fit px-6 py-3 rounded-full text-text-primary-hero font-medium">
            Beginner-friendly
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            Short sessions
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            Practice at home
          </p>

          <h1 className="display-lg  font-robotoslab font-bold text-text-primary-hero leading-tight mt-4">
            A Gentle Start to <br /> Yoga & Meditation
          </h1>

          <p className="text-gray-600 title-large max-w-xl mt-4 mb-6 font-roboto">
            Gentle yoga and meditation for beginners and busy days. Learn and
            practice at your own pace.
          </p>

          <div className="flex flex-wrap gap-6">
            <Button
              variant="default"
              className="bg-bg-button-primary border border-bg-button-primary text-white title-medium px-6 py-6 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-bg-button-primary/90 h-14 hover:cursor-pointer"
            >
              Start Practicing <ArrowRight size={18} />
            </Button>

            <Button
              variant="default"
              className="border border-bg-button-primary text-gray-800 title-medium  py-6 px-6 rounded-lg  hover:bg-bg-button-primary/10 flex items-center  justify-center gap-2 h-14 hover:cursor-pointer"
            >
              Explore Categories <ArrowRight size={18} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Beginner Yoga",
              "Meditation",
              "Breathing",
              "Stress Relief",
              "Flexibility",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 rounded-[30px] bg-bg-primary-muted text-gray-700 body-large font-roboto "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-162.5 h-160.25 overflow-hidden rounded-2xl">
          <Image
            src={heroImage}
            alt="Yoga & Meditation"
            fill
            className="object-cover"
            style={{ objectPosition: "100% center" }}
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
