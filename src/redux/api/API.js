const urlSever = 'https://viecoi.vn/api/json';
const Ver = 2;
const language = 'vi';

import axios from 'axios';
import {Alert} from 'react-native';
function* LoginUser(input) {
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
        lang_code: language,
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
//========================================================
function* GetCity(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_city',
      version: Ver,
      params: {
        city_id: input.city_id,
        country_id: input.country_id,
        lang_code: language,
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
//========================================================
function* Register(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'register_jobseekers',
      version: Ver,
      params: {
        email: input.email,
        password: input.password,
        name: input.name,
        address: input.address,
        country: 250,
        city: input.city,
        phone: input.phone,
        functional_role: 69,
        birthday: input.birthday,
        gender: input.gender,
        facebook_id: input.facebook_id,
        google_id: input.google_id,
        os_register: 3,
        lang_code: language,
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
//========================================================
function* EditAvatar(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_logo',
      version: Ver,
      params: {user_id: input.user_id, image: input.image},
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
function* InforUser(input) {
  console.log(input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_detail_cv',
      version: Ver,
      params: {
        user_id: input.user_id,
        emp_id: input.emp_id,
        lang_code: language,
        is_app_cv: input.is_app_cv,
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
//========================================================
function* EditInfoUser(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_info_jobseeker',
      version: Ver,
      params: {
        user_id: input.user_id,
        email: input.email,
        name: input.name,
        birthday: input.name,
        gender: input.gender,
        marital_status: '1',
        address: input.address,
        city: input.city,
        phone: input.phone,
        skype: '',
        langCode: language,
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
  GetCity,
  Register,
  EditAvatar,
  InforUser,
  EditInfoUser
};
