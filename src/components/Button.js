const Button = ({ name }) => {
  return (
    <div className="flex-shrink-0">
      <button className="px-5 m-2 py-2 bg-gray-200 rounded-lg whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
