import React from "react";
import breathwork from "@/images/blogs/first.png";
import selfcare from "@/images/blogs/second.png";
import yogabasics from "@/images/blogs/third.png";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPost = [
    {
      id: 1,
      title: "Pranayama techniques for beginners",
      description:
        "Ask yourself why you practise yoga? Maybe it's helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "breath work",
      image: breathwork,
    },
    {
      id: 2,
      title: "5 ways to shake up your yoga practice",
      description:
        "Ask yourself why you practise yoga? Maybe it's helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "Safe Care",
      image: selfcare,
    },
    {
      id: 3,
      title: "8 ways to shake up your yoga practices",
      description:
        "Ask yourself why you practise yoga? Maybe it's helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "Yoga basics",
      image: yogabasics,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="lg:text-[45px] font-semibold text-[22px] text-text-primary-hero font-robotoslab mb-8">
          Blog
        </h1>

        {/* Desktop*/}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {blogPost.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-3xl shadow-lg flex flex-col"
            >
              <div className="relative w-full aspect-4/3">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:cursor-pointer"
                />
                {post.type && (
                  <span className="absolute text-center top-4 left-4 bg-bg-primary-muted body-small font-roboto px-3 py-2 rounded-full shadow capitalize">
                    {post.type}
                  </span>
                )}
              </div>
              <CardContent className="flex-1 flex flex-col gap-2 py-4 px-6 text-text-primary-hero">
                <h2 className="title-large font-roboto">{post.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 body-small font-roboto">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-bg-section-primary" />
                    <span className="text-[#777777] font-roboto">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-bg-section-primary" />
                    <span className="text-[#777777] font-roboto">
                      {post.date}
                    </span>
                  </div>
                </div>
                <p className="body-large text-gray-600 line-clamp-2 flex-1 font-roboto">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className={""}>
                <Button
                  variant="link"
                  className="px-0 text-bg-section-primary text-[14px] font-SourceSans3 mb-4 cursor-pointer"
                >
                  Read article
                </Button>
              </CardFooter>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 pb-4">
          {blogPost.map((post) => (
            <div
              key={post.id}
              className="flex flex-col flex-shrink-0 w-[340px] rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-[340px] h-[210px] flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:cursor-pointer"
                />
                {post.type && (
                  <span className="absolute top-4 left-4 bg-bg-primary-muted body-small font-roboto py-[6px] px-[11px] rounded-full shadow capitalize">
                    {post.type}
                  </span>
                )}
              </div>
              {/* Content */}
              <CardContent className="flex-1 flex flex-col gap-2 py-4 px-4 text-text-primary-hero">
                <h2 className="font-roboto text-[18px] font-medium">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 body-small font-roboto">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-bg-section-primary" />
                    <span className="text-[#777777]">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-bg-section-primary" />
                    <span className="text-[#777777]">{post.date}</span>
                  </div>
                </div>
                <p className="text-[14px] text-gray-600 font-normal line-clamp-2 flex-1 font-roboto">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className={""}>
                <Button
                  variant="link"
                  className="px-0 text-bg-section-primary font-[14px] font-SourceSans3 mb-4 cursor-pointer"
                >
                  Read article
                </Button>
              </CardFooter>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
