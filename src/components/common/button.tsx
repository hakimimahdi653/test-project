import React from "react";

interface IProps {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IProps> = ({ title, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-5 text-white py-3 rounded-md bg-btn"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
