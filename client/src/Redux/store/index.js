import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesReducer from '../reducers';


export const store = createStore(
  countriesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);