import React from "react";

interface IProps {
  title?: string;
}

const Button: React.FC<IProps> = ({ title }) => {
  return (
    <button className="md:w-2/3 my-5 text-white py-4 rounded-md bg-btn">
      {title}
    </button>
  );
};

export default Button;
