import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { decreaseitem, increaseitem, removeitem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  // console.log(dispatch(decreaseitem(id)));
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch}>
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increaseitem(id));
          }}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeitem(id));
              return;
            }
            dispatch(decreaseitem(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
