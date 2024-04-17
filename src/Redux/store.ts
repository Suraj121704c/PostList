import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';

// user defined imports
import {postReducer} from './Reducers/postReducer';

const appReducer = combineReducers({
  postReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
