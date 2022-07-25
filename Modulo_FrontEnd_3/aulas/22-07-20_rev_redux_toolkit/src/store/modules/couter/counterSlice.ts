import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;
const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateState: (state, action) => state + action.payload,
    clearState: () => initialState,
  },
});

export const { updateState, clearState } = slice.actions;
export const counterSlice = slice.reducer;
