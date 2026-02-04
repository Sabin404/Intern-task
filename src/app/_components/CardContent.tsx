import Image, { StaticImageData } from "next/image";
import Overlay from "./Overlay";

type type = {
  image: string | StaticImageData;
  title: string;
  height?: string;
  width?: string;
};

const CardContent = ({ image, title, height, width }: type) => {
  return (
    <div
      className={`relative lg:h-60 ${height} ${width} lg:w-full  rounded-2xl overflow-hidden group hover:cursor-pointer`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent " />
      <Overlay title={title} />
    </div>
  );
};

export default CardContent;
