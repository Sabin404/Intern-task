const Graphic = ({ className, style }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 18 18"
      style={style}
      className={className}
    >
      <path d="M0 0v18C0 8.059 8.059 0 18 0Z"></path>
    </svg>
  );
};

export default Graphic;
