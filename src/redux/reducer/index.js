import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';
import listCVReducer from './ListCvReducer';



const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer,
   listCVReducer
});

export default allReducers;
