import Letter from "../Letter";

const gridContent = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const Grid = () => {
  return (
    <main className="d-flex justify-content-center my-5">
      <div className="d-flex flex-column gap-3">
        {gridContent.map((row) => (
          <div className="d-flex gap-3">
            {row.map((letter) => (
              <Letter letter={letter} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Grid;
