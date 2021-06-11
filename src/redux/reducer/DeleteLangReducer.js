import {
    DELETE_LANGUAGE,
    DELETE_LANGUAGE_SUCCESS,
    DELETE_LANGUAGE_ERROR,
    LOGOUT_DELETE_LANGUAGE
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const deleteLangReducer = (state = initState, action) => {
    switch (action.type) {
      case DELETE_LANGUAGE:
        console.log('DELETE_LANGUAGE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case DELETE_LANGUAGE_SUCCESS:
        console.log('DELETE_LANGUAGE_SUCCESS');
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
  
      case DELETE_LANGUAGE_ERROR:
        console.log('DELETE_LANGUAGE_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
      case LOGOUT_DELETE_LANGUAGE:
        console.log('LOGOUT_DELETE_LANGUAGE');
        return {
          initState,
        };
      default:
        return state;
    }
  };
  export default deleteLangReducer;
  