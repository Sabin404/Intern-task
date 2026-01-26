import React from "react";
import {
  stressRelief,
  mentalHealth,
  physcialStrength,
  increaseEnergy,
  mindBody,
  betterSleep,
} from "./icons/Icon";
import Image from "next/image";
import meditationImage from "@/images/middle.png";
const Meditation = () => {
  const leftItems = [
    {
      id: 1,
      title: "Stress Reduction",
      description:
        "Calm your mind and release daily tension through gentle movement and breathing.",
      Icon: stressRelief,
    },
    {
      id: 2,
      title: "Improved Mental Health",
      description:
        "Build focus, awareness, and emotional balance with mindful practices.",
      Icon: mentalHealth,
    },
    {
      id: 3,
      title: "Enhanced Flexibility &\n Physical Strength",
      description:
        "Move safely and gradually to improve mobility and strength.",
      Icon: physcialStrength,
    },
  ];
  const rightItems = [
    {
      id: 4,
      title: "Increased Energy & Vitality",
      description: "Feel refreshed and energized with short daily sessions.",
      Icon: increaseEnergy,
    },
    {
      id: 5,
      title: "Mind Body Connection",
      description: "Learn to listen to your body and move with awareness.",
      Icon: mindBody,
    },
    {
      id: 6,
      title: "Better Sleep Quality",
      description:
        "Relax your nervous system and prepare your body for restful sleep.",
      Icon: betterSleep,
    },
  ];
  return (
    <section className="py-16 container mx-auto ">
      <div className=" px-6">
        <h1 className="display-medium font-semibold text-text-primary-hero text-center mb-16 font-robotoslab">
          Why Practice Yoga & Meditation?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-1 flex-col gap-18 md:items-end">
            {leftItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 text-right">
                <div className="flex flex-col gap-1">
                  <h3 className="headline-small font-robotoslab font-semibold text-text-primary-hero whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="body-large font-roboto text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
                <div className="bg-bg-button-primary w-16 h-16 flex items-center justify-center rounded-xl shrink-0">
                  <item.Icon className="w-10 h-10" />{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              src={meditationImage}
              alt="Meditation Illustration"
              width={360}
              height={483}
              className="object-contain"
            />
          </div>
          <div className="flex flex-1 flex-col gap-18 md:items-start">
            {rightItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 text-left">
                <div className="bg-bg-button-primary w-16 h-16 flex items-center justify-center rounded-xl shrink-0">
                  <item.Icon className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="headline-small font-robotoslab font-semibold text-text-primary-hero">
                    {item.title}
                  </h3>
                  <p className="body-large font-roboto text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Meditation;
