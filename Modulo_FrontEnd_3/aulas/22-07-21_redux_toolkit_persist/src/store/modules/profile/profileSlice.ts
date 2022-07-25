/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    save: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;

      return state;
    },
  },
});

export const { save } = slice.actions;
export const profileReducers = slice.reducer;
