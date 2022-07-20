import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootPersistReducers from './persistReducers';
import { reducers } from './modules/rootReducers';

export const store = createStore(
  rootPersistReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
