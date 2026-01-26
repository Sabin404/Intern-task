import Image from "next/image";
import Overlay from "./Overlay";

const CardContent = ({ image, title }) => {
  return (
    <div className="relative h-60 rounded-2xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <Overlay title={title} />
    </div>
  );
};

export default CardContent;
