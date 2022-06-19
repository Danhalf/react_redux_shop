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
}

interface ICartItem extends IProductData {
  count: number;
}

export { IProductData, ICartItem };
