"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    // console.log("Subscribed", email);
  };

  return (
    <section className="w-full bg-bg-soft py-10 lg:py-0">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:p-8 lg:rounded-2xl lg:flex-row lg:justify-between lg:items-center lg:gap-6">
          {/* Text section */}
          <div>
            <h2 className="font-robotoslab font-semibold text-text-primary-hero text-[18px] lg:text-[28px] lg:line-clamp-2">
              Join Yoga and Meditation Community
            </h2>
            <p className="mt-2 text-text-primary-hero font-roboto text-[14px] lg:text-[18px] lg:line-clamp-2 lg:max-w-[516px]">
              Subscribe to our newsletter for weekly tips, new course
              announcements, and exclusive offers.
            </p>
          </div>

          {/* Input section */}
          <div className="relative w-full mt-4 lg:mt-0 lg:w-96 flex flex-col">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full h-12 border bg-white px-4 py-3 focus:outline-none rounded-xl placeholder:font-roboto placeholder:text-[#777777]"
              />
              <Button
                variant="default"
                onClick={handleSubscribe}
                className="absolute right-1 top-1/2 -translate-y-1/2
                       font-roboto lg:text-[16px] bg-bg-button-primary
                       py-5 px-3.5 text-[14px]"
              >
                Subscribe
              </Button>
            </div>
            {error && (
              <span className="text-red-500 text-sm mt-2">{error}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
