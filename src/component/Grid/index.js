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
      <div className="d-flex flex-column gap-2">
        {gridContent.map((row, index) => (
          <div className="d-flex gap-2" key={index}>
            {row.map((letter, index) => (
              <Letter letter={letter} key={index} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Grid;
