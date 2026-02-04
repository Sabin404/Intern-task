import React from "react";
import meal from "@/images/lifestyle/Food.jpg";
import meditation from "@/images/lifestyle/meditation.jpg";
import Image from "next/image";

const Lifestyle = () => {
  const lifeStylesDemo = [
    {
      id: 1,
      title: "Mindful food",
      description:
        "Simple ideas for balanced, conscious eating that support your body and energy throughout the day.",
      image: meal,
    },
    {
      id: 2,
      title: "Lifestyle Practices",
      description:
        "Small daily habits inspired by yoga to help you slow down, stay present, and feel more balanced.",
      image: meditation,
    },
  ];
  return (
    <section className="w-full py-16 bg-[#f7f8f7]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4 lg:gap-0">
          <h2 className="lg:text-[45px] text-[22px] font-semibold text-text-primary-hero font-robotoslab">
            Yoga Lifestyle
          </h2>
          <p className="font-roboto lg:text-[22px] text-[16px] lg:max-w-2xl">
            Gentle ideas and everyday habits to help you live more mindfully,
            both on and off the mat.
          </p>
        </div>

        {/* Desktop version */}
        <div className="hidden lg:flex gap-10 mt-10">
          {lifeStylesDemo.map((lifestyle) => (
            <div
              key={lifestyle.id}
              className="relative w-187 h-123.75 rounded-4xl overflow-hidden hover:cursor-pointer"
            >
              <Image
                src={lifestyle.image}
                alt={lifestyle.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-800"
              />
              <div className="absolute top-88.75 left-6 rounded-4xl p-6 bg-white py-4 px-6 w-175 h-29">
                <h3 className="text-[22px] font-robotoslab text-text-primary-hero font-bold">
                  {lifestyle.title}
                </h3>
                <p className="body-large font-roboto text-text-secondary-hero">
                  {lifestyle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className="flex flex-col items-center gap-6 mt-8 lg:hidden">
          {lifeStylesDemo.map((lifestyle) => (
            <div
              key={lifestyle.id}
              className="relative w-[358px] h-[230px] rounded-3xl overflow-hidden hover:cursor-pointer"
            >
              <Image
                src={lifestyle.image}
                alt={lifestyle.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white py-3 px-4 w-[334px] h-[80px]">
                <h3 className="text-[14px] font-robotoslab text-text-primary-hero font-bold mb-1">
                  {lifestyle.title}
                </h3>
                <p className="text-[12px] font-roboto text-text-secondary-hero">
                  {lifestyle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
