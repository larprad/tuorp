import Letter from '../Letter';

const Row = ({ row, indexRow }) => {
  return (
    <div className='d-flex gap-2' key={indexRow}>
      {row?.map((letter, index) => (
        <Letter letter={letter} key={index} index={index} row={indexRow} />
      ))}
    </div>
  );
};

export default Row;
