import { createPortal } from 'react-dom';

import CartItemDisplay from './CartItemDisplay';

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  return createPortal(
    <>
      <div className='cart-backdrop' />
      <dialog id='cart-modal' open>
        <h2>Din kundvagn</h2>
        <CartItemDisplay />
        <p id='cart-actions'>
          <button onClick={onClose}>Stäng</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
};
export default Cart;
