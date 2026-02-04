import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import JourneyCard from "./JourneyCard";
import img from "@/images/Vector.png";
import img1 from "@/images/clock.png";
import img2 from "@/images/hand.png";

export interface JourneyCardProps {
  title: string;
  description: string;
  img: StaticImageData;
}

const Journey = () => {
  const cards: JourneyCardProps[] = [
    {
      title: "Choose Your \n Focus & Intention",
      description:
        "Sleep better, reduce stress, improve flexibility, or simply relax.",
      img: img,
    },
    {
      title: "Pick a Time \n That Fits Your Day",
      description: "Short sessions that fit your day — 5, 10, or 20 minutes.",
      img: img1,
    },
    {
      title: "Begin Gently \n & Move Safely",
      description:
        "Follow beginner-friendly videos designed to feel safe and comfortable.",
      img: img2,
    },
  ];

  return (
    <section className="bg-bg-section-primary lg:py-16 py-10">
      <div className="container mx-auto lg:px-0">
        <div className="text-center max-w-2xl mx-auto lg:mb-16 mb-6 px-4">
          <h2 className="lg:text-[45px] text-[22px] font-semibold text-white mb-3 font-robotoslab">
            New to Yoga or Meditation?
          </h2>
          <p className="text-white lg:text-[18px] text-[16px] font-normal font-roboto">
            Not sure where to begin? We&apos;ll help you take your first step
            with simple guidance and easy practices.
          </p>
        </div>

        {/* Desktop  */}
        <div className="hidden lg:flex gap-6 justify-between">
          {cards.map((card, index) => (
            <JourneyCard key={index} {...card} />
          ))}
        </div>

        {/* Mobile  */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide  ">
          <div className="flex gap-4 pl-6">
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-[340px] h-[172px] ">
                <JourneyCard {...card} />
              </div>
            ))}
            <div className="flex-shrink-0 px-1" />
          </div>
        </div>

        <div className="flex justify-center lg:mt-10 mt-8">
          <Button
            variant="secondary"
            className="rounded-lg font-roboto lg:text-[18px] text-[14px] py-3 px-4 lg:py-5 lg:px-6 gap-2 text-bg-button-primary hover:cursor-pointer h-14"
          >
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
