import React, { FC } from 'react';
import { BsCashCoin } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { IProductData } from '../../types';
import Quantity from '../Utils/Quantity.tsx';
import { addToCart } from './ProductsSlice.ts';

const ProductCart: FC = ({ product }: any) => {
  const dispatch = useDispatch();
  const { id, image, title, price }: IProductData = product;

  const addToCardHandler = () => dispatch(addToCart(product));

  return (
    <li
      key={id}
      className="w-64 cursor-pointer min-h-80 mb-6 flex flex-col justify-between text-center border p-2 border-slate-400 relative transition-all hover:border-slate-900 hover:bg-gradient-to-br hover:via-white from-white to-slate-100"
    >
      <img className="h-1/2" src={image} alt={title} />
      <h3 className="">{title}</h3>
      <div>Price: {price} $</div>
      <Quantity minValue={1} maxValue={10} />
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
