import { combineReducers } from 'redux';
import UserReducer from './user' ;
import ProductReducer from './products';

const rootReducer = combineReducers({
   isUserLoggedIn: UserReducer,
   products:ProductReducer
});
export default rootReducer;
