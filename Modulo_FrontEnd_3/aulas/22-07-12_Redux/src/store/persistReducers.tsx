import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: any) => {
  const persistedReducer = persistReducer({
    key: 'root_dnr_redux',
    storage,
    whitelist: ['count'],
  }, reducers);

  return persistedReducer;
};
