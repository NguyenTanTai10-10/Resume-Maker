import { all } from 'redux-saga/effects';
import { watchCheckEmail } from './CheckEmailSaga';


import { watchLogin } from './LoginSaga';


export default function* rootSaga() {
   yield all([
      watchLogin(),
      watchCheckEmail()
  
 
   ]);
}
