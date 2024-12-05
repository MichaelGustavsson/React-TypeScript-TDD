import { ReactNode } from 'react';

type ShopProps = {
  children: ReactNode;
};

const Shop = ({ children }: ShopProps) => {
  return (
    <section id='shop'>
      <h2>Smakrika skorpor för alla tillfällen</h2>

      <ul id='products'>{children}</ul>
    </section>
  );
};
export default Shop;
