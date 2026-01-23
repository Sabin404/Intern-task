import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImage from "@/images/home.jpg";
import pattern from "@/images/pattern.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <main className="bg-btnbg/5  overflow-hidden py-1 ">
      <section className="relative container mx-auto  px-0 md:px-12 py-10 flex flex-col-reverse md:flex-row items-center gap-10">
        <Image
          src={pattern}
          width={481}
          height={433}
          alt="Pattern"
          className="absolute -top-20 -left-28 -z-10"
        />

        <div className="flex-1 flex flex-col  pl-4 md:pl-12">
          <p className="text-lg flex items-center gap-2 bg-white w-fit py-2 px-6 rounded-full text-herotext ">
            Beginner-friendly
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            Short sessions
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            Practice at home
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-sans text-herotext leading-tight">
            A Gentle Start to <br /> Yoga & Meditation
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mt-2 mb-6">
            Gentle yoga and meditation for beginners and busy days. Learn and
            practice at your own pace.
          </p>
          <div>
            <div className="flex flex-wrap gap-6 ">
              <Button className="bg-btnbg text-white text-base py-6 px-6 rounded-lg shadow-md flex items-center gap-2 hover:bg-btnbg/90 hover:cursor-pointer">
                Start Practicing <ArrowRight size={18} />
              </Button>

              <Button className="text-gray-800 px-6 py-6 rounded-lg border border-btnbg text-base shadow-md hover:bg-btnbg/10 flex items-center gap-2 hover:cursor-pointer">
                Explore Categories <ArrowRight size={18} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 mt-4">
              {[
                "Beginner Yoga",
                "Meditation",
                "Breathing",
                "Stress Relief",
                "Flexibility",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-primarydeep text-gray-700 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-130 h-120 px-8 overflow-hidden">
          <Image
            src={heroImage}
            alt="Yoga & Meditation"
            fill
            className="object-cover -translate-x-16 shadow-lg"
            style={{
              objectPosition: "90% center",
              clipPath: "inset(0 0 0 100px round 1rem)",
            }}
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
