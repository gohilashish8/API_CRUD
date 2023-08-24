import { legacy_createStore ,compose , applyMiddleware } from "redux";
import rootReducer from './Redux/Reducer/index';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'students',
  storage,
  blacklist : ['studentReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = legacy_createStore( persistedReducer , composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(Store)
export  { Store, persistor };
