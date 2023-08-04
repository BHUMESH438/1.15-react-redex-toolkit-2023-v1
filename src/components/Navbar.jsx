import { useSelector } from 'react-redux';
import { CartIcon, BanIcon } from '../icons';

const Navbar = () => {
  const { amount } = useSelector(store => store.cart);
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux Toolkit</h3>
        <div className='nav-container'>
          <BanIcon />
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;