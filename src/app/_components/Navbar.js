import React from "react";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import groupimage from "@/images/Group.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full bg-white  px-6 py-4 container mx-auto ">
      <div className=" mx-auto flex items-center justify-around">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 flex items-center gap-2 cursor-pointer">
            <Image src={groupimage} alt="logo" width={30} height={30} />
            Yoga Life
          </h1>

          <ul className="hidden md:flex items-center gap-8  text-base ">
            <li className="">Yoga</li>
            <li className="">Meditation</li>
            <li className="">Learn</li>
            <li className="">Lifestyle</li>
            <li className="">Shop</li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute  left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search video, blog or products..."
              className=" bg-inputbg w-70 pl-10 pr-4 py-2 border border-gray-200 rounded-sm text-sm "
            />
          </div>

          <div className="flex items-center gap-6  pl-4 border-l-2">
            <Heart
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-herotext fill-transparent transition-colors"
            />
            <User
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-herotext fill-transparent transition-colors"
            />
            <ShoppingCart
              size={24}
              className="cursor-pointer text-gray-600 hover:fill-herotext fill-transparent transition-colors"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
