import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from './Cart/CartItem.tsx';

const logoImage = './assets/images/shop_logo.svg';

const Header: FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      count: 4,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: 109,
      count: 2,
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
  ]);
  const [isShowCart, setIsShowCart] = useState(false);

  const currency = '$';

  const sumPrices = cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0);

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
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
          <div className="text-lg my-4 py-4 text-right border-t">
            Total: <b>{sumPrices}</b> {currency}
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
