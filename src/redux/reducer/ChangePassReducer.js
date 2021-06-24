import {
   CHANGE_PASS,
   CHANGE_PASS_SUCCESS,
   CHANGE_PASS_ERROR
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const changePassReducer = (state = initState, action) => {
    switch (action.type) {
      case CHANGE_PASS:
        console.log('CHANGE_PASS');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case CHANGE_PASS_SUCCESS:
        console.log('CHANGE_PASS_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message:
            action.data.result_code === 1
              ? 'Cập nhật thông tin thành công'
              : 'Mật khẩu cũ sai',
        };
  
      case CHANGE_PASS_ERROR:
        console.log('CHANGE_PASS_ERROR');
        return {
          error: 'Lối sever',
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
    //   case LOGOUT_EDIT_EDUCATION:
    //     console.log('LOGOUT_EDIT_EDUCATION');
    //     return {
    //       initState,
    //     };
  
      default:
        return state;
    }
  };
  export default changePassReducer;
  