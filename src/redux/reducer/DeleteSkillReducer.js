import {
    DELETE_SKILL,
    DELETE_SKILL_SUCCESS,
    DELETE_SKILL_ERROR,
    LOGOUT_DELETE_SKILL,
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const deleteSkillReducer = (state = initState, action) => {
    switch (action.type) {
      case DELETE_SKILL:
        console.log('DELETE_SKILL');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case DELETE_SKILL_SUCCESS:
        console.log('DELETE_SKILL_SUCCESS');
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
  
      case DELETE_SKILL_ERROR:
        console.log('DELETE_SKILL_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
      case LOGOUT_DELETE_SKILL:
        console.log('LOGOUT_DELETE_SKILL');
        return {
          initState,
        };
      default:
        return state;
    }
  };
  export default deleteSkillReducer;
  