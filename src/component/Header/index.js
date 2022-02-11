import "./header.scss";

const Header = () => {
  return (
    <div className="tuorp-header py-3 text-center">
      <h5 className="text-white fw-bold m-0 d-flex justify-content-center">
        <span
          className="d-flex align-items-center justify-content-center bg-primary rounded"
          style={{ width: 40, height: 40 }}
        >
          T
        </span>
        <span
          className="d-flex align-items-center justify-content-center rounded"
          style={{ width: 40, height: 40 }}
        >
          U
        </span>
        <span
          className="d-flex align-items-center justify-content-center bg-secondary rounded"
          style={{ width: 40, height: 40 }}
        >
          O
        </span>
        <span
          className="d-flex align-items-center justify-content-center rounded"
          style={{ width: 40, height: 40 }}
        >
          R
        </span>
        <span
          className="d-flex align-items-center justify-content-center rounded"
          style={{ width: 40, height: 40 }}
        >
          P
        </span>
      </h5>
    </div>
  );
};

export default Header;
