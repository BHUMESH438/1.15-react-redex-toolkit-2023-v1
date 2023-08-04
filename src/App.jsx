import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import CartContainer from './components/cartContainer';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';
function App() {
  const { cartItem, isLoading } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector(store => store.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);

  //----------------------------
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
