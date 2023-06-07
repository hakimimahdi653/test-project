import CheckList from "../common/check-list";
import Button from "../common/button";

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
          <div className="w-full md:w-2/3 mt-7">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email address
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="email@company.com"
            />
          </div>
          <Button title="Subscribe to monthly newsletter" />
        </div>
        <div>
          <img
            src="../../assets/images/illustration-sign-up-desktop.svg"
            className="img-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
