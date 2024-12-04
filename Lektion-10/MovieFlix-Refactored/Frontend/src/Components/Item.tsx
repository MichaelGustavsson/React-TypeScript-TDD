import { IMedia } from '../Models/IMedia';
import Card from './UI/Card';
import ImageLink from './UI/ImageLink';
import ItemInfo from './UI/ItemInfo';

type ItemProps = {
  item: IMedia;
};

const Item = ({ item }: ItemProps) => {
  return (
    <Card>
      <ImageLink
        href={
          item.mediaType === 'movies'
            ? `/movies/${item.id}`
            : `/shows/${item.id}`
        }
        imageSrc={item.posterImage}
        altText={item.title}
      />
      <ItemInfo title={item.title} detailText={item.releaseDate} />
    </Card>
  );
};

export default Item;
