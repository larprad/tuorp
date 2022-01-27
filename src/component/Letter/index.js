import "./letter.scss";

const Letter = ({ letter }) => {
  return (
    <div
      className="tuorp-letter rounded d-flex justify-content-center"
      style={{ width: "3.5rem", height: "3.5rem" }}
    >
      {letter}
    </div>
  );
};

export default Letter;
