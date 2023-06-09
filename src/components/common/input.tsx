import React, { useState } from "react";

interface IProps {
  type: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({ type, label, placeholder }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validate email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(inputValue);
    setIsValid(isValidEmail);
  };

  return (
    <div className="w-full md:w-2/3 mt-7">
      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={email}
        onChange={handleInputChange}
        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={placeholder}
      />
      {!isValid && <span style={{ color: "red", fontSize: 12 }}>Invalid email address</span>}
    </div>
  );
};

export default Input;
