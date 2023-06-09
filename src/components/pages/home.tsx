import CheckList from "../common/check-list";
import Button from "../common/button";
import Input from "../common/input";

const Home = () => {
  const texts: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div className="app content-center">
      <div className="card bg-white grid grid-cols-2">
        <div className="p-8">
          <h1>Stay updated!</h1>
          <p className="my-5">
            join 60,000+ product managers receiving monthly updates on :
          </p>
          <CheckList texts={texts} />
          <Input type="text" label="Email address" placeholder="email@company.com"/>
          <Button title="Subscribe to monthly newsletter" />
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
