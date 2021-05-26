import { all } from 'redux-saga/effects';
import { watchCheckEmail } from './CheckEmailSaga';
import { watchGetCity } from './GetCitySaga';
import { watchListCV } from './ListCvSaga';


import { watchLogin } from './LoginSaga';


export default function* rootSaga() {
   yield all([
      watchLogin(),
      watchCheckEmail(),
      watchListCV(),
      watchGetCity(),
  
 
   ]);
}
