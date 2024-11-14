import { IMovie } from '../Models/IMovie';
import { IShow } from '../Models/IShow';
import Item from './Item';

type ItemListProps = {
  items: IMovie[] | IShow[];
};

const ItemsList = ({ items }: ItemListProps) => {
  return (
    <section className='grid'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
export default ItemsList;
