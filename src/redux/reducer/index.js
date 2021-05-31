import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';
import listCVReducer from './ListCvReducer';
import getCityReducer from './GetcityReducer';
import registerReducer from './RegisterReducer';
import editAvatarReducer from './EditAvatarReducer';
import infoUserReducer from './InfoUserReducer';




const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer,
   listCVReducer,
   getCityReducer,
   registerReducer,
   editAvatarReducer,
   infoUserReducer
});

export default allReducers;
