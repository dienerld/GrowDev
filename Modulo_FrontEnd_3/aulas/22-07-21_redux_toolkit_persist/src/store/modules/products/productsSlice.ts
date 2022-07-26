import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

type TProducts = {
  id: number,
  title: string,
  price: number,
}

const adapter = createEntityAdapter<TProducts>({
  selectId: (product) => product.id,
});

const slice = createSlice({
  name: 'products',
  initialState: adapter.getInitialState(),
  reducers: {
    addProduct: adapter.addOne,
    removeProduct: adapter.removeOne,
    updateProduct: adapter.updateOne,

  },
});

export const productsReducers = slice.reducer;
export const { addProduct, removeProduct, updateProduct } = slice.actions;
export const selectorProduct = adapter.getSelectors((state: any) => state.products);
