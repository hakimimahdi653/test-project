interface IProps {
  texts: string[];
}

const CheckList = ({ texts }: IProps) => {
  return (
    <div>
      {texts.map((item: string) => (
        <div className="flex items-center">
          <img
            src={require("../../assets/images/icon-list.jpg")}
            alt="check-icon"
            className="img-icon"
          />
          <p className="mx-3">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
