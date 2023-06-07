const CheckList = (props: { texts: string[] }) => {
  return (
    <div>
      <div className="flex">
        <img src="../../assets/images/icon-list.svg" />
        <p className="mx-3">{props.texts[0]}</p>
      </div>

      <div className="flex">
        <img src="../../assets/images/icon-list.svg" />
        <p className="mx-3">{props.texts[1]}</p>
      </div>

      <div className="flex">
        <img src="../../assets/images/icon-list.svg" />
        <p className="mx-3">{props.texts[2]}</p>
      </div>
    </div>
  );
};

export default CheckList;
