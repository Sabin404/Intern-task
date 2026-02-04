import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import ProductCard from "./ProductCard";

// Images
import ecogrip from "@/images/products/ecogrip.png";
import comfort from "@/images/products/comfort.png";
import meditation from "@/images/products/meditation.png";
import yogaStrap from "@/images/products/cotton.png";
import calming from "@/images/products/calming.jpg";
import handcraft from "@/images/products/handcraft.png";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Eco-grip Yoga Mat",
      desc: "Yoga mat",
      price: "6000",
      image: ecogrip,
      bestSeller: true,
      sale: false,
      newArrival: false,
    },
    {
      id: 2,
      title: "Comfort Plus Yoga Mat",
      desc: "Yoga mat",
      price: "5100",
      image: comfort,
      sale: true,
      bestSeller: false,
      newArrival: false,
    },
    {
      id: 3,
      title: "Classic Meditation Cushion",
      desc: "Meditation Cushion",
      price: "2500",
      image: meditation,
      sale: false,
      bestSeller: false,
      newArrival: false,
    },
    {
      id: 4,
      title: "Cotton Yoga Strap",
      desc: "Yoga Strap",
      price: "1800",
      image: yogaStrap,
      newArrival: true,
      sale: false,
      bestSeller: false,
    },
    {
      id: 5,
      title: "Handcrafted Singing Bowl",
      desc: "Meditation Accessory",
      price: "7500",
      image: handcraft,
      sale: false,
      bestSeller: true,
      newArrival: false,
    },
    {
      id: 6,
      title: "Calming Incense Set",
      desc: "Meditation Accessory",
      price: "2200",
      image: calming,
      sale: false,
      bestSeller: false,
      newArrival: false,
    },
    {
      id: 7,
      title: "Handcrafted Singing Bowl",
      desc: "Meditation Accessory",
      price: "7500",
      image: handcraft,
      sale: false,
      bestSeller: false,
      newArrival: false,
    },
    {
      id: 8,
      title: "Calming Incense Set",
      desc: "Meditation Accessory",
      price: "2200",
      image: calming,
      sale: false,
      bestSeller: false,
      newArrival: true,
    },
  ];

  return (
    <div className="w-full bg-bg-button-primary/5">
      <section className="container mx-auto py-12 px-4 lg:px-0">
        <div className="lg:flex lg:flex-row flex flex-row  justify-between lg:items-start items-center mb-8 gap-4">
          <h2 className="text-[22px] lg:text-[45px] font-semibold text-text-primary-hero font-robotoslab">
            Our Products
          </h2>
          <span className="flex items-center gap-2 font-medium text-text-primary-hero font-roboto text-[14px] lg:text-[18px] cursor-pointer">
            View all <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 hover:cursor-pointer">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              image={p.image}
              desc={p.desc}
              price={p.price}
              newArrival={p.newArrival}
              sale={p.sale}
              bestSeller={p.bestSeller}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
