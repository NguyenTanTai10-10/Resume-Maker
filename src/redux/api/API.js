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
  // console.log('API===', input);
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
      // console.log("response.data==",response.data);
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
//========================================================
function* EditInfoUser(input) {
  console.log('API++++++++++', input);
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
function* EditCivi(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_cv',
      version: 2,
      params: {
        cv_tittle: input.cv_tittle,
        industry_id: input.industry_id,
        functional_role_id: input.functional_role_id,
        csalary: input.csalary,
        is_hide_current_salary: input.is_hide_current_salary,
        esalary: input.esalary,
        is_negotiation: input.is_negotiation,
        level_group_id: input.level_group_id,
        location_id: input.location_id,
        user_id: input.user_id,
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
function* GetIndustry(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_industry',
      version: Ver,
      params: {industry_id: input.industry_id, lang_code: language},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
function* GetLever(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_level_group',
      version: Ver,
      params: {level_group_id: input.level_group_id, lang_code: language},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
function* GetQualitification(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_qualifications',
      version: Ver,
      params: {qualifications_id: input.qualifications_id, lang_code: language},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
function* GetFunctionRole(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_funcrole_role',
      version: Ver,
      params: {
        funcrole_group_id: input.funcrole_group_id,
        funcrole_role_id: input.funcrole_role_id,
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
function* insertEducation(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'insert_education',
      version: Ver,
      params: {
        qualification_id: input.qualification_id,
        functional_role_id: input.functional_role_id,
        institute: input.institute,
        month_of_pass: input.month_of_pass,
        year_of_pass: input.year_of_pass,
        month_of_end: input.month_of_end,
        year_of_end: input.year_of_end,
        user_id: input.user_id,
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

function* editEducation(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_education',
      version: Ver,
      params: {
        education_id: input.education_id,
        qualification_id: input.qualification_id,
        functional_role_id: input.functional_role_id,
        institute: input.institute,
        month_of_pass: input.month_of_pass,
        year_of_pass: input.year_of_pass,
        month_of_end: input.month_of_end,
        year_of_end: input.year_of_end,
        user_id: input.user_id,
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
function* DeleteEducation(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'delete_education',
      version: Ver,
      params: {education_id: input.education_id, user_id: input.user_id},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}
function* GetLeverSc6(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_level',
      version: Ver,
      params: {level_id: input.level_id, lang_code: language},
    })
    .then(function (response) {
      temp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return temp;
}

function* insertSkill(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'insert_skill',
      version: Ver,
      params: {
        skill_name: input.skill_name,
        company_name: input.company_name,
        main_job: input.main_job,
        experience_month_begin: input.experience_month_begin,
        experience_year_begin: input.experience_year_begin,
        experience_month_end: input.experience_month_end,
        experience_year_end: input.experience_year_end,
        is_now: input.is_now,
        level_id: input.level_id,
        user_id: input.user_id,
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
function* editSkill(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_skill',
      version: Ver,
      params: {
        skill_id: input.skill_id,
        skill_name: input.skill_name,
        company_name: input.company_name,
        main_job: input.main_job,
        experience_month_begin: input.experience_month_begin,
        experience_year_begin: input.experience_year_begin,
        experience_month_end: input.experience_month_end,
        experience_year_end: input.experience_year_end,
        is_now: input.is_now,
        level_id: input.level_id,
        user_id: input.user_id,
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
function* deleteSkill(input) {
  console.log(input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'delete_skill',
      version: Ver,
      params: {
        skill_id: input.education_id,
        user_id: input.user_id,
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
function* AddLanguage(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_language_add',
      version: Ver,
      params: {
        user_id: input.user_id,
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
function* InsertLanguage(input) {
  // console.log(input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'insert_language',
      version: Ver,
      params: {
        language_id: input.language_id,
        degree: input.degree,
        user_id: input.user_id,
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
function* GetEditLang(input) {
  // console.log(input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_language_edit',
      version: Ver,
      params: {
        lang_id: input.langs_id,
        user_id: input.users_id,
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
function* EditLang(input) {
  // console.log(input);
  let temp;
  yield axios
    .post(urlSever, {
      method: 'edit_language',
      version: Ver,
      params: {
        lang_id: input.lang_id,
        user_id: input.user_id,
        degree: input.degree,
        language_id: input.language_id,
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
function* DeleteLang(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'delete_language',
      version: Ver,
      params: {
        lang_id: input.lang_id,
        user_id: input.user_id,
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
function* getTechnique(input) {
  let temp;
  yield axios
    .post(urlSever, {
      method: 'get_tag_technique',
      version: 2,
      params: {
        lang_code: language,
        tag_technique_id: input.tag_technique_id,
        type: '2',
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
  EditInfoUser,
  EditCivi,
  GetIndustry,
  GetLever,
  GetQualitification,
  GetFunctionRole,
  insertEducation,
  editEducation,
  DeleteEducation,
  GetLeverSc6,
  insertSkill,
  editSkill,
  deleteSkill,
  AddLanguage,
  InsertLanguage,
  GetEditLang,
  EditLang,
  DeleteLang,
  getTechnique,
};
