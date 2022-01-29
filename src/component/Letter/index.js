import cn from 'classnames'
import "./letter.scss";

const Letter = ({ letter, state, index }) => {

  
  const keyClass = cn('tuorp-letter rounded d-flex justify-content-center align-items-center', {
    'tuorp-letter--settled': state === "settled",
    'tuorp-letter--perfect': state === "perfect",
    'tuorp-letter--almost': state === "almost",
    'tuorp-letter--filled': letter !== ""
  })

  return (
    <div
      className={keyClass}
      style={{ width: "3.5rem", height: "3.5rem" }}
    >
      <h3 className="m-0 fw-bold">{letter.toUpperCase()}</h3>
    </div>
  );
};

export default Letter;
