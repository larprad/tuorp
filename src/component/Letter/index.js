import "./letter.scss";

const Letter = ({ letter }) => {
  return (
    <div
      className="tuorp-letter rounded d-flex justify-content-center"
      style={{ width: "4rem", height: "4rem" }}
    >
      {letter}
    </div>
  );
};

export default Letter;
