import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './modules/rootReducers';

export const store = configureStore({
  reducer: rootReducers,
});
