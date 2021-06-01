export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginAction = (input) => {
  // console.log('loginAction==',input);
  return {
    type: LOGIN,
    input: input,
  };
};
//===================================================================================
export const CHECKEMAIL = 'CHECKEMAIL';
export const CHECKEMAIL_SUCCESS = 'CHECKEMAIL_SUCCESS';
export const CHECKEMAIL_ERROR = 'CHECKEMAIL_ERROR';
export const checkEmailAction = (input) => {
  return {
    type: CHECKEMAIL,
    input: input,
  };
};
export const LOGOUTCHECKEMAIL = 'LOGOUTCHECKEMAIL';
export const logoutCheckMailAction = () => {
  return {
    type: LOGOUTCHECKEMAIL,
  };
};
//===================================================================================
export const LOGOUT = 'LOGOUT';
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
//===================================================================================
export const LISTCV = 'LISTCV';
export const LISTCV_SUCCESS = 'LISTCV_SUCCESS';
export const LISTCV_ERROR = 'LISTCV_ERROR';
export const listCvAction = (input) => {
  return {
    type: LISTCV,
    input: input,
  };
};
//===================================================================================
export const GETCITY = 'GETCITY';
export const GETCITY_SUCCESS = 'GETCITY_SUCCESS';
export const GETCITY_ERROR = 'GETCITY_ERROR';
export const getCityAction = (input) => {
  return {
    type: GETCITY,
    input: input,
  };
};
//===================================================================================
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerAction = (input) => {
  console.log(input);
  return {
    type: REGISTER,
    input: input,
  };
};
export const LOGOUTREGISTER = 'LOGOUTREGISTER';
export const logoutRegisterlAction = () => {
  return {
    type: LOGOUTREGISTER,
  };
};
//===================================================================================
export const EDITAVATAR = 'EDITAVATAR';
export const EDITAVATAR_SUCCESS = 'EDITAVATAR_SUCCESS';
export const EDITAVATAR_ERROR = 'GEDITAVATAR_ERROR';
export const editAvatarAction = (input) => {
  console.log(input);
  return {
    type: EDITAVATAR,
    input: input,
  };
};
//===================================================================================
export const INFO_USER = 'INFO_USER';
export const INFO_USER_SUCCESS = 'INFO_USER_SUCCESS';
export const INFO_USER_ERROR = 'INFO_USER_ERROR';
export const  infoUserAction = (input) => {
  return {
    type: INFO_USER,
    input: input,
  };
};
//===================================================================================
export const EDIT_INFO_USER = 'EDIT_INFO_USER';
export const EDIT_INFO_USER_SUCCESS = 'EDIT_INFO_USER_SUCCESS';
export const EDIT_INFO_USER_ERROR = 'EDIT_INFO_USER_ERROR';
export const  editInfoUserAction = (input) => {
  return {
    type: EDIT_INFO_USER,
    input: input,
  };
};



