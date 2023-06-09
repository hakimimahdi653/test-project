import React from "react";
import Button from "./button";

interface IProps {
  isOpen: boolean;
  email?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
}

const Modal: React.FC<IProps> = ({ isOpen, onClose, children, email }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div
        className="bg-white rounded-3xl shadow-lg z-10"
        style={{ width: 350, padding: 40 }}
      >
        <img
          style={{ height: 40 }}
          src={require("../../assets/images/icon-success.jpg")}
          alt="illustration-sign-up-desktop"
        />
        <h1 className="my-5" style={{ fontSize: 35 }}>
          Thanks for subscribing!
        </h1>
        <p style={{ fontSize: 12 }}>
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confrim your subscription.
        </p>
        {children}
        <div className="flex items-center justify-center">
          <Button title="Dismiss message" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
