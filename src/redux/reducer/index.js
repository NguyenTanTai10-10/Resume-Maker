import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';



const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer
});

export default allReducers;
