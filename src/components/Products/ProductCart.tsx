import React, { FC } from 'react';
import { BsCashCoin } from 'react-icons/bs';
import { IProduct } from '../../types';
import Quantity from '../Utils/Quantity.tsx';

const ProductCart: FC<IProduct> = ({ product }: any) => {
  const { id, image, title, price } = product;

  const addToCardHandler = () => console.log(id);

  return (
    <li
      key={id}
      className="w-48 cursor-pointer min-h-80 flex flex-col justify-between text-center border p-2 border-slate-500 relative transition-all duration-300 hover:scale-105"
    >
      <img className="h-1/2" src={image} alt={title} />
      <h3 className="">{title}</h3>
      <div>Price: {price} $</div>
      <Quantity />
      <button
        onClick={addToCardHandler}
        className="flex p-4 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 items-center border bg-white hover:bg-slate-500 border-slate-500 rounded-full justify-center mx-auto"
      >
        <BsCashCoin size={30} />
      </button>
    </li>
  );
};

export default ProductCart;
