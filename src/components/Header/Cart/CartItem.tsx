import React from 'react';
import { FaTrash } from 'react-icons/fa';
// import { ICartItem } from '../../../types';

const CartItem = ({ product }) => {
  const { id, image, title, count, price } = product;

  const removeHandler = (id: string | number) => console.log(id);

  return (
    <li key={id}>
      <div className="flex items-center justify-between">
        <img className="w-12 h-12 m-3" src={image} alt={title} />
        <h3 className="mx-2">{title}</h3>
        <div>{`${count} x ${price}`}</div>
        <button
          className="p-3 hover:text-red-400"
          onClick={() => {
            removeHandler(id);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;