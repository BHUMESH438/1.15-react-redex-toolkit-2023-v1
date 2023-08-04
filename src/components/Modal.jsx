import { useDispatch } from 'react-redux';
import { clearcart } from '../features/cart/cartSlice';
import { closemodal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all items from your shopping cart</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(closemodal());
              dispatch(clearcart());
            }}
          >
            confirm
          </button>

          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearcart());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
