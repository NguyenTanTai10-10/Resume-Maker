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
export const LOGOUT = 'LOGOUT';
export const logoutAction = () => {
  return {
    type: LOGOUT,
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

export const EDIT_AVATAR = 'EDIT_AVATAR';
export const EDIT_AVATAR_SUCCESS = 'EDIT_AVATAR_SUCCESS';
export const EDIT_AVATAR_ERROR = 'EDIT_AVATAR_ERROR';
export const editAvatarAction = (input) => {
  return {
    type: EDIT_AVATAR,
    input: input,
  };
};
//===================================================================================
export const INFO_USER = 'INFO_USER';
export const INFO_USER_SUCCESS = 'INFO_USER_SUCCESS';
export const INFO_USER_ERROR = 'INFO_USER_ERROR';
export const infoUserAction = (input) => {
  console.log('actions==444', input);
  return {
    type: INFO_USER,
    input: input,
  };
};
export const LOGOUT_INFO_USER = 'LOGOUT_INFO_USER';
export const logoutInfoUserAction = () => {
  return {
    type: LOGOUT_INFO_USER,
  };
};
//===================================================================================
export const EDIT_INFO_USER = 'EDIT_INFO_USER';
export const EDIT_INFO_USER_SUCCESS = 'EDIT_INFO_USER_SUCCESS';
export const EDIT_INFO_USER_ERROR = 'EDIT_INFO_USER_ERROR';
export const editInfoUserAction = (input) => {
  return {
    type: EDIT_INFO_USER,
    input: input,
  };
};
export const LOGOUT_EDIT_INFO_USER = 'LOGOUT_EDIT_INFO_USER';
export const logoutEditInfoUserAction = () => {
  return {
    type: LOGOUT_EDIT_INFO_USER,
  };
};
//===================================================================================
export const EDIT_CIVI = 'EDIT_CIVI';
export const EDIT_CIVI_SUCCESS = 'EDIT_CIVI_SUCCESS';
export const EDIT_CIVI_ERROR = 'EDIT_CIVI_ERROR';
export const editCiviAction = (input) => {
  console.log("input===",input);
  return {
    type: EDIT_CIVI,
    input: input,
  };
};
export const LOGOUT_EDIT_CIVI = 'LOGOUT_EDIT_CIVI';
export const logoutEditCiviAction = () => {
  return {
    type: LOGOUT_EDIT_CIVI,
  };
};
//===================================================================================
export const GET_INDUSTRY = 'GET_INDUSTRY';
export const GET_INDUSTRY_SUCCESS = 'GET_INDUSTRY_SUCCESS';
export const GET_INDUSTRY_ERROR = 'GET_INDUSTRY_ERROR';
export const getIndustryAction = (input) => {
  return {
    type: GET_INDUSTRY,
    input: input,
  };
};
//===================================================================================
export const GET_LEVER = 'GET_LEVER';
export const GET_LEVER_SUCCESS = 'GET_LEVER_SUCCESS';
export const GET_LEVER_ERROR = 'GET_LEVER_ERROR';
export const getLeverAction = (input) => {
  return {
    type: GET_LEVER,
    input: input,
  };
};
//===================================================================================
export const GET_QUALITIFICATIONS = 'GET_QUALITIFICATIONS';
export const GET_QUALITIFICATIONS_SUCCESS = 'GET_QUALITIFICATIONS_SUCCESS';
export const GET_QUALITIFICATIONS_ERROR = 'GET_QUALITIFICATIONS_ERROR';
export const getQualitificationrAction = (input) => {
  return {
    type: GET_QUALITIFICATIONS,
    input: input,
  };
};
//===================================================================================
export const GET_FUNCTIONS_ROLE = 'GET_FUNCTIONS_ROLE';
export const GET_FUNCTIONS_ROLE_SUCCESS = 'GET_FUNCTIONS_ROLE_SUCCESS';
export const GET_FUNCTIONS_ROLE_ERROR = 'GET_FUNCTIONS_ROLE_ERROR';
export const getFunctionRoleAction = (input) => {
  return {
    type: GET_FUNCTIONS_ROLE,
    input: input,
  };
};
//===================================================================================
export const INSERT_EDUCATION = 'INSERT_EDUCATION';
export const INSERT_EDUCATION_SUCCESS = 'INSERT_EDUCATION_SUCCESS';
export const INSERT_EDUCATION_ERROR = 'INSERT_EDUCATION_ERROR';
export const insertEducationAction = (input) => {
  return {
    type: INSERT_EDUCATION,
    input: input,
  };
};
export const LOGOUT_INSERT_EDUCATION = 'LOGOUT_INSERT_EDUCATION';
export const logoutInsertEduAction = () => {
  return {
    type: LOGOUT_INSERT_EDUCATION,
  };
};
//===================================================================================
export const GET_EDUCATION = 'GET_EDUCATION';
export const GET_EDUCATION_SUCCESS = 'GET_EDUCATION_SUCCESS';
export const GET_EDUCATION_ERROR = 'GET_EDUCATION_ERROR';
export const getEducationAction = (input) => {
  return {
    type: GET_EDUCATION,
    input: input,
  };
};
//===================================================================================
export const EDIT_EDUCATION = 'EDIT_EDUCATION';
export const EDIT_EDUCATION_SUCCESS = 'EDIT_EDUCATION_SUCCESS';
export const EDIT_EDUCATION_ERROR = 'EDIT_EDUCATION_ERROR';
export const editEducationAction = (input) => {
  return {
    type: EDIT_EDUCATION,
    input: input,
  };
};
export const LOGOUT_EDIT_EDUCATION = 'LOGOUT_EDIT_EDUCATION';
export const logoutEditEduAction = () => {
  return {
    type: LOGOUT_EDIT_EDUCATION,
  };
};
//===================================================================================
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const DELETE_EDUCATION_SUCCESS = 'DELETE_EDUCATION_SUCCESS';
export const DELETE_EDUCATION_ERROR = 'DELETE_EDUCATION_ERROR';
export const deleteEducationAction = (input) => {
  return {
    type: DELETE_EDUCATION,
    input: input,
  };
};
export const LOGOUT_DELETE_EDUCATION = 'LOGOUT_DELETE_EDUCATION';
export const logoutDeleteEduAction = () => {
  return {
    type: LOGOUT_DELETE_EDUCATION,
  };
};
//===================================================================================
export const GET_LEVER_SC6 = 'GET_LEVER_SC6';
export const GET_LEVER_SC6_SUCCESS = 'GET_LEVER_SC6_SUCCESS';
export const GET_LEVER_SC6_ERROR = 'GET_LEVER_SC6_ERROR';
export const getLeverSr6Action = (input) => {
  return {
    type: GET_LEVER_SC6,
    input: input,
  };
};
//===================================================================================
export const INSERT_SKILL = 'INSERT_SKILL';
export const INSERT_SKILL_SUCCESS = 'INSERT_SKILL_SUCCESS';
export const INSERT_SKILL_ERROR = 'INSERT_SKILL_ERROR';
export const insertSkillAction = (input) => {
  return {
    type: INSERT_SKILL,
    input: input,
  };
};
export const LOGOUT_INSERT_SKILL = 'LOGOUT_INSERT_SKILL';
export const logoutInsertSkillAction = () => {
  return {
    type: LOGOUT_INSERT_SKILL,
  };
};
//===================================================================================
export const EDIT_SKILL = 'EDIT_SKILL';
export const EDIT_SKILL_SUCCESS = 'EDIT_SKILL_SUCCESS';
export const EDIT_SKILL_ERROR = 'EDIT_SKILL_ERROR';
export const editSkillAction = (input) => {
  return {
    type: EDIT_SKILL,
    input: input,
  };
};
export const LOGOUT_EDIT_SKILL = 'LOGOUT_EDIT_SKILL';
export const logoutSkillAction = () => {
  return {
    type: LOGOUT_EDIT_SKILL,
  };
};
//===================================================================================
export const DELETE_SKILL = 'DELETE_SKILL';
export const DELETE_SKILL_SUCCESS = 'DELETE_SKILL_SUCCESS';
export const DELETE_SKILL_ERROR = 'DELETE_SKILL_ERROR';
export const deleteSkillAction = (input) => {
  return {
    type: DELETE_SKILL,
    input: input,
  };
};
export const LOGOUT_DELETE_SKILL = 'LOGOUT_DELETE_SKILL';
export const logoutDeleteSkillAction = () => {
  return {
    type: LOGOUT_DELETE_SKILL,
  };
};
//===================================================================================
export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const ADD_LANGUAGE_SUCCESS = 'ADD_LANGUAGE_SUCCESS';
export const ADD_LANGUAGE_ERROR = 'ADD_LANGUAGE_ERROR';
export const addLanguageAction = (input) => {
  return {
    type: ADD_LANGUAGE,
    input: input,
  };
};
//===================================================================================
export const INSERT_LANGUAGE = 'INSERT_LANGUAGE';
export const INSERT_LANGUAGE_SUCCESS = 'INSERT_LANGUAGE_SUCCESS';
export const INSERT_LANGUAGE_ERROR = 'INSERT_LANGUAGE_ERROR';
export const insertLangAction = (input) => {
  return {
    type: INSERT_LANGUAGE,
    input: input,
  };
};
export const LOGOUT_INSERT_LANGUAGE = 'LOGOUT_INSERT_LANGUAGE';
export const logoutInsertLangAction = () => {
  return {
    type: LOGOUT_INSERT_LANGUAGE,
  };
};
//===================================================================================
export const GET_EDIT_LANGUAGE = 'GET_EDIT_LANGUAGE';
export const GET_EDIT_LANGUAGE_SUCCESS = 'GET_EDIT_LANGUAGE_SUCCESS';
export const GET_EDIT_LANGUAGE_ERROR = 'GET_EDIT_LANGUAGE_ERROR';
export const getEditlangAction = (input) => {
  // console.log(input);
  return {
    type: GET_EDIT_LANGUAGE,
    input: input,
  };
};
//===================================================================================
export const EDIT_LANGUAGE = 'EDIT_LANGUAGE';
export const EDIT_LANGUAGE_SUCCESS = 'EDIT_LANGUAGE_SUCCESS';
export const EDIT_LANGUAGE_ERROR = 'EDIT_LANGUAGE_ERROR';
export const editLangAction = (input) => {
  return {
    type: EDIT_LANGUAGE,
    input: input,
  };
};
export const LOGOUT_EDIT_LANGUAGE = 'LOGOUT_EDIT_LANGUAGE';
export const logoutEditLangAction = () => {
  return {
    type: LOGOUT_EDIT_LANGUAGE,
  };
};
//===================================================================================
export const DELETE_LANGUAGE = 'DELETE_LANGUAGE';
export const DELETE_LANGUAGE_SUCCESS = 'DELETE_LANGUAGE_SUCCESS';
export const DELETE_LANGUAGE_ERROR = 'DELETE_LANGUAGE_ERROR';
export const deleteLangAction = (input) => {

  return {
    type: DELETE_LANGUAGE,
    input: input,
  };
};
export const LOGOUT_DELETE_LANGUAGE = 'LOGOUT_DELETE_LANGUAGE';
export const logoutDeleteLangAction = () => {
  return {
    type: LOGOUT_DELETE_LANGUAGE,
  };
};
//===================================================================================
export const GET_TECHNIQUE = 'GET_TECHNIQUE';
export const GET_TECHNIQUE_SUCCESS = 'GET_TECHNIQUE_SUCCESS';
export const GET_TECHNIQUE_ERROR = 'GET_TECHNIQUE_ERROR';
export const getTechniqueAction = (input) => {

  return {
    type: GET_TECHNIQUE,
    input: input,
  };
};
//===================================================================================
export const UPDATE_TECHNIQUE = 'UPDATE_TECHNIQUE';
export const UPDATE_TECHNIQUE_SUCCESS = 'UPDATE_TECHNIQUE_SUCCESS';
export const UPDATE_TECHNIQUE_ERROR = 'UPDATE_TECHNIQUE_ERROR';
export const updateTechAction = (input) => {

  return {
    type: UPDATE_TECHNIQUE,
    input: input,
  };
};
export const LOGOUT_UPDATE_TECHNIQUE = 'LOGOUT_UPDATE_TECHNIQUE';
export const logoutUpdateTechAction = () => {
  return {
    type: LOGOUT_UPDATE_TECHNIQUE,
  };
};
//===================================================================================

export const CHANGE_PASS = 'CHANGE_PASS';
export const CHANGE_PASS_SUCCESS = 'CHANGE_PASS_SUCCESS';
export const CHANGE_PASS_ERROR = 'CHANGE_PASS_ERROR';
export const changePassAction = (input) => {

  return {
    type: CHANGE_PASS,
    input: input,
  };
};

