import {
    INSERT_SKILL,
    INSERT_SKILL_SUCCESS,
    INSERT_SKILL_ERROR,
    LOGOUT_INSERT_SKILL,
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const insertSkillReducer = (state = initState, action) => {
    switch (action.type) {
      case INSERT_SKILL:
        console.log('INSERT_SKILL');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case INSERT_SKILL_SUCCESS:
        console.log('INSERT_SKILL_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message:
            action.data.result_code === 1
              ? 'Cập nhật thông tin thành công'
              : 'Cập nhật không thành công',
        };
  
      case INSERT_SKILL_ERROR:
        console.log('INSERT_SKILL_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
      case LOGOUT_INSERT_SKILL:
        console.log('LOGOUT_INSERT_SKILL');
        return {
          initState,
        };
  
      default:
        return state;
    }
  };
  export default insertSkillReducer;
  