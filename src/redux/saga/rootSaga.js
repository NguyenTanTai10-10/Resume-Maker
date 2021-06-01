import { all } from 'redux-saga/effects';
import { watchCheckEmail } from './CheckEmailSaga';
import { watchEditAvatar } from './editAvatarSaga';
import { watchEditInfoUser } from './EditInfoUserSaga';
import { watchGetCity } from './GetCitySaga';
import { watchInfoUser } from './InfoUserSaga';
import { watchListCV } from './ListCvSaga';


import { watchLogin } from './LoginSaga';
import { watchRegister } from './registerSaga';


export default function* rootSaga() {
   yield all([
      watchLogin(),
      watchCheckEmail(),
      watchListCV(),
      watchGetCity(),
      watchRegister(),
      watchEditAvatar(),
      watchInfoUser(),
      watchEditInfoUser()
 
   ]);
}
