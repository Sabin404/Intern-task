type OverlayProps = {
  title: string;
};

const Overlay = ({ title }: OverlayProps) => {
  return (
    <div className="absolute inset-0 flex justify-center items-end  rounded-2xl">
      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/90 opacity-55 " />
      <p className="text-white lg:text-[24px] text-14px   font-semibold p-4 z-10">
        {title}
      </p>
    </div>
  );
};
export default Overlay;
