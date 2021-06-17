import {
    EDIT_LANGUAGE,
    EDIT_LANGUAGE_SUCCESS,
    EDIT_LANGUAGE_ERROR,
    LOGOUT_EDIT_LANGUAGE
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const editLangReducer = (state = initState, action) => {
    switch (action.type) {
      case EDIT_LANGUAGE:
        console.log('EDIT_LANGUAGE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case EDIT_LANGUAGE_SUCCESS:
        console.log('EDIT_LANGUAGE_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message:
            action.data.result_code === 1 ? 'Cập nhật thông tin thành công' : 'Cập nhật không thành công',
        };
  
      case EDIT_LANGUAGE_ERROR:
        console.log('EDIT_LANGUAGE_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
  
          message: 'Lối sever',
        };
      case LOGOUT_EDIT_LANGUAGE:
        console.log('LOGOUT_EDIT_LANGUAGE');
        return {
          initState,
        };
      default:
        return state;
    }
  };
  export default editLangReducer;
  