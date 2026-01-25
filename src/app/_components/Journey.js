import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import JourneyCard from "./JourneyCard";
import img from "@/images/Vector.png";
import img1 from "@/images/clock.png";
import img2 from "@/images/hand.png";

const Journey = () => {
  const cards = [
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
    <section className="bg-bg-section-primary py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="display-medium font-semibold text-white mb-3 font-robotoslab">
            New to Yoga or Meditation?
          </h2>
          <p className="text-white title-large font-normal font-roboto">
            Not sure where to begin? We {'"'}ll help you take your first step
            with simple guidance and easy practices.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-evenly">
          {cards.map((card, index) => (
            <JourneyCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="secondary"
            className="rounded font-roboto title-medium py-5 px-6 gap-2 text-bg-button-primary "
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
