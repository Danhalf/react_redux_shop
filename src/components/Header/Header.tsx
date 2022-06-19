import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart/Cart.tsx';

const logoImage = './assets/images/shop_logo.svg';

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <header className="header bg-gradient-to-tl from-green-400 to-blue-300 w-full">
      <div className="flex items-center justify-between relative  container  py-2 z-40">
        <Link className="w-20 p-2" to="#">
          <img className="fill-red-400" src={logoImage} alt="shoplogo" />
        </Link>

        <Cart isShowCart={isShowCart} />

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
