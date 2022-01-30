import Row from '../Row';
import { useGridContext } from '../../state/GridContext';

const Grid = () => {
  const { grid } = useGridContext();
  return (
    <main className='d-flex justify-content-center my-5'>
      <div className='d-flex flex-column gap-2'>
        {grid?.map((row, indexRow) => (
          <Row key={indexRow} row={row} indexRow={indexRow} />
        ))}
      </div>
    </main>
  );
};

export default Grid;
