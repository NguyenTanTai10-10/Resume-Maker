const urlSever = 'https://viecoi.vn/api/json';
const Ver = 2;
const language = 'vi';

import axios from 'axios';
import {Alert} from 'react-native';
function* LoginUser(input) {
  // console.log("SIGN IN: ", "email-" + email, "password-" + password, "userType-" + userType, "registrationIds-" + registrationIds, "FacebookId-" + FacebookId, "GoogleId-" + GoogleId)
  let temp;
  yield axios
    .post(urlSever, {
      method: 'is_login',
      version: Ver,
      params: {
        type: input.userType,
        email: input.email,
        password: input.password,
        os: '5',
        registration_ids: input.registrationIds,
        facebook_id: input.FacebookId,
        google_id: input.GoogleId,
      },
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  const result = yield temp.result_code === 1 ? temp : false;
  return result;
}
//========================================================
function* CheckEmail(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'check_email_exits',
      version: Ver,
      params: {email: input.email},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
//========================================================
function* ListCV(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_template_cv',
      params: {
        template_cv_id: input.template_cv_id,
         lang_code: language
        },
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
export const API = {
  LoginUser,
  CheckEmail,
  ListCV,
};
