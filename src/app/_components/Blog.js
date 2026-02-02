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
        "Ask yourself why you practise yoga? Maybe it’s helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "breath work",
      image: breathwork,
    },
    {
      id: 2,
      title: "5 ways to shake up your yoga practice",
      description:
        "Ask yourself why you practise yoga? Maybe it’s helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "Safe Care",
      image: selfcare,
    },
    {
      id: 3,
      title: "8 ways to shake up your yoga practices",
      description:
        "Ask yourself why you practise yoga? Maybe it’s helpful to try and remember what brought you to it in the first place.",
      author: "Dinesh Thapa",
      date: "Dec 31,2024",
      type: "Yoga basics",
      image: yogabasics,
    },
  ];
  return (
    <section className="container mx-auto py-16">
      <h1 className="display-medium text-text-primary-hero mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPost.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-3xl shadow-lg flex flex-col "
          >
            <div className="relative w-[490.67px] h-92 ">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover hover:cursor-pointer"
              />
              {post.type && (
                <span className="absolute text-center top-4 left-4 bg-bg-primary-muted body-small font-roboto px-3  py-2 rounded-full shadow capitalize">
                  {post.type}
                </span>
              )}
            </div>

            <CardContent className="flex-1 flex flex-col gap-2 py-4 px-6 text-text-primary-hero">
              <h2 className="title-large font-roboto">{post.title}</h2>

              <div className="flex items-center gap-2  text-sm text-gray-500 body-small font-roboto">
                <div className="flex items-center gap-2 ">
                  <User size={14} className="text-bg-section-primary" />
                  <span className="text-[#777777]">{post.author}</span>
                </div>

                <div className="flex items-center gap-2 ">
                  <Calendar size={14} className="text-bg-section-primary" />
                  <span className="text-[#777777]">{post.date}</span>
                </div>
              </div>

              <p className="body-large text-gray-600 line-clamp-2 flex-1 font-roboto">
                {post.description}
              </p>
            </CardContent>

            <CardFooter>
              <Button
                variant="link"
                className="px-0  text-bg-section-primary font-[14px] font-SourceSans3 mb-4 cursor-pointer"
              >
                Read article
              </Button>
            </CardFooter>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
