import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './modules/couter/rootReducers';

export const reduxStore = configureStore({
  reducer: rootReducers,
});
