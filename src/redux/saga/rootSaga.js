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
    watchDeleteEducation()

  ]);
}
