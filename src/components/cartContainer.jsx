import { clearcart } from '../features/cart/cartSlice';
import { openmodal } from '../features/modal/modalSlice';
import CartItem from './cartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItem, total, amount } = useSelector(store => store.cart);

  //----------------------------------if amoux`nt goes less than 1
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'> is currently empty</h4>
        </header>
      </section>
    );
  }
  //----------------------------give cartitem[] to cartitem compo
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItem.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        {/*---------------------------------- total  */}
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openmodal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
