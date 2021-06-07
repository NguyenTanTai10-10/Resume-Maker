import {EDIT_CIVI,EDIT_CIVI_SUCCESS,EDIT_CIVI_ERROR, LOGOUT_EDIT_INFO_USER} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const editCiviReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case EDIT_CIVI:
      console.log('EDIT_INFO_EDIT_CIVIUSER');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case EDIT_CIVI_SUCCESS:
      console.log('EDIT_CIVI_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: action.data.result_code===1?'Cập nhật thông tin thành công':'Cập nhật không thành công',
      };

    case EDIT_CIVI_ERROR:
      console.log('EDIT_CIVI_ERROR');
      return {
        // ...state,
        status: null,
        loading: false,
        data: null,
        error: 'Lối sever',
      };
      case LOGOUT_EDIT_INFO_USER:
      console.log('LOGOUT_EDIT_INFO_USER');
      return {
        initState
      };
    default:
      return state;
  }
};
export default editCiviReducer;
