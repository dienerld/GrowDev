import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type TUser = {
  id: number;
  name: string;
  age: number;
}

type TAction = {
  payload: TUser;
}

const initialState = {} as TUser;
export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id: number) => (
  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
).data);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, { payload }: TAction) => {
      state.id = payload.id;
      state.name = payload.name;
      state.age = payload.age;
    });
  },
});

export const userReducers = userSlice.reducer;
