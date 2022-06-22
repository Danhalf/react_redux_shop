import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProductData } from '../../types';

const productsUrl = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(productsUrl);

    if (!response.ok) {
      throw new Error('Server Error!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// export const getProduct = createAsyncThunk('products/getProduct', async (id, { rejectWithValue, dispatch }) => {
//   try {
//     const response = await fetch(`${productsUrl}/${id}`, { method: 'GET' });

//     if (!response.ok) {
//       throw new Error('Server Error!');
//     }
//     console.log(await response.json());
//     dispatch(addToCart(id));
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

interface IProductsState {
  products: IProductData | [];
  cart: ICartItem | any[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductsState = {
  products: [],
  cart: [],
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<ICartItem>) => {
      const { cart } = state;
      const { id, count, price } = payload;
      const currentCart = Object.values(cart).map((item) => item.id);
      const isProductAdded = currentCart.findIndex((item) => item === id);
      if (isProductAdded < 0) {
        cart.push({ ...payload, total: count * price });
        return;
      }
      const currentProduct = cart[isProductAdded];
      currentProduct.count += count;
      currentProduct.total += count * price;
    },
    removeFromCart: (state, { payload }: PayloadAction<ICartItem>) => {
      const { id } = payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
