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
import getLeverSc6Reducer from './GetLeverSc6Reducer';
import insertSkillReducer from './InsertSkillReducer';
import editSkillReducer from './EditSkillReducer';
import deleteSkillReducer from './DeleteSkillReducer';
import addLanguageReducer from './AddLanguageReducer';
import insertLanguageReducer from './InsertLanguageReducer';
import getEditLangReducer from './GetEditLangReducer';
import editLangReducer from './EditLangReducer';
import deleteLangReducer from './DeleteLangReducer';
import getTechniqueReducer from './GetTechniqueReducer';
import updateTechReducer from './UpdatetechReducer';
import changePassReducer from './ChangePassReducer';
import exportPdfReducer from './ExportPdfReducer';



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
   deleteEducationReducer,
   getLeverSc6Reducer,
   insertSkillReducer,
   editSkillReducer,
   deleteSkillReducer,
   addLanguageReducer,
   insertLanguageReducer,
   getEditLangReducer,
   editLangReducer,
   deleteLangReducer,
   getTechniqueReducer,
   updateTechReducer,
   changePassReducer,
   exportPdfReducer
});

export default allReducers;
