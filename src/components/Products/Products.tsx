import React, { FC, useEffect, useState } from 'react';
// import { IProduct } from '../../types';
import ProductCart from './ProductCart.tsx';

const productsUrl = 'https://fakestoreapi.com/products';

export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const Products: FC = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchItem = () => http<IProduct>(productsUrl);
  //   fetchItem().then(async (res: IProduct) => {
  //     await setProducts([res]);
  //     console.log(products);
  //   });
  // }, [products]);

  useEffect(() => {
    fetch(productsUrl)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="products mt-10 container">
      <ul className="flex justify-around flex-wrap md:justify-between gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Products;
