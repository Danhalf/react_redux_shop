import React, { useState } from 'react';

const Quantity = ({ minValue, maxValue, getCount }) => {
  const [quantity, setQuantity] = useState(1);

  const setQuantityHandler = (value) => {
    if (value < minValue) {
      getCount(minValue);
      return setQuantity(minValue);
    }
    if (value > maxValue) {
      getCount(maxValue);
      return setQuantity(maxValue);
    }
    setQuantity(value);
    getCount(value);
  };

  return (
    <div className="flex items-center mx-auto">
      <button onClick={() => setQuantityHandler(quantity - 1)}>-</button>
      <input
        type="number"
        min={1}
        className="mx-2 w-12 border outline-none text-center"
        onChange={(event) => setQuantityHandler(+event.target.value)}
        value={quantity}
      />
      <button onClick={() => setQuantityHandler(quantity + 1)}>+</button>
    </div>
  );
};

export default Quantity;
