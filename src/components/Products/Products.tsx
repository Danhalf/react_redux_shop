import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard.tsx';
import { fetchProducts } from './ProductsSlice.ts';

export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const Products: FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products mt-10 container">
      <ul className="flex justify-around flex-wrap md:justify-between gap-x-8 gap-y-12">
        {loading && <p>Loading...</p>}
        {error ? <h2>Error: {error}</h2> : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ul>
    </div>
  );
};
export default Products;
