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

    return inputValue;
  };

  return (
    <div className="w-full md:w-2/3 mt-7">
      <div className="flex justify-between">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {label}
        </label>
        {!isValid && (
          <span style={{ color: "red", fontSize: 12 }}>
            Valid email required
          </span>
        )}
      </div>
      <input
        type={type}
        value={email}
        onChange={handleInputChange}
        className={
          "appearance-none block w-full border rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-white" +
          (isValid
            ? "text-gray-700 border-gray-200 focus:border-gray-500"
            : "text-red-800 border-red-300 focus:border-red-500 bg-red")
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
