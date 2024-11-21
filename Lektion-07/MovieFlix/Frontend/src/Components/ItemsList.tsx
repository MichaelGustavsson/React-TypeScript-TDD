import { IMedia } from '../Models/IMedia';
import GridList from './GridList';

type ItemListProps = {
  items: IMedia[];
};

const ItemsList = ({ items }: ItemListProps) => {
  return <GridList items={items} />;
};
export default ItemsList;
