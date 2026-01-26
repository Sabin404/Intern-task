const Overlay = ({ title }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-end  rounded-2xl">
      <p className="text-white headline-small   font-semibold p-4">{title}</p>
    </div>
  );
};
export default Overlay;
