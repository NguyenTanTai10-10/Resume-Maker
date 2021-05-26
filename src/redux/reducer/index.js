import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';
import listCVReducer from './ListCvReducer';
import getCityReducer from './GetcityReducer';




const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer,
   listCVReducer,
   getCityReducer,
});

export default allReducers;
