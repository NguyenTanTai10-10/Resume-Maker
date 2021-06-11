import {
    GET_EDIT_LANGUAGE,
    GET_EDIT_LANGUAGE_SUCCESS,
    GET_EDIT_LANGUAGE_ERROR
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const getEditLangReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_EDIT_LANGUAGE:
        console.log('GET_EDIT_LANGUAGE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_EDIT_LANGUAGE_SUCCESS:
        console.log('GET_EDIT_LANGUAGE_SUCCESS');
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
  
      case GET_EDIT_LANGUAGE_ERROR:
        console.log('GET_EDIT_LANGUAGE_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
  
      default:
        return state;
    }
  };
  export default getEditLangReducer;
  