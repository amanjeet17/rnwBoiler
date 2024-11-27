import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './reducers/authReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const loggerMiddleware = createLogger({
  predicate: () => true,
  timestamp: true,
  diff: true,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = compose(applyMiddleware(loggerMiddleware));

export const store = createStore(persistedReducer, composeEnhancers);
export const persistor = persistStore(store);
persistor.purge()