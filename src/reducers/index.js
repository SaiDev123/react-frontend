import { combineReducers } from 'redux';
import RegisterReducer from '../reducers/register' ;

const rootReducer = combineReducers({
   token: RegisterReducer
});

export default rootReducer;
