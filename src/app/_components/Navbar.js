import React from "react";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import groupimage from "@/images/Group.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="container mx-auto  py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 flex items-center gap-2 cursor-pointer">
            <Image src={groupimage} alt="logo" width={30} height={30} />
            Yoga Life
          </h1>

          <ul className="hidden md:flex items-center gap-8 text-base">
            <li>Yoga</li>
            <li>Meditation</li>
            <li>Learn</li>
            <li>Lifestyle</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search video, blog or products..."
              className="bg-bg-input w-72 pl-10 pr-4 py-2 border border-gray-200 rounded-sm text-sm"
            />
          </div>

          <div className="flex items-center gap-6 pl-4 border-l">
            <Heart
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-text-primary-hero fill-transparent"
            />
            <User
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-text-primary-hero fill-transparent"
            />
            <ShoppingCart
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-text-primary-hero fill-transparent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
