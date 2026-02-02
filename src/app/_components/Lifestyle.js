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
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="display-medium text-text-primary-hero font-robotoslab">
            Yoga Lifestyle
          </h2>
          <p className="font-roboto title-large max-w-2xl">
            Gentle ideas and everyday habits to help you live more mindfully,
            both on and off the mat.
          </p>
        </div>
        <div className="flex gap-10 mt-10">
          {lifeStylesDemo.map((lifestyle) => (
            <div
              key={lifestyle.id}
              className="relative w-187 h-123.75 rounded-4xl overflow-hidden hover:cursor-pointer "
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
      </div>
    </section>
  );
};

export default Lifestyle;
