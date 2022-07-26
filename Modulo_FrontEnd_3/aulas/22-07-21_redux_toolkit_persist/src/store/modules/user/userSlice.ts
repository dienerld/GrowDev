import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Post = {
    id: number;
    title: string;
    text: string;
}

type TUser = {
  id: number;
  name: string;
  age: number;
  posts: Post[];
}

type TAction = {
  payload: TUser;
}

const initialState = {} as TUser;
export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id: number) => (
  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
).data);

export const fetchPostsByUserId = createAsyncThunk(
  'user/fetchPostsByUserId',
  async (userId: number) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return data;
  },
);

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
    builder.addCase(fetchPostsByUserId.fulfilled, (state, { payload }) => {
      state.posts = payload.map((post: any) => ({
        id: post.id,
        title: post.title,
        text: post.body,
      }));
    });
  },
});

export const userReducers = userSlice.reducer;
