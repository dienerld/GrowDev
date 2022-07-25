import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;
const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => state + action.payload,
    decrease: (state, action) => state - action.payload,
    reset: () => initialState,
  },
});

export const { increase, decrease, reset } = slice.actions;
export const counterReducers = slice.reducer;
