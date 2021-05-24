
import {CHECKEMAIL,CHECKEMAIL_SUCCESS,CHECKEMAIL_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const checkEmailReducer = (state = initState, action) => {
  console.log('action----',action);
  
  
  switch (action.type) {
    case CHECKEMAIL:
        console.log('CHECKEMAIL');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case CHECKEMAIL_SUCCESS:
        console.log('CHECKEMAIL_SUCCESS');
        return {
          // ...state,
          status:action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message : action.data.result_message === 654 ? "email có thể dùng": "email đã được đăng ký"
        };
  
      case CHECKEMAIL_ERROR:
        console.log('CHECKEMAIL_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
          
          message : "Lỗi"
        };
    default:
      return state;
  }
};
export default checkEmailReducer
