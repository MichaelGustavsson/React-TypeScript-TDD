type ProductProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

const Product = ({ image, name, price, description }: ProductProps) => {
  const handleAddToCart = () => {};

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <div className='product-content'>
        <div>
          <h3>{name}</h3>
          <p className='product-price'>{price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={handleAddToCart}>Lägg i kundvagn</button>
        </p>
      </div>
    </article>
  );
};
export default Product;
