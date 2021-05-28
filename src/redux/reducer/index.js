import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';
import listCVReducer from './ListCvReducer';
import getCityReducer from './GetcityReducer';
import registerReducer from './RegisterReducer';




const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer,
   listCVReducer,
   getCityReducer,
   registerReducer
});

export default allReducers;
