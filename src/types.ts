interface IRating {
  rate: number;
  count: number;
}

interface IProductData {
  id: string | number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: IRating;
  inStock?: number;
}

interface ICartItem extends IProductData {
  count: number;
  total: number;
}

export { IProductData, ICartItem };
