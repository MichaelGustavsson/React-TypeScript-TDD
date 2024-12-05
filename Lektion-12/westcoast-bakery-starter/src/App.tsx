import Header from './components/Header';
import Product from './components/Product';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
    // <main>
    //   <section className='background'></section>
    //   <h1>Westcoast Bakery</h1>;
    // </main>
  );
}

export default App;
