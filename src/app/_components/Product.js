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
    },
    {
      id: 2,
      title: "Comfort Plus Yoga Mat",
      desc: "Yoga mat",
      price: "5100",
      image: comfort,
    },
    {
      id: 3,
      title: "Classic Meditation Cushion",
      desc: "Meditation Cushion",
      price: "2500",
      image: meditation,
    },
    {
      id: 4,
      title: "Cotton Yoga Strap",
      desc: "Yoga Strap",
      price: "1800",
      image: yogaStrap,
    },
    {
      id: 5,
      title: "Handcrafted Singing Bowl",
      desc: "Meditation Accessory",
      price: "7500",
      image: handcraft,
    },
    {
      id: 6,
      title: "Calming Incense Set",
      desc: "Meditation Accessory",
      price: "2200",
      image: calming,
    },
    {
      id: 7,
      title: "Handcrafted Singing Bowl",
      desc: "Meditation Accessory",
      price: "7500",
      image: handcraft,
    },
    {
      id: 8,
      title: "Calming Incense Set",
      desc: "Meditation Accessory",
      price: "2200",
      image: calming,
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="display-medium  font-semibold text-text-primary-hero">
          Our Products
        </h2>
        <Button
          className="flex items-center gap-2 font-medium title-medium"
          variant="outline"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            image={p.image}
            desc={p.desc}
            price={p.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
