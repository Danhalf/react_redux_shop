import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FaShoppingCart } from 'react-icons/fa';

import logoImage from '../assets/images/shop_logo.svg';
import sweater from '../assets/images/sweater-62.jpg';
import { ICartItem } from '../types';

const cartItems: ICartItem[] = [
  { id: 'swtpro', imagePath: sweater, name: 'Sweater Pro', count: 1, price: 42 },
  { id: 'swtprox', imagePath: sweater, name: 'Sweater Pro-X', count: 1, price: 22 },
];

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const currency = '$';
  const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="flex items-center justify-between relative bg-gradient-to-r from-green-400 to-blue-500 py-2 z-40">
      <Link className="w-20 p-2" to="#">
        <img className="fill-red-400" src={logoImage} alt="shoplogo" />
      </Link>

      <div
        className={cn('absolute transition-all duration-500 z-[-1] top-24 right-0  p-3 bg-blue-500/80 rounded-bl-lg', {
          hidden: !isShowCart,
        })}
      >
        {' '}
        {cartItems.map((item) => (
          <div className="flex items-center" key={item.id}>
            <img className="w-12 h-12 m-3" src={item.imagePath} alt={item.name} />
            <h3 className="mx-2">{item.name}</h3>
            <div>{`${item.count} x ${item.price}`}</div>
          </div>
        ))}
        <div className="text-lg">
          Total: <b>{total}</b> {currency}
        </div>
      </div>
      <button
        className="p-3 hover:text-red-400"
        onClick={() => {
          setIsShowCart(!isShowCart);
        }}
      >
        <FaShoppingCart size={50} />
      </button>
    </div>
  );
};

export default Header;
