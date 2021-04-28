import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import apiReducer from './reducers';

const appReducers = combineReducers({
  apiReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

export const store = createStore(rootReducer, applyMiddleware(thunk));