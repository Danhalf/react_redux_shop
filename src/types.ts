interface IRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: string | number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: IRating;
}

interface ICartItem extends IProduct {
  count: number;
}

export { IProduct, ICartItem };
