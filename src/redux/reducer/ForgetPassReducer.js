import {
  FORGET_PASS,
  FORGET_PASS_SUCCESS,
  FORGET_PASS_ERROR,
  LOGOUT_FORGET_PASS,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const forgetPassReducer = (state = initState, action) => {

  switch (action.type) {
    case FORGET_PASS:
      console.log('FORGET_PASS');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case FORGET_PASS_SUCCESS:
      console.log('FORGET_PASS_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message:  action.data.result_code === 1 ? 'Vui lòng kiểm tra email của bạn' : 'Email không tồn tại',
      };

    case FORGET_PASS_ERROR:
      console.log('FORGET_PASS_ERROR');
      return {
        // ...state,
        status: null,
        loading: false,
        data: null,

        error: 'Lối sever',
      };
    case LOGOUT_FORGET_PASS:
      console.log('LOGOUT_FORGET_PASS');
      return {
        initState,
      };
    default:
      return state;
  }
};
export default forgetPassReducer;
