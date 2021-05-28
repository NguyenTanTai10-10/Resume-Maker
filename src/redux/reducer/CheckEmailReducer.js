
import {CHECKEMAIL,CHECKEMAIL_SUCCESS,CHECKEMAIL_ERROR, LOGOUTCHECKEMAIL} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const checkEmailReducer = (state = initState, action) => {
  
  
  
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
          message : action.data.result_code === 0 ? "email có thể dùng": "email đã được đăng ký"
        };
  
      case CHECKEMAIL_ERROR:
        console.log('CHECKEMAIL_ERROR');
        return {
          // ...state,
          error:error,
          status: null,
          loading: false,
          data: null,
          
          message : error
        };
        case LOGOUTCHECKEMAIL:
          console.log('LOGOUTCHECKEMAIL');
          return {
            initState
          }
    default:
      return state;
  }
};
export default checkEmailReducer
