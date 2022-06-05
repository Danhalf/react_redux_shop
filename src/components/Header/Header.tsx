import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FaShoppingCart } from 'react-icons/fa';
// import CartItem from './Cart/CartItem.tsx';

const logoImage = './assets/images/shop_logo.svg';

const Header: FC = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  // const [total, setTotal] = useState(0);

  const currency = '$';

  // const sumPrices = await cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <header className="header bg-gradient-to-tl from-green-400 to-blue-300 w-full">
      <div className="flex items-center justify-between relative  container  py-2 z-40">
        <Link className="w-20 p-2" to="#">
          <img className="fill-red-400" src={logoImage} alt="shoplogo" />
        </Link>

        <div
          className={cn('absolute transition-all duration-500 z-[-1] shadow-md top-24 right-0  p-3 bg-green-400/80 rounded-bl-lg', {
            hidden: !isShowCart,
          })}
        >
          {/* {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))} */}
          <div className="text-lg my-4 py-4 text-right border-t">
            Total: <b>{0}</b> {currency}
          </div>
        </div>
        <button
          className="p-3 hover:text-red-400"
          onClick={() => {
            setIsShowCart(!isShowCart);
          }}
        >
          <FaShoppingCart size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;
