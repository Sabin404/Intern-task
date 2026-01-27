import Link from "next/link";
import Graphic from "./Graphic";

const VectorCombined = ({ title, position = "bottom-right", link }) => {
  const isTopLeft = position === "top-left";

  return (
    <div
      className={`bg-section-secondary  relative ${
        isTopLeft ? "rounded-br-[18px]" : "rounded-tl-[22px]"
      }`}
    >
      <div className={`px-4 pt-3 pb-2 ${isTopLeft ? "pb-3" : "pt-5"} `}>
        {link ? (
          <Link href="/" className="flex items-center gap-2 text-sm font-light">
            <p>{title}</p>
          </Link>
        ) : (
          <p className="title-medium font-roboto font-light ">{title}</p>
        )}
      </div>

      <div
        className={`absolute size-5  ${
          isTopLeft ? "top-0 -right-4.5" : "bottom-0 -left-4.75 rotate-180"
        }`}
      >
        <Graphic className={"text-section-secondary"} />
      </div>

      <div
        className={`absolute size-4.5  ${
          isTopLeft ? "" : "-top-4.5 right-0 rotate-180"
        }`}
      >
        <Graphic className={"text-section-secondary"} />
      </div>
    </div>
  );
};

export default VectorCombined;
