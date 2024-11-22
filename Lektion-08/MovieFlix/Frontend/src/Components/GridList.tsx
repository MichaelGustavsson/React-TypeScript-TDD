import { IMedia } from '../Models/IMedia';
import Item from './Item';

const GridList = ({ items }: { items: IMedia[] }) => {
  return (
    <section className='grid'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
export default GridList;
