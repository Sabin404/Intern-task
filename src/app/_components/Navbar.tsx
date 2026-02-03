import Image from "next/image";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";
import groupimage from "@/images/Group.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white  z-50 ">
      {/* Top bar */}
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-roboto font-black uppercase text-gray-800 lg:flex items-center gap-2 cursor-pointer hidden ">
            <Image src={groupimage} alt="logo" width={30} height={30} />
            Yoga Life
          </h1>

          <ul className="hidden lg:flex items-center gap-8 title-medium font-roboto">
            <li className="cursor-pointer">Yoga</li>
            <li className="cursor-pointer">Meditation</li>
            <li className="cursor-pointer">Learn</li>
            <li className="cursor-pointer">Lifestyle</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <div className="relative">
            <Search
              size={22}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search video, blog or products..."
              className="bg-bg-input w-72 py-3  px-4 border border-gray-200 rounded-sm text-sm placeholder:text-right placeholder:font-roboto body-large placeholder:text-[#777777]"
            />
          </div>

          <div className="flex items-center gap-6 pl-4 border-l">
            <Heart size={24} className="cursor-pointer text-gray-600" />
            <User size={24} className="cursor-pointer text-gray-600" />
            <ShoppingCart size={24} className="cursor-pointer text-gray-600" />
          </div>
        </div>       
      </div>

{/* mobile ko lagi  */}
<div className="lg:hidden px-4 pb-4 flex items-center gap-4">
  {/* Search input */}
  <div className="relative flex-1">
    <Search
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    />
    <input
      type="text"
      placeholder="Search videos, blogs, or products..."
      className="w-full h-11 bg-bg-input border border-gray-200 rounded-md
                 pl-10 py-3 text-sm text-gray-700
                 placeholder:text-gray-400 "
    />
  </div>

  {/* Right icons */}
  <div className="flex items-center gap-4">
    <Heart size={24} className="text-gray-600 cursor-pointer" />
    <Menu size={24} className="text-gray-600 cursor-pointer" />
  </div>
</div>


    </nav>
  );
};

export default Navbar;
