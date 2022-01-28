import "./letter.scss";

const Letter = ({ letter }) => {
  return (
    <div
      className="tuorp-letter rounded d-flex justify-content-center align-items-center"
      style={{ width: "3.5rem", height: "3.5rem" }}
    >
      <h3 className="m-0 fw-bold">{letter.toUpperCase()}</h3>
    </div>
  );
};

export default Letter;
