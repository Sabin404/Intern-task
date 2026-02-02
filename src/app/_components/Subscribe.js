"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className="w-full bg-bg-soft">
      <div className="container mx-auto">
        <div className="p-8 rounded-2xl flex justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary-hero headline-medium">
              Join Yoga and Meditation Community
            </h2>
            <p className="mt-2 text-text-primary-hero">
              Subscribe to our newsletter for weekly tips, new course
              announcements, and exclusive offers.
            </p>
          </div>

          <div className="relative w-96">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full h-12 border bg-white p-6 rounded-xl placeholder:font-roboto placeholder:text-[#777777]"
            />

            <Button
              variant="default"
              // onClick={() => console.log("Subscribed with email:", email)}
              className="absolute font-roboto font-[14px] bg-text-primary-hero right-1 top-1/2 -translate-y-1/2 h-10 px-6"
            >
              Subscribe
            </Button>
            {/* <span>{!email ? "Please enter your email" : ""} </span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
