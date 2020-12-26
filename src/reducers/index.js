import { combineReducers } from 'redux';
import UserReducer from './user' ;
const rootReducer = combineReducers({
   isUserLoggedIn: UserReducer
});

export default rootReducer;
