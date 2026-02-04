import React from "react";
import cash from "@/images/footer/cash.png";
import visa from "@/images/footer/visa.png";
import mastercard from "@/images/footer/master.png";
import paypal from "@/images/footer/paypal.png";
import union from "@/images/footer/union.png";
import Image from "next/image";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const images = [
    { src: cash, alt: "Cash" },
    { src: paypal, alt: "Paypal" },
    { src: visa, alt: "Visa" },
    { src: mastercard, alt: "Mastercard" },
    { src: union, alt: "Union" },
  ];
  return (
    <footer className="w-full bg-bg-footer text-white py-10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Top sections */}
        <div className="flex flex-col gap-10 mb-10 lg:flex-row lg:justify-between">
          <nav className="flex flex-col gap-6">
            <h3 className="headline-medium font-semibold font-robotoslab">
              Yoga Life
            </h3>
            <p className="w-62 lg:text-[16px] text-[14px] text-footer-text">
              Your holistic wellness platform for authentic yoga, guided
              meditation, and mindful living. Start your journey to inner peace
              today.
            </p>
          </nav>

          <nav className="flex flex-col gap-6">
            <h3 className="title-medium font-robotoslab font-semibold ">
              Yoga Lifestyle
            </h3>
            <ul className="lg:text-[16px] text-[14px] flex flex-col gap-4 lg:gap-5 font-roboto text-footer-text">
              <li>Yoga Course</li>
              <li>Meditation</li>
              <li>Stavic Food</li>
              <li>Yoga Lifestyle</li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-4">
            <h3 className="title-medium font-robotoslab ">Company</h3>
            <ul className="lg:text-[16px] text-[14px] text-footer-text flex flex-col gap-4 lg:gap-5 font-roboto">
              <li>About Us</li>
              <li>Blog</li>
              <li>Reviews</li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-4">
            <h3 className="title-medium font-robotoslab ">Company Services</h3>
            <ul className="lg:text-[16px] text-[14px] text-footer-text flex flex-col gap-4 lg:gap-5 font-roboto">
              <li>FAQs</li>
              <li>Return and Refund</li>
              <li>Privacy and Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-4">
            <h3 className="title-medium font-robotoslab ">Contact Info</h3>
            <address className="lg:text-[16px] text-[14px] text-footer-text flex flex-col gap-4 lg:gap-5 font-roboto not-italic">
              <div className="flex items-center gap-2">
                <span>
                  <MapPin size={20} />
                </span>
                Dameside-17, Pokhara, Nepal
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <PhoneCall size={20} />
                </span>
                +0666666666
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Mail size={20} />
                </span>
                yogameditation@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Globe size={20} />
                </span>
                www.yogameditation.com
              </div>
            </address>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-5 border-t border-gray-700 pt-6
                    lg:flex-row lg:flex-wrap lg:justify-between lg:items-center"
        >
          <div className="flex gap-4 text-[14px] lg:text-[16px] text-footer-text w-92.5">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  width={300}
                  height={50}
                  src={image.src}
                  alt={image.alt}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-gray-400 font-SourceSans3 lg:text-[16px]">
            © {new Date().getFullYear()} Yoga Meditation. All rights reserved.
          </div>

          <div className="flex gap-3 items-center justify-center">
            <span className="font-SourceSans3 text-[16px] font-semibold">
              Follow us on:
            </span>
            <span>
              <Facebook size={20} />
            </span>
            <span>
              <Instagram size={20} />
            </span>
            <span>
              <Youtube size={20} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
