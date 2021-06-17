import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('LOGIN');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: action.data.result_code=== 1 ?'Đăng nhập thành công':'Đăng nhập thất bại',
      };

    case LOGIN_ERROR:
      console.log('LOGIN_ERROR');
      return {
        // ...state,
        status: null,
        loading: false,
        data: null,

        error: 'Lỗi sever',
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};
export default loginReducer;
