import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import checkEmailReducer from './CheckEmailReducer';
import listCVReducer from './ListCvReducer';
import getCityReducer from './GetcityReducer';
import registerReducer from './RegisterReducer';
import editAvatarReducer from './EditAvatarReducer';
import userInfoReducer from './UserInfoReducer';
import editInfoUserReducer from './EditInfoUserReducer';
import editCiviReducer from './EditCiviReducer';
import getIndustryReducer from './GetIndustryReducer';
import getLeverReducer from './GetLeverReducer';
import getQualitificationUserReducer from './GetQualitificationReducer';
import getFuncRoleReducer from './GetFuncRoleReducer';
import insertEducationReducer from './InsertEducationReducer';
import editEducationReducer from './EditEducationReducer';
import deleteEducationReducer from './DeleteEducationReducer';



const allReducers = combineReducers({
   loginReducer,
   checkEmailReducer,
   listCVReducer,
   getCityReducer,
   registerReducer,
   editAvatarReducer,
   userInfoReducer,
   editInfoUserReducer,
   editCiviReducer,
   getIndustryReducer,
   getLeverReducer,
   getQualitificationUserReducer,
   getFuncRoleReducer,
   insertEducationReducer,
   editEducationReducer,
   deleteEducationReducer
});

export default allReducers;
