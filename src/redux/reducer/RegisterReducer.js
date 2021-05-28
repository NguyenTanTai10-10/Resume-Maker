import {REGISTER,REGISTER_SUCCESS,REGISTER_ERROR,LOGOUTREGISTER} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const registerReducer = (state = initState, action) => {
//   console.log('action===', action);
  switch (action.type) {
    case REGISTER:
      console.log('REGISTER');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case REGISTER_SUCCESS:
      console.log('REGISTER_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: action.data.result_code===1?"Đăng ký hoàn tất":"Email này đã tồn tại",
      };

    case REGISTER_ERROR:
      console.log('REGISTER_ERROR');
      return {
        // ...state,
        status: null,
        loading: false,
        data: null,

        message: 'Lối sever',
      };
      case LOGOUTREGISTER:
      return initState;
    
    default:
      return state;
  }
};
export default registerReducer;
