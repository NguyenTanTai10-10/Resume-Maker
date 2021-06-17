import {
    EDIT_SKILL,
    EDIT_SKILL_SUCCESS,
    EDIT_SKILL_ERROR,
    LOGOUT_EDIT_SKILL,
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const editSkillReducer = (state = initState, action) => {
    switch (action.type) {
      case EDIT_SKILL:
        console.log('EDIT_SKILL');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case EDIT_SKILL_SUCCESS:
        console.log('EDIT_SKILL_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message:
            action.data.result_code === 1 ? 'Cập nhật thông tin thành công' : 'Cập nhật không thành công',
        };
  
      case EDIT_SKILL_ERROR:
        console.log('EDIT_SKILL_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
  
          message: 'Lối sever',
        };
      case LOGOUT_EDIT_SKILL:
        console.log('LOGOUT_EDIT_SKILL');
        return {
          initState,
        };
      default:
        return state;
    }
  };
  export default editSkillReducer;
  