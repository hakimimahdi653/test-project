const Button = (props: { title: string }) => {
  return (
    <button className="md:w-2/3 my-5 hover:bg-blue-700 text-white py-4 rounded-md bg-btn">
      {props.title}
    </button>
  );
};

export default Button;
