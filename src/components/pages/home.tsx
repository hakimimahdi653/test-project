import React, { useState } from "react";
import CheckList from "../common/check-list";
import Button from "../common/button";
import Input from "../common/input";
import Modal from "../common/modal";

const Home = () => {
  const texts: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleShowEmailInModal = (email: string) => {
    setEmail(email);
  };

  return (
    <div className="app content-center">
      <div className="card bg-white grid grid-cols-2">
        <div className="p-8">
          <h1>Stay updated!</h1>
          <p className="my-5">
            join 60,000+ product managers receiving monthly updates on :
          </p>
          <CheckList texts={texts} />
          <Input
            type="text"
            label="Email address"
            placeholder="email@company.com"
            onChildData={handleShowEmailInModal}
          />
          <div className="md:w-2/3">
            <Button
              title="Subscribe to monthly newsletter"
              onClick={openModal}
            />
          </div>
          <Modal email={email} isOpen={isOpen} onClose={closeModal}></Modal>
        </div>
        <div className="flex justify-end">
          <img
            src={require("../../assets/images/illustration-sign-up-desktop.jpg")}
            alt="illustration-sign-up-desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
