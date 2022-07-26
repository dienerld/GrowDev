import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducers } from './modules/rootReducers';

const persistConfig = {
  key: 'dnr_21-07_storage',
  storage,
  whitelist: ['counter', 'profile', 'user', 'products'],
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
