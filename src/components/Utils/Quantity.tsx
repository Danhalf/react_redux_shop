import React, { useState } from 'react';

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const setQuantityHandler = (value) => (value > 0 ? setQuantity(value) : setQuantity(0));

  return (
    <div className="flex items-center mx-auto">
      <button onClick={() => setQuantityHandler(quantity - 1)}>-</button>
      <input
        type="number"
        className="mx-2 w-12 border outline-none text-center"
        onChange={(event) => setQuantityHandler(+event.target.value)}
        value={quantity}
      />
      <button onClick={() => setQuantityHandler(quantity + 1)}>+</button>
    </div>
  );
};

export default Quantity;
