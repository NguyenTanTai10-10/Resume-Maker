import {
    ADD_LANGUAGE,
    ADD_LANGUAGE_SUCCESS,
    ADD_LANGUAGE_ERROR,
    LOGOUT_ADD_LANGUAGE
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const addLanguageReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_LANGUAGE:
        console.log('ADD_LANGUAGE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case ADD_LANGUAGE_SUCCESS:
        console.log('ADD_LANGUAGE_SUCCESS');
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
  
      case ADD_LANGUAGE_ERROR:
        console.log('ADD_LANGUAGE_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
      case LOGOUT_ADD_LANGUAGE:
        console.log('LOGOUT_ADD_LANGUAGE');
        return {
          initState,
        };
  
      default:
        return state;
    }
  };
  export default addLanguageReducer;
  