const Button = ({ title, style, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`self-center px-4 py-2 font-semibold rounded border ${style}`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
