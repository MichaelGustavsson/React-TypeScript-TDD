import { IMovie } from '../Models/IMovie';
import { IShow } from '../Models/IShow';
import GridList from './GridList';

type ItemListProps = {
  items: IMovie[] | IShow[];
};

const ItemsList = ({ items }: ItemListProps) => {
  return <GridList items={items} />;
};
export default ItemsList;
