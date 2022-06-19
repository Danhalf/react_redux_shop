import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IProductData } from '../../types';

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
  cart: IProductData | [];
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
    addToCart: (state, { payload }) => {
      const { cart } = state;
      cart.push({ ...payload, count: 1 });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
