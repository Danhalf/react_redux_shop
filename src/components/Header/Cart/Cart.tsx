import cn from 'classnames';
import { useSelector } from 'react-redux';
import CartItem from './CartItem.tsx';

const Cart = ({ isShowCart }) => {
  const { cart } = useSelector((state: any) => state.products);
  const currency = '$';

  const sumPrices = () => +cart.reduce((acc, curr) => acc + curr.total, 0).toFixed(2);

  return (
    <div
      className={cn('absolute w-1/3 transition-all duration-500 z-[-1] shadow-md top-24 right-0  p-3 bg-green-400/80 rounded-bl-lg', {
        hidden: !isShowCart,
      })}
    >
      {cart.length ? cart.map((item) => <CartItem key={item.id} product={item} />) : <p>Cart is empty</p>}
      <div className="text-lg my-4 py-4 text-right border-t">
        Total: <b>{sumPrices()}</b> {currency}
      </div>
    </div>
  );
};

export default Cart;
