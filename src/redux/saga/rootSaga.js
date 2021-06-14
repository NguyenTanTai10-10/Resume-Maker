import {all} from 'redux-saga/effects';
import {watchCheckEmail} from './CheckEmailSaga';
import {watchEditAvatar} from './editAvatarSaga';
import {watchEditCivi} from './EditCiviSaga';
import {watchEditInfoUser} from './EditInfoUserSaga';
import {watchGetCity} from './GetCitySaga';
import { watchGetIndustry } from './GetIndustrySaga';

import {watchListCV} from './ListCvSaga';
import {watchLogin} from './LoginSaga';
import {watchRegister} from './registerSaga';
import { watchUserInfo } from './UserInfoSaga';
import { watchGetLever } from './GetLeverReducer';
import { watchGetQualitification } from './GetQualitificationSaga';
import { watchGetFuncRole } from './GetFuncRoleSaga';
import { watchInsertEducation } from './InsertEducationSaga';

import { watchEditEducation } from './EditEducationSaga';
import { watchDeleteEducation } from './DeleteEducationSaga';
import { watchGetLeverSc6 } from './GetleverSc6Saga';
import { watchInsertSkill } from './InsertSkillSaga';
import { watchEditSkill } from './EditSkillSaga';
import { watchDeleteSkill } from './DeleteSkillSaga';
import { watchAddLanguage } from './AddLanguageSaga';
import { watchInsertLanguage } from './InsertLanguageSaga';
import { watchGetEditLang } from './GetEditLangSaga';
import { watchEditLang } from './EditLangSaga';
import { watchDeleteLang } from './DeleteLangSaga';
import { watchGetTechnique } from './GetTechniqueSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCheckEmail(),
    watchListCV(),
    watchGetCity(),
    watchRegister(),
    watchEditAvatar(),
    watchEditInfoUser(),
    watchEditCivi(),
    watchUserInfo(),
    watchGetIndustry(),
    watchGetLever(),
    watchGetQualitification(),
    watchGetFuncRole(),
    watchInsertEducation(),
    watchEditEducation(),
    watchDeleteEducation(),
    watchGetLeverSc6(),
    watchInsertSkill(),
    watchEditSkill(),
    watchDeleteSkill(),
    watchAddLanguage(),
    watchInsertLanguage(),
    watchGetEditLang(),
    watchEditLang(),
    watchDeleteLang(),
    watchGetTechnique()

  ]);
}
