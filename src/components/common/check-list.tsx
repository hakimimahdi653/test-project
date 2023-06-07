const CheckList = (props: { texts: string[] }) => {
  return (
    <div>
      <div className="flex items-center">
        <img
          src={require("../../assets/images/icon-list.jpg")}
          className="img-icon"
        />
        <p className="mx-3">{props.texts[0]}</p>
      </div>

      <div className="flex items-center">
        <img
          src={require("../../assets/images/icon-list.jpg")}
          className="img-icon"
        />
        <p className="mx-3">{props.texts[1]}</p>
      </div>

      <div className="flex items-center">
        <img
          src={require("../../assets/images/icon-list.jpg")}
          className="img-icon"
        />
        <p className="mx-3">{props.texts[2]}</p>
      </div>
    </div>
  );
};

export default CheckList;
