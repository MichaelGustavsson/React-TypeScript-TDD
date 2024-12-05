import { useState } from 'react';
import Cart from './Cart';

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleOpenCartClick = () => {
    setCartIsVisible(true);
  };

  const handleCloseCartClick = () => {
    setCartIsVisible(false);
  };

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <h1>Westcoast Bakery</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>
            <i className='fa-sharp fa-regular fa-cart-shopping'></i> (0)
          </button>
        </p>
      </header>
    </>
  );
};
export default Header;
